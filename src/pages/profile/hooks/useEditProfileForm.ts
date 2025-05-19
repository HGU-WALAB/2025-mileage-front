// import { useFileWithType, useInput } from '@/hooks';
// import { toast } from 'react-toastify';

// import { usePatchProfileMutation } from './usePatchProfileMutation';
// import { ProfileFormValues, ProfileResponse } from '@profile/types/profile';

// interface Props {
//   profile: ProfileResponse;
//   toggleModal: () => void;
// }

// export const useEditProfileForm = ({ profile, toggleModal }: Props) => {
//   const {
//     value: job,
//     handleChange: handleJob
// } = useInput(profile?.job ?? '');
//   const {
//     value: selfDescription,
//     handleChange: handleSelfDescription
// } = useInput( profile?.self_description ?? '' );
//   const { 
//     value: githubLink,
//     handleChange: handleGithubLink 
// } = useInput( profile?.github_link ?? '' );
//   const { 
//     value: blogLink, handleChange: handleBlogLink } = useInput(
//     profile?.blog_link ?? ''
//   );
//   const { value: linkedinLink, handleChange: handleLinkedinLink } = useInput(
//     profile?.linkedin_link ?? ''
//   );
//   const { value: instagramLink, handleChange: handleInstagramLink } = useInput(
//     profile?.instagram_link ?? ''
//   );
//   const { value: profileImage, handleChange: handleProfileImage } = useFileWithType('image');

//   const { patchProfile } = usePatchProfileMutation();

//   const handleSubmit = (
//     e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
//   ) => {
//     e.preventDefault();

//     submitForm();
//   };

//   const submitForm = () => {
//     const formValues: ProfileFormValues = {
//         job,
//         self_description: selfDescription,
//         github_link: githubLink,
//         blog_link: blogLink,
//         linkedin_link: linkedinLink,
//         instagram_link: instagramLink,
//     };

//     if (profileImage instanceof File) {
//       formValues.profile_image_url = profileImage;
//     }

//     patchProfile(
//         { formValues },
//         {
//             onSuccess: () => {
//                 toast.success('프로필이 성공적으로 업데이트되었습니다.');
//                 toggleModal();
//             },
//         }
//     );
//   };

//   return {
//     job: {
//       value: job,
//       handleChange: handleJob,
//     },
//     selfDescription: {
//       value: selfDescription,
//       handleChange: handleSelfDescription,
//     },
//     githubLink: {
//       value: githubLink,
//       handleChange: handleGithubLink,
//     },
//     blogLink: {
//       value: blogLink,
//       handleChange: handleBlogLink,
//     },
//     linkedinLink: {
//       value: linkedinLink,
//       handleChange: handleLinkedinLink,
//     },
//     instagramLink: {
//       value: instagramLink,
//       handleChange: handleInstagramLink,
//     },
//     profileImage: {
//       value: profileImage,
//       handleChange: handleProfileImage,
//     },
//     handleSubmit,
//   };
// };