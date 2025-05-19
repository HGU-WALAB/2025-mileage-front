import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockProfile } from '@/mocks/fixtures/profile';
import { mockSkills } from '@/mocks/fixtures/skills';
import { ProfileResponse } from '@/pages/profile/types/profile';
import { Error401, Error500, randomMswError } from '@/utils/mswError';
import { LiveStorage } from '@mswjs/storage';
import { http, HttpResponse } from 'msw';

const profileStorage = new LiveStorage('profileData', mockProfile);

export const ProfileHandlers = [
  http.get(BASE_URL + `${ENDPOINT.PROFILE}`, () => {
    const { is401Error, is500Error } = randomMswError();

    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockProfile, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.PROFILE}/techStack`, () => {
    const { is500Error } = randomMswError();

    if (is500Error) return Error500();

    return HttpResponse.json(mockSkills, { status: 200 });
  }),

  // http.patch(BASE_URL +   `${ENDPOINT.PROFILE}`, async ({ request }) => {
  //   const techStack = request.
  // }),

  http.patch(BASE_URL + `${ENDPOINT.PROFILE}`, async ({ request }) => {
    const formData = await request.formData();

    const profile_image_url = formData.get('profile_image_url') as File;
    const job = formData.get('job') as string;
    const self_description = formData.get('self_description') as string;
    const github_link = formData.get('github_link') as string;
    const blog_link = formData.get('blog_link') as string;
    const linkedin_link = formData.get('linkedin_link') as string;
    const instagram_link = formData.get('instagram_link') as string;

    profileStorage.update(
      () =>
        ({
          job: job?.toString(),
          self_description: self_description?.toString(),
          github_link: github_link?.toString(),
          blog_link: blog_link?.toString(),
          linkedin_link: linkedin_link?.toString(),
          instagram_link: instagram_link?.toString(),
          profile_image_url: profile_image_url?.toString(),
        }) as ProfileResponse,
    );

    return HttpResponse.json(profileStorage.getValue(), {
      status: 201,
    });
  }),
];
