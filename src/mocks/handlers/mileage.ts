import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mileageList } from '@/mocks/fixtures/mileageList';

export const MileageHandlers = [
  http.get(BASE_URL + `${ENDPOINT.MILEAGE}/:studentId/search`, req => {
    let filteredMileageList = mileageList.data;
    const url = new URL(req.request.url);

    const keyword = url.searchParams.get('keyword');
    const categoryName = url.searchParams.get('categoryName');
    const semester = url.searchParams.get('semester');
    const done = url.searchParams.get('done');

    if (keyword) {
      filteredMileageList = filteredMileageList.filter(
        mileageList =>
          mileageList.categoryName.includes(keyword) ||
          mileageList.capabilityName.includes(keyword) ||
          mileageList.description.includes(keyword),
      );
    }

    if (categoryName) {
      filteredMileageList = filteredMileageList.filter(mileageList => {
        mileageList.categoryName.includes(categoryName);
      });
    }

    if (semester) {
      filteredMileageList = filteredMileageList.filter(mileageList => {
        if (semester === '전체') return true;
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
];
