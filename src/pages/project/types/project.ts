export interface ProjectResponse {
  projectId: number; // 프로젝트 고유 ID (PK)
  name: string; // 프로젝트 이름
  role: string; // 프로젝트에서 맡은 역할
  description: string; // 프로젝트 상세 설명
  content: string; // 기타
  achievement: string; // 성과 설명

  github_link: string; // GitHub 링크
  blog_link: string; // 블로그 링크
  deployed_link: string; // 배포된 서비스 링크

  start_date: string; // 프로젝트 시작일 (YYYY-MM-DD)
  end_date: string; // 프로젝트 종료일 (YYYY-MM-DD)

  image_url: string; // 대표 이미지 파일명 (로고 등)
  thumbnail: string; // 대표 스크린샷 이미지 파일명

  techStack: {
    techStack: string[]; // 사용한 기술 스택 리스트
  };
}

export interface ProjectFormValues {
  name: string;
  role: string;
  description: string;
  content: string;
  start_date: string;
  end_date: string;
  deployed_link: string;
  github_link: string;
  blog_link: string;
  achievement: string;
  techStack: string[];
  thumbnail: FileList;
}
