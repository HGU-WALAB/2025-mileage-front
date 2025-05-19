import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockProjectList } from '@/mocks/fixtures/projectList';
import { Error500, randomMswError } from '@/utils/mswError';
import { LiveStorage } from '@mswjs/storage';
import { http, HttpResponse } from 'msw';

import { ProjectResponse } from '@project/types/project';

const projectStorage = new LiveStorage<ProjectResponse[]>(
  'projectList',
  mockProjectList,
);

const topProjectStorage = new LiveStorage<ProjectResponse>(
  'topProject',
  mockProjectList[0],
);

export const ProjectHandlers = [
  http.get(BASE_URL + `${ENDPOINT.PROJECT}/top`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(topProjectStorage.getValue(), { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.PROJECT}`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(projectStorage.getValue(), { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.PROJECT}/:projectId`, ({ params }) => {
    const { projectId } = params;
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    const project = projectStorage
      .getValue()
      .find(p => p.projectId === Number(projectId));
    return HttpResponse.json(project, { status: 200 });
  }),

  http.post(
    BASE_URL + `${ENDPOINT.PROJECT}/:studentId`,
    async ({ request }) => {
      const formData = await request.formData();

      const name = formData.get('name') as string;
      const role = formData.get('role') as string | null;
      const description = formData.get('description') as string;
      const content = formData.get('content') as string | null;
      const achievement = formData.get('achievement') as string | null;
      const thumbnail = formData.get('thumbnail') as string;
      const deployed_link = formData.get('deployed_link') as string | null;
      const github_link = formData.get('github_link') as string | null;
      const blog_link = formData.get('blog_link') as string | null;
      const start_date = formData.get('start_date') as string;
      const end_date = formData.get('end_date') as string | null;
      const techStack = JSON.parse(
        formData.get('techStack') as string,
      ).techStack;

      const newProject: ProjectResponse = {
        projectId: Date.now(),
        name,
        role,
        description,
        content,
        achievement,
        deployed_link,
        github_link,
        blog_link,
        techStack: { techStack },
        start_date,
        end_date,
        thumbnail: thumbnail ?? null,
      };

      projectStorage.update(prev => [...prev, newProject]);

      return HttpResponse.json(newProject, { status: 201 });
    },
  ),

  http.patch(
    BASE_URL + `${ENDPOINT.PROJECT}/:studentId/:projectId`,
    async ({ request, params }) => {
      const formData = await request.formData();

      const name = formData.get('name') as string;
      const role = formData.get('role') as string | null;
      const description = formData.get('description') as string;
      const content = formData.get('content') as string | null;
      const achievement = formData.get('achievement') as string | null;
      const thumbnail = formData.get('thumbnail') as string;
      const deployed_link = formData.get('deployed_link') as string | null;
      const github_link = formData.get('github_link') as string | null;
      const blog_link = formData.get('blog_link') as string | null;
      const start_date = formData.get('start_date') as string;
      const end_date = formData.get('end_date') as string | null;
      const techStack = JSON.parse(
        formData.get('techStack') as string,
      ).techStack;

      const { projectId } = params;

      const prev = projectStorage.getValue();
      const existing = prev.find(p => String(p.projectId) === projectId);

      if (!existing) {
        return new Response(
          JSON.stringify({ message: '프로젝트를 찾을 수 없습니다.' }),
          { status: 404 },
        );
      }

      const updatedProject: ProjectResponse = {
        ...existing,
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
        thumbnail: thumbnail ?? null,
      };

      projectStorage.update(projects =>
        projects.map(p =>
          String(p.projectId) === projectId ? updatedProject : p,
        ),
      );

      return HttpResponse.json(updatedProject, { status: 200 });
    },
  ),

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
];
