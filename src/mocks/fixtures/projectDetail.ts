import { ProjectDetailResponse } from '@project/types/projectDetail';

export const mockProjectDetail: ProjectDetailResponse = {
  projectId: 1,
  name: 'Toaster Booth',
  description: '웹캠을 활용한 네컷 사진 촬영 웹 서비스입니다. 다양한 프레임, 텍스트 스티커 기능을 제공하며, 이미지 저장 시 Safari 대응을 위해 재시도 로직을 구현했습니다.',
  techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Supabase'],
  role: '프론트엔드 개발',
  start_date: '2024-02-01',
  github_id: 'naimkim',
  github_link: 'https://github.com/yourname/toaster-booth',
  other_links: [
    { label: 'Demo', url: 'https://toaster-booth.vercel.app/' },
    { label: 'Blog', url: 'https://velog.io/@yourname/toaster-booth-retrospective' }
  ],
  thumbnail_url: 'https://velog.velcdn.com/images/healim01/post/7866fa2b-8d93-47b9-b16c-6667124ea191/image.png',
  status: 'ongoing',
  regdate: '2024-02-01T12:35:10',
  moddate: '2024-02-20T19:40:03'
};
