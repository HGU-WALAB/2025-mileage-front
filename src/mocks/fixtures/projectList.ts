import { ProjectResponse } from '@project/types/project';

export const mockProjectList: ProjectResponse[] = [
  {
    projectId: 1,
    name: 'Toaster Booth',
    role: '프론트엔드 개발',
    description:
      '웹캠을 활용한 네컷 사진 촬영 웹 서비스입니다. 다양한 프레임, 텍스트 스티커 기능을 제공하며, 이미지 저장 시 Safari 대응을 위해 재시도 로직을 구현했습니다.',
    content: `
- **Rive를 활용한 인터랙티브 애니메이션 구현**
    - Rive와 React를 연동해 ‘토스터기에서 빵이 튀어나오며 촬영이 시작되는’ 자연스러운 애니메이션 도입
    - 상태 기반 제어 (Rive StateMachine)와 사용자 상호작용을 연결해 **직관적인 피드백과 몰입감 있는 UX 제공**
    
    ⇒ rive 활용 이유   

     
- **Supabase 기반 프레임 관리 시스템 도입**
    - Supabase로 프레임 데이터 및 태그 정보 관리, 퍼블릭 읽기 전용 정책으로 보안성 및 성능 향상
    - **클라이언트 측 쿼리 최적화**를 통해 불필요한 서버 호출을 제거하고 깜빡임 없는 사용자 경험 제공
`,
    achievement:
      '런칭 후 2주 만에 2천 건 이상 사용, iOS Safari 이미지 저장 버그 해결 및 GitHub 이슈 공유',
    github_link: 'https://github.com/yourname/toaster-booth',
    blog_link: 'https://velog.io/@yourname/toaster-booth-retrospective',
    deployed_link: 'https://toaster-booth.vercel.app/',
    start_date: '2024-02-01',
    end_date: '2024-02-20',
    thumbnail:
      'https://velog.velcdn.com/images/healim01/post/7866fa2b-8d93-47b9-b16c-6667124ea191/image.png',
    techStack: {
      techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Supabase'],
    },
  },
  {
    projectId: 2,
    name: '마일스톤 시스템',
    role: '단독 개발 (프론트)',
    description:
      '소프트웨어 전공생들의 활동 기반 역량을 시각화하는 시스템입니다. 마일리지 등록, 검수, 누적 그래프 및 비교 분석 기능을 제공합니다.',
    content: '전공 역량 분석 시스템',
    achievement:
      '교내 시범 운영, 사용자 만족도 설문 평균 4.8점, Safari 이미지 다운로드 이슈 대응 경험',
    github_link: 'https://github.com/yourname/milestone-system',
    blog_link: 'https://velog.io/@yourname/milestone-dev-story',
    deployed_link: 'https://milestone.handong.edu/',
    start_date: '2024-11-01',
    end_date: '2024-12-31',
    thumbnail:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWepTo%2FbtsMQT0RaiY%2FkFYvJcBKT55agYUvkHmRk1%2Fimg.png',
    techStack: {
      techStack: ['React', 'Zustand', 'TanStack Query', 'Emotion', 'MSW'],
    },
  },
  {
    projectId: 5,
    name: '방끗: 자취 체크리스트 서비스',
    role: 'UX 설계 및 프론트엔드',
    description:
      '처음 자취하는 사람들을 위한 체크리스트 기반 방 점검 서비스입니다. 사용자가 직접 문항을 선택하고, 점검을 하며 방 상태를 기록할 수 있습니다.',
    content: '자취방 체크리스트 서비스',
    achievement:
      '교내 창업 아이디어 공모전 수상, 실제 자취생 대상 UX 테스트 진행',
    github_link: 'https://github.com/yourname/bangkkeut',
    blog_link: 'https://velog.io/@yourname/rentcheck-retro',
    deployed_link: 'https://bangkkeut.vercel.app/',
    start_date: '2024-08-01',
    end_date: '2024-08-31',
    thumbnail: 'https://bang-ggood.com/static/images/bang-ggood-thumbnail.png',
    techStack: {
      techStack: ['Next.js', 'TypeScript', 'Zustand', 'Emotion', 'MSW'],
    },
  },
  {
    projectId: 3,
    name: 'Curio Quest; 질문을 통해 원하는 전문성을 갖추다',
    role: '프론트엔드',
    description:
      '질문을 통해 진로를 탐색할 수 있는 진로 설계 서비스입니다. 퀴즈 기반 UX와 결과 분석 화면을 구현했습니다.',
    content: '진로 탐색 퀴즈 서비스',
    achievement: '교내 경진대회 최우수상 수상, 사용자 평균 참여율 87%',
    github_link: 'https://github.com/yourname/curio-quest',
    blog_link: 'https://velog.io/@yourname/curio-quest-review',
    deployed_link: 'https://curio.quest.app/',
    start_date: '2023-07-31',
    end_date: '2023-08-18',
    thumbnail:
      'https://private-user-images.githubusercontent.com/74346290/309473845-568c1643-9eba-4bdf-a5aa-ba04c24b7830.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyOTE4ODcsIm5iZiI6MTc0NzI5MTU4NywicGF0aCI6Ii83NDM0NjI5MC8zMDk0NzM4NDUtNTY4YzE2NDMtOWViYS00YmRmLWE1YWEtYmEwNGMyNGI3ODMwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTE1VDA2NDYyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTViYzI3MWFlYjgwNzU1OWNmZjY4YjU1Y2IxYTNjZWMxMzBhNmNmZDViOWYyODY4MzY1OGFhYTJlODA2YjlmODYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.l7zzkk3ketUmAXJORb49EOQyhCyd8JzKNXjUXJJ62YA',
    techStack: {
      techStack: ['React', 'TypeScript', 'React Router', 'Firebase'],
    },
  },
  {
    projectId: 4,
    name: 'ITABLE',
    role: '프론트엔드',
    description:
      '학교 공간 예약 시스템입니다. 카카오 로그인, 공간 필터링, 예약 내역 확인 등의 기능을 제공합니다.',
    content: '학교 공간 예약 시스템',
    achievement:
      '2023 한동대학교 교내 공모전 최우수상 수상, 4개 부서 실사용 도입',
    github_link: 'https://github.com/yourname/hanspace',
    blog_link: 'https://velog.io/@yourname/hanspace-log',
    deployed_link: 'https://hanspace.handong.edu/',
    start_date: '2023-09-01',
    end_date: '',
    thumbnail:
      'https://private-user-images.githubusercontent.com/74346290/256971512-9087c554-63af-4513-b00c-a820ecb81568.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyOTAxMTksIm5iZiI6MTc0NzI4OTgxOSwicGF0aCI6Ii83NDM0NjI5MC8yNTY5NzE1MTItOTA4N2M1NTQtNjNhZi00NTEzLWIwMGMtYTgyMGVjYjgxNTY4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTE1VDA2MTY1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzMjQxOGExYzdiYzhkMTQ3ZWUwMjg5OTJkZWJlMGUwODNjZTU1OWFiMDQ3MTE5ZjIwZjUwNWMwN2M0MDY1MzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.4sVbhkMjZXj-1iQ6Io_NRepNh8sx6jt2XevcpvmH7Uc',
    techStack: {
      techStack: [
        'React',
        'TypeScript',
        'Recoil',
        'Styled-Components',
        'Kakao Auth',
      ],
    },
  },
  {
    projectId: 6,
    name: '코드잽',
    role: '프론트엔드 단독 개발',
    description:
      '개발자의 커리어와 프로젝트를 소개할 수 있는 미니 포트폴리오 사이트 빌더입니다. Markdown 기반 글쓰기와 다크모드 테마 전환 기능을 제공합니다.',
    content: '개발자 포트폴리오 생성기',
    achievement:
      'GitHub Trending 진입, 개발자 커뮤니티에서 약 2,000회 이상 사용됨',
    github_link: 'https://github.com/yourname/devlogme',
    blog_link: 'https://velog.io/@yourname/devlog-maker-story',
    deployed_link: 'https://devlog.me/',
    start_date: '2024-05-15',
    end_date: '2024-06-10',
    thumbnail:
      'https://private-user-images.githubusercontent.com/78201530/379972130-969d44d2-efe6-4fca-a6bc-3856d62ac5f0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDcyOTAyMTMsIm5iZiI6MTc0NzI4OTkxMywicGF0aCI6Ii83ODIwMTUzMC8zNzk5NzIxMzAtOTY5ZDQ0ZDItZWZlNi00ZmNhLWE2YmMtMzg1NmQ2MmFjNWYwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTE1VDA2MTgzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcxZjZmY2M5NTMyZWJjZTRmYmRkNmNhZWFmOGIxYmZiZTQ3MWZiOTA0NjEyYzUxYmUwMjk0MzQ2NDM4NTVmOTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.1pfOQwhAbdFZ5J36d5lVI1_8p49d8J4hEAupAN0EGeA',
    techStack: {
      techStack: ['React', 'Next.js', 'TailwindCSS', 'Gray-Matter', 'Vercel'],
    },
  },
  {
    projectId: 7,
    name: '오늘뭐먹지?',
    role: '프론트엔드 / 퍼블리싱',
    description:
      '메뉴 선택을 도와주는 가벼운 추천 서비스입니다. 유저가 선호도나 카테고리를 선택하면 오늘의 추천 메뉴를 카드 형태로 제공합니다.',
    content: '메뉴 추천 웹앱',
    achievement: '누적 방문자 1만명, UX 테스트를 통한 클릭률 20% 증가',
    github_link: 'https://github.com/yourname/todayeat',
    blog_link: '',
    deployed_link: 'https://todayeat.app/',
    start_date: '2023-06-01',
    end_date: '2023-06-10',
    thumbnail:
      'https://qshop.ai/blog/wp-content/uploads/2024/05/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%A2%85%EB%A5%98-5%EA%B0%80%EC%A7%80%EC%99%80-%EB%AC%B4%EB%A3%8C-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-4-1024x683.jpg',
    techStack: {
      techStack: ['Vue.js', 'TypeScript', 'SCSS'],
    },
  },
  {
    projectId: 8,
    name: 'Todolist Pro',
    role: '프론트엔드',
    description:
      '태그, 필터, 마감일 기반으로 할 일을 정리할 수 있는 To-do 앱입니다. 로컬스토리지와 IndexedDB를 활용해 오프라인 저장도 지원합니다.',
    content: '강력한 할 일 관리 앱',
    achievement: '피드백 기반 3차 리팩토링 진행, 모바일 사용자 만족도 92%',
    github_link: 'https://github.com/yourname/todolist-pro',
    blog_link: '',
    deployed_link: 'https://todolist-pro.app/',
    start_date: '2023-10-01',
    end_date: '2023-10-20',
    thumbnail: 'https://www.inodea.com/ino_rp/main/img/main_rpn02.jpg',
    techStack: {
      techStack: ['React', 'TypeScript', 'IndexedDB', 'Styled-Components'],
    },
  },
];
