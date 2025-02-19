import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockEtcMileageList } from '@/mocks/fixtures/etcMileageList';
import { mockMileageList } from '@/mocks/fixtures/mileageList';
import { Error401, Error500, randomMswError } from '@/utils/mswError';

export const MileageHandlers = [
  http.get(BASE_URL + `${ENDPOINT.MILEAGE}/:studentId/search`, req => {
    const { is401Error, is500Error } = randomMswError();

    if (is401Error) return Error401();
    if (is500Error) return Error500();

    let filteredMileageList = mockMileageList.data;
    const url = new URL(req.request.url);

    const keyword = url.searchParams.get('keyword');
    const category = url.searchParams.get('category');
    const semester = url.searchParams.get('semester');
    const done = url.searchParams.get('done');

    if (keyword) {
      filteredMileageList = filteredMileageList.filter(
        mileageList =>
          mileageList.subitemName.includes(keyword) ||
          mileageList.categoryName.includes(keyword) ||
          mileageList.capabilityName.includes(keyword) ||
          mileageList.description.includes(keyword),
      );
    }

    if (category) {
      filteredMileageList = filteredMileageList.filter(mileageList => {
        if (category === 'all') return true;
        return mileageList.categoryName.includes(category);
      });
    }

    if (semester) {
      filteredMileageList = filteredMileageList.filter(mileageList => {
        if (semester === 'all') return true;
        return mileageList.semester.includes(semester);
      });
    }

    if (done) {
      filteredMileageList = filteredMileageList.filter(mileageList => {
        if (done === 'all') return true;
        if (done === 'Y') return mileageList.done === true;
        if (done === 'N') return mileageList.done === false;
        return true;
      });
    }

    return HttpResponse.json({ data: filteredMileageList }, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.NEW_MILEAGE}`, () => {
    return HttpResponse.json({ data: mockEtcMileageList }, { status: 200 });
  }),

  http.post(BASE_URL + `${ENDPOINT.NEW_MILEAGE}`, () => {
    return HttpResponse.json({}, { status: 200 });
  }),
];
