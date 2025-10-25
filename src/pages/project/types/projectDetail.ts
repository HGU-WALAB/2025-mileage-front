export interface ProjectDetailResponse {
  projectId: number;
  name: string;
  description: string;
  techStack: string[];
  role: string;
  start_date: string;
  github_id: string;
  github_link: string;
  other_links: Array<{ label: string; url: string }>;
  thumbnail_url: string;
  status: 'ongoing' | 'stopped' | 'finished';
  regdate: string;
  moddate: string;
}

export interface ProjectDetailFormValues {
  name: string;
  description: string;
  techStack: string[];
  role: string;
  start_date: string;
  github_id: string;
  github_link: string;
  other_links: Array<{ label: string; url: string }>;
  thumbnail: FileList | null;
  status?: 'ongoing' | 'stopped' | 'finished';
}

export interface PatchProjectDetailRequest {
  projectId: string;
  formValues: ProjectDetailFormValues;
}

export interface PatchProjectStatusRequest {
  projectId: string;
  status: 'ongoing' | 'stopped' | 'finished';
}

export interface PatchProjectStatusResponse {
  message: string;
}
