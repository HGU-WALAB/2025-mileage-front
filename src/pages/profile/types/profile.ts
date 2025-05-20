export interface ProfileResponse {
  studentId: string;
  studentName: string;

  job: string | null;
  self_description: string | null;

  profile_image_url: string | null;

  github_link: string | null;
  blog_link: string | null;
  linkedin_link: string | null;
  instagram_link: string | null;
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
export interface TechStack {
  techStack: string[];
}
