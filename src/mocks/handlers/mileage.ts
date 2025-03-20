import { http, HttpResponse, PathParams } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockMileageList } from '@/mocks/fixtures/mileageList';
import { Error400, Error401, Error500, randomMswError } from '@/utils/mswError';

import { mockEtcMileageList } from '@/mocks/fixtures/etcMileageList';
import { mockSubmittedMileageList } from '@/mocks/fixtures/submittedMileageList';
import { SubmittedMileageResponse } from '@/types/mileage';
import { LiveStorage } from '@mswjs/storage';

export const MileageHandlers = [
  http.get(BASE_URL + `${ENDPOINT.MILEAGE}/search`, req => {
    const { is400Error, is401Error, is500Error } = randomMswError();

    if (is400Error) return Error400();
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    let filteredMileageList = mockMileageList;
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
          mileageList.description1.includes(keyword),
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

    return HttpResponse.json(filteredMileageList, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.ETC_MILEAGE}`, () => {
    const { is400Error, is401Error, is500Error } = randomMswError();

    if (is400Error) return Error400();
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockEtcMileageList, { status: 200 });
  }),

  http.post<
    PathParams,
    { schedule: Omit<SubmittedMileageResponse, 'regDate'> }
  >(BASE_URL + `${ENDPOINT.ETC_MILEAGE}/:studentId`, async ({ request }) => {
    const requestData = await request.formData();

    const subitemId = requestData.get('subitemId');
    const semester = requestData.get('semester');
    const description1 = requestData.get('description1');
    const description2 = requestData.get('description2');
    const file = requestData.get('file');

    submittedMileage.update(prevData =>
      prevData.concat({
        recordId: prevData.length + 1,
        subitemId: Number(subitemId),
        subitemName: '기타',
        semester: semester,
        description1,
        description2,
        fileId: file ? prevData.length + 1 : null,
        file: file instanceof File ? file.name : null,
        uniqueFileName: file instanceof File ? file.name : null,
        modDate: new Date().toDateString(),
      } as SubmittedMileageResponse),
    );

    return HttpResponse.json(mockEtcMileageList, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.ETC_MILEAGE}/get`, () => {
    const { is400Error, is401Error, is500Error } = randomMswError();

    if (is400Error) return Error400();
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(submittedMileage.getValue(), { status: 200 });
  }),

  http.patch(
    BASE_URL + `${ENDPOINT.ETC_MILEAGE}/:studentId/:recordId`,
    async ({ params, request }) => {
      const { is400Error, is401Error, is500Error } = randomMswError();

      if (is400Error) return Error400();
      if (is401Error) return Error401();
      if (is500Error) return Error500();

      const recordId = Number(params.recordId);
      const requestData = await request.formData();

      const description1 = requestData.get('description1');
      const description2 = requestData.get('description2');
      const file = requestData.get('file');

      submittedMileage.update(prevData =>
        prevData.map(item =>
          item.recordId === recordId
            ? ({
                ...item,
                description1: description1 as string,
                description2: description2 as string,
                file: file?.toString(),
                uniqueFileName: file?.toString(),
                modDate: new Date().toDateString(),
              } as SubmittedMileageResponse)
            : item,
        ),
      );

      return HttpResponse.json({}, { status: 200 });
    },
  ),

  http.delete(
    BASE_URL + `${ENDPOINT.ETC_MILEAGE}/:studentId/:recordId`,
    ({ params }) => {
      const { is400Error, is401Error, is500Error } = randomMswError();

      if (is400Error) return Error400();
      if (is401Error) return Error401();
      if (is500Error) return Error500();

      const recordId = Number(params.recordId);
      submittedMileage.update(prevData =>
        prevData.filter(item => item.recordId !== recordId),
      );

      return HttpResponse.json({}, { status: 200 });
    },
  ),

  http.get(BASE_URL + `${ENDPOINT.ETC_MILEAGE}/file/:uniqueFileName`, () => {
    const { is400Error, is401Error, is500Error } = randomMswError();

    if (is400Error) return Error400();
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json({}, { status: 200 });
  }),
];

const submittedMileage = new LiveStorage<SubmittedMileageResponse[]>(
  'submittedMileage',
  mockSubmittedMileageList,
);
