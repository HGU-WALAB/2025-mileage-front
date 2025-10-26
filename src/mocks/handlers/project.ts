import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockProjectList } from '@/mocks/fixtures/projectList';
import { mockProjectArchiveList } from '@/mocks/fixtures/projectArchiveList';
import { mockProjectDetail } from '@/mocks/fixtures/projectDetail';
import { Error500, randomMswError } from '@/utils/mswError';
import { LiveStorage } from '@mswjs/storage';
import { http, HttpResponse } from 'msw';

import { ProjectResponse } from '@project/types/project';
import { ProjectArchiveResponse } from '@project/types/projectArchive';
import { ProjectDetailResponse } from '@project/types/projectDetail';

const projectStorage = new LiveStorage<ProjectResponse[]>(
  'projectList',
  mockProjectList,
);

const topProjectStorage = new LiveStorage<ProjectResponse>(
  'topProject',
  mockProjectList[0],
);

const projectArchiveStorage = new LiveStorage<ProjectArchiveResponse[]>(
  'projectArchiveList',
  mockProjectArchiveList,
);

const projectDetailStorage = new LiveStorage<ProjectDetailResponse>(
  'projectDetail',
  mockProjectDetail,
);

export const ProjectHandlers = [
  http.get(BASE_URL + `${ENDPOINT.PROJECT}/top`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(topProjectStorage.getValue(), { status: 200 });
  }),

  http.patch(BASE_URL + `${ENDPOINT.PROJECT}/top`, async ({ request }) => {
    const { projectId } = (await request.json()) as { projectId: number };
    const { is500Error } = randomMswError();

    if (is500Error) return Error500();

    const project = projectStorage
      .getValue()
      .find(p => p.projectId === projectId);

    if (!project) {
      return HttpResponse.json(
        { message: '해당 프로젝트를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    topProjectStorage.update(() => project);

    return HttpResponse.json(
      {
        message: '대표 프로젝트가 수정되었습니다.',
      },
      { status: 200 },
    );
  }),

  http.get(BASE_URL + `${ENDPOINT.PROJECT}`, ({ request }) => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    const url = new URL(request.url);
    const isArchive = url.searchParams.get('archive') === 'true';

    if (isArchive) {
      return HttpResponse.json(projectArchiveStorage.getValue(), { status: 200 });
    }

    return HttpResponse.json(projectStorage.getValue(), { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.PROJECT}/:projectId`, ({ params }) => {
    const { projectId } = params;
    console.log('MSW: Project detail request for projectId:', projectId);
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    // 프로젝트 상세보기 API는 새로운 형식으로 응답
    const baseProjectDetail = projectDetailStorage.getValue();
    
    // projectId에 따라 다른 데이터를 반환
    const modifiedProjectDetail = {
      ...baseProjectDetail,
      projectId: Number(projectId),
      name: `Project ${projectId}`,
      description: `This is the description for Project ${projectId}`,
      github_id: `user${projectId}`,
      github_link: `https://github.com/user${projectId}/project${projectId}`,
      other_links: [
        { label: 'Demo', url: `https://demo${projectId}.example.com` },
        { label: 'Blog', url: `https://blog${projectId}.example.com` }
      ],
      thumbnail_url: `https://example.com/thumbnail${projectId}.png`,
      status: 'ongoing' as const,
      regdate: new Date().toISOString(),
      moddate: new Date().toISOString()
    };

    console.log('MSW: Returning project detail:', modifiedProjectDetail);
    return HttpResponse.json(modifiedProjectDetail, { status: 200 });
  }),

  http.post(BASE_URL + `${ENDPOINT.PROJECT}`, async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get('name');
    const role = formData.get('role');
    const description = formData.get('description');
    const content = formData.get('content');
    const achievement = formData.get('achievement');
    const thumbnail = formData.get('thumbnail');
    const deployed_link = formData.get('deployed_link');
    const github_link = formData.get('github_link');
    const blog_link = formData.get('blog_link');
    const start_date = formData.get('start_date');
    const end_date = formData.get('end_date');
    const github_id = formData.get('github_id');
    const other_links = formData.get('other_links');
    
    // techStack 처리 (새로운 API 스펙)
    let techStack;
    try {
      const techStackValue = formData.get('techStack') as string;
      techStack = JSON.parse(techStackValue);
    } catch {
      techStack = formData.get('techStack');
    }

    const newProject = {
      projectId: projectStorage.getValue().length + 1,
      name,
      role,
      description,
      content,
      achievement,
      deployed_link,
      github_link,
      blog_link,
      techStack: Array.isArray(techStack) ? { techStack } : techStack,
      start_date,
      end_date,
      thumbnail: thumbnail instanceof File ? thumbnail.name : null,
    } as ProjectResponse;

    projectStorage.update(prev => prev.concat(newProject));

    // 프로젝트 아카이브 데이터도 업데이트
    if (github_id && github_link) {
      const repositoryName = github_link.toString().split('/').pop() || null;
      const archiveProject = {
        projectId: newProject.projectId,
        projectName: name as string,
        status: 'active' as const,
        startDate: start_date as string,
        repositoryName,
        techStack: Array.isArray(techStack) ? techStack : [],
      };
      
      projectArchiveStorage.update(prev => prev.concat(archiveProject));
    }

    return HttpResponse.json(
      { message: '프로젝트가 등록되었습니다.' },
      { status: 201 }
    );
  }),

  http.put(
    BASE_URL + `${ENDPOINT.PROJECT}/:projectId`,
    async ({ request, params }) => {
      const formData = await request.formData();

      const name = formData.get('name');
      const role = formData.get('role');
      const description = formData.get('description');
      const content = formData.get('content');
      const achievement = formData.get('achievement');
      const thumbnail = formData.get('thumbnail');
      const deployed_link = formData.get('deployed_link');
      const github_link = formData.get('github_link');
      const blog_link = formData.get('blog_link');
      const start_date = formData.get('start_date');
      const end_date = formData.get('end_date');
      const techStack = JSON.parse(
        formData.get('techStack') as string,
      ).techStack;

      const { projectId } = params;

      projectStorage.update(projects =>
        projects.map(item =>
          String(item.projectId) === projectId
            ? ({
                ...item,
                name,
                role,
                description,
                content,
                achievement,
                deployed_link,
                github_link,
                blog_link,
                techStack: { techStack: techStack },
                start_date,
                end_date,
                thumbnail: thumbnail?.toString(),
              } as ProjectResponse)
            : item,
        ),
      );

      return HttpResponse.json(projectStorage, { status: 200 });
    },
  ),

  // 프로젝트 상세보기 수정 API (PATCH)
  http.patch(
    BASE_URL + `${ENDPOINT.PROJECT}/:projectId`,
    async ({ request, params }) => {
      const formData = await request.formData();

      const name = formData.get('name');
      const description = formData.get('description');
      const techStack = formData.get('techStack');
      const role = formData.get('role');
      const start_date = formData.get('start_date');
      const github_id = formData.get('github_id');
      const github_link = formData.get('github_link');
      const other_links = formData.get('other_links');
      const thumbnail = formData.get('thumbnail');

      const { projectId } = params;

      // techStack 파싱 - toFormData가 { techStack: [...] } 형태로 보내므로
      let parsedTechStack: string[] = [];
      try {
        const parsed = JSON.parse(techStack as string);
        parsedTechStack = parsed.techStack || parsed;
      } catch {
        parsedTechStack = [];
      }

      // other_links 파싱 - toFormData가 { other_links: [...] } 형태로 보내므로
      let parsedOtherLinks: Array<{ label: string; url: string }> = [];
      try {
        const parsed = JSON.parse(other_links as string);
        parsedOtherLinks = parsed.other_links || parsed;
      } catch {
        parsedOtherLinks = [];
      }

      projectDetailStorage.update(prev => ({
        ...prev,
        name: name as string,
        description: description as string,
        techStack: parsedTechStack,
        role: role as string,
        start_date: start_date as string,
        github_id: github_id as string,
        github_link: github_link as string,
        other_links: parsedOtherLinks,
        thumbnail_url: thumbnail instanceof File ? URL.createObjectURL(thumbnail) : prev.thumbnail_url,
        moddate: new Date().toISOString(),
      }));

      return HttpResponse.json(
        { message: '프로젝트가 수정되었습니다.' },
        { status: 201 }
      );
    },
  ),

  // 프로젝트 상태 수정 API (PATCH)
  http.patch(
    BASE_URL + `${ENDPOINT.PROJECT}/:projectId/status`,
    async ({ request, params }) => {
      const { status } = await request.json() as { status: 'ongoing' | 'stopped' | 'finished' };
      const { projectId } = params;

      const { is500Error } = randomMswError();
      if (is500Error) return Error500();

      // projectDetailStorage에서 상태 업데이트
      projectDetailStorage.update(prev => ({
        ...prev,
        status,
        moddate: new Date().toISOString(),
      }));

      return HttpResponse.json(
        { message: '프로젝트 상태가 수정되었습니다.' },
        { status: 200 }
      );
    },
  ),

  http.delete(BASE_URL + `${ENDPOINT.PROJECT}/:projectId`, ({ params }) => {
    const { projectId } = params;
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    const project = projectStorage
      .getValue()
      .filter(p => p.projectId !== Number(projectId));

    projectStorage.update(() => project);

    return HttpResponse.json(
      {
        message: '프로젝트가 삭제되었습니다.',
      },
      { status: 200 },
    );
  }),
];
