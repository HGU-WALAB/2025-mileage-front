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

export const ProjectHandlers = [
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
        techStack,
        start_date,
        end_date,
        thumbnail: thumbnail ?? null,
      };

      projectStorage.update(prev => [...prev, newProject]);

      return HttpResponse.json(newProject, { status: 201 });
    },
  ),

  http.get(BASE_URL + `${ENDPOINT.PROJECT}/top`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    const topProject = projectStorage.getValue()[0];
    return HttpResponse.json(topProject, { status: 200 });
  }),
];
