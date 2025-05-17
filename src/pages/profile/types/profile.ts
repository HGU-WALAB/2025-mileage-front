export interface ProfileResponse {
  profile_image_url?: string;
  job?: string;
  self_description?: string;
  github_link?: string;
  blog_link?: string;
  linkedin_link?: string;
  instagram_link?: string;
}

export interface ProfileFormValues {
  profile_image_url?: File;
  job?: string;
  self_description?: string;
  github_link?: string;
  blog_link?: string;
  linkedin_link?: string;
  instagram_link?: string;
}

export interface PatchProfileRequest {
  formValues: ProfileFormValues;
}