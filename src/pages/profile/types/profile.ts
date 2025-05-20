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

export interface TechStack {
  techStack: string[];
}

export interface ProfileImage {
  image: Blob;
}
export interface PatchSubmittedProfileRequest {
  job?: string;
  self_description?: string;

  profile_image_url?: File;

  github_link?: string;
  blog_link?: string;
  linkedin_link?: string;
  instagram_link?: string;
}
