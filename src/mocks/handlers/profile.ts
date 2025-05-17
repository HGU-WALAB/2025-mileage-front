import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockProfile } from '@/mocks/fixtures/profile';
import { PatchProfileRequest } from '@/pages/profile/types/profile';
import { Error400, Error401, Error500, randomMswError } from '@/utils/mswError';
import { LiveStorage } from '@mswjs/storage';
import { http, HttpResponse } from 'msw';

const profileStorage = new LiveStorage('profileData', mockProfile);
const profileStorageForPatch = new LiveStorage<PatchProfileRequest>('profilePatchData', {
  formValues: {
    profile_image_url: new File([], ''),
  },
});

export const ProfileHandlers = [
  http.get(BASE_URL + ENDPOINT.PROFILE, () => {
    const { is400Error, is401Error, is500Error } = randomMswError();
    if (is400Error) return Error400();
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(profileStorage.getValue(), { status: 200 });
  }),

  http.patch(
      BASE_URL + `${ENDPOINT.PROFILE}`,
      async ({ request }) => {
        const formData = await request.formData();

        const profile_image_url = formData.get('profile_image_url') as File;
        const job = formData.get('job') as string;
        const self_description = formData.get('self_description') as string;
        const github_link = formData.get('github_link') as string;
        const blog_link = formData.get('blog_link') as string;
        const linkedin_link = formData.get('linkedin_link') as string;
        const instagram_link = formData.get('instagram_link') as string;

        profileStorageForPatch.update(() => ({
            formValues: {
                profile_image_url,
                job,
                self_description,
                github_link,
                blog_link,
                linkedin_link,
                instagram_link,
            }
        }));
  
        return HttpResponse.json(profileStorageForPatch.getValue(), { status: 201 });
      },
    ),
];