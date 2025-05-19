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

      projectStorage.update(prev =>
        prev.concat({
          projectId: prev.length + 1,
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
          thumbnail: thumbnail instanceof File ? thumbnail.name : null,
        } as ProjectResponse),
      );

      return HttpResponse.json(projectStorage, { status: 201 });
    },
  ),

  http.patch(
    BASE_URL + `${ENDPOINT.PROJECT}/:studentId/:projectId`,
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
