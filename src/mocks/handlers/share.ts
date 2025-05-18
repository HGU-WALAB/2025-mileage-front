import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockProfile } from '@/mocks/fixtures/profile';
import { mockProjectList } from '@/mocks/fixtures/projectList';
import { mockSkills } from '@/mocks/fixtures/skills';
import { Error401, Error500, randomMswError } from '@/utils/mswError';
import { http, HttpResponse } from 'msw';

export const ShareHandlers = [
  http.get(BASE_URL + `${ENDPOINT.SHARE}/:id/techStack`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockSkills, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.SHARE}/:id/projectTop`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockProjectList[1], { status: 200 });
  }),
  http.get(BASE_URL + `${ENDPOINT.SHARE}/:id`, () => {
    const { is401Error, is500Error } = randomMswError();
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockProfile, { status: 200 });
  }),

];
