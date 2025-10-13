export interface OtherLink {
  label: string;
  url: string;
}

export interface ProjectArchiveAddFormValues {
  name: string;
  description: string;
  techStack: string[];
  role?: string;
  start_date: string;
  github_id?: string;
  github_link?: string;
  other_links?: OtherLink[];
  thumbnail?: FileList | null;
}

export interface PostProjectArchiveAddRequest {
  formValues: ProjectArchiveAddFormValues;
}
