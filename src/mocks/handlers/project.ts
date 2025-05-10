import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { http, HttpResponse } from 'msw';

import { mockProjectList } from '@/mocks/fixtures/projectList';
import { Error500, randomMswError } from '@/utils/mswError';

export const ProjectHandlers = [
  http.get(BASE_URL + `${ENDPOINT.PROJECT}`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockProjectList, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.PROJECT}/:id`, ({ params }) => {
    const { id } = params;

    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    const project = mockProjectList.find(p => p.projectId === Number(id));
    return HttpResponse.json(project, { status: 200 });
  }),
];
