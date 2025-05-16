export interface ProfileResponse {
  studentId: string;
  studentName: string;

  job: string | null;
  introduce: string | null;

  profile_image_url: string | null;

  github_link: string | null;
  blog_link: string | null;
  linkedin_link: string | null;
  instagram_link: string | null;
}

export interface TechStack {
  techStack: string[];
}
