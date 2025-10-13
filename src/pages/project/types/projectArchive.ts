export interface ProjectArchiveResponse {
  projectId: number;
  projectName: string;
  status: 'active' | 'inactive' | 'finished';
  startDate: string; // YYYY-MM-DD
  repositoryName: string | null;
  techStack: string[];
}
