import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockActivityRecommend } from '@/mocks/fixtures/activityRecommend';
import { mockCapability } from '@/mocks/fixtures/capability';
import { mockCapabilityDetail } from '@/mocks/fixtures/capabilityDetail';
import {
  mockCompareCapability1,
  mockCompareCapability2,
  mockCompareCapability3,
} from '@/mocks/fixtures/compareCapability';
import { mockSemesterCapability } from '@/mocks/fixtures/semesterCapability';
import { Error401, Error500, randomMswError } from '@/utils/mswError';
import { http, HttpResponse } from 'msw';

export const CapabilityHandlers = [
  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/milestone`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockCapability, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/milestone/compare`, req => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    const url = new URL(req.request.url);

    const term = url.searchParams.get('term');
    const studentType = url.searchParams.get('studentType');

    if (term && !studentType)
      return HttpResponse.json(mockCompareCapability1, { status: 200 });
    if (studentType)
      return HttpResponse.json(mockCompareCapability3, { status: 200 });
    return HttpResponse.json(mockCompareCapability2, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/semester`, () => {
    const { is401Error, is500Error } = randomMswError();

    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockSemesterCapability, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.MILEAGE}/detail`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockCapabilityDetail, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.CAPABILITY}/suggest`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockActivityRecommend, { status: 200 });
  }),
];
