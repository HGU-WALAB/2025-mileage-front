import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockCapability } from '@/mocks/fixtures/capability';
import { mockCompareCapability } from '@/mocks/fixtures/compareCapability';
import { mockSemesterCapability } from '@/mocks/fixtures/semesterCapability';
import { Error401, Error500, randomMswError } from '@/utils/mswError';

export const CapabilityHandlers = [
  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/milestone`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockCapability, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/milestone/compare`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockCompareCapability, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/semester`, () => {
    const { is401Error, is500Error } = randomMswError();

    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockSemesterCapability, { status: 200 });
  }),
];
