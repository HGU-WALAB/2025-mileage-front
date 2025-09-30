import { MaintenanceStatus } from '@/types/maintenance';
import { Typography, CircularProgress, useTheme } from '@mui/material';
import { Flex } from '@/components';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { keyframes } from '@emotion/react';
import { BackgroundImg } from '@/assets';

interface MaintenancePageProps {
  status: MaintenanceStatus;
}

// 애니메이션 정의
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const MaintenancePage = ({ status }: MaintenancePageProps) => {
  const theme = useTheme();

  // 서버에서 받은 데이터 로그 출력
  console.log('점검 페이지 표시 데이터:', {
    maintenanceMode: status.maintenanceMode,
    message: status.message,
    estimatedTime: status.estimatedTime,
    isAllowedUser: status.isAllowedUser,
  });

  return (
    <Flex.Column
      justify="center"
      align="center"
      width="100vw"
      height="100vh"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backdropFilter: 'blur(1.875rem)',
        backgroundColor: getOpacityColor(theme.palette.white, 0.1),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 장식 요소들 */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${getOpacityColor(theme.palette.white, 0.2)}, ${getOpacityColor(theme.palette.primary.light, 0.3)})`,
          animation: `${float} 3s ease-in-out infinite`,
          backdropFilter: 'blur(10px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${getOpacityColor(theme.palette.secondary.light, 0.2)}, ${getOpacityColor(theme.palette.white, 0.3)})`,
          animation: `${float} 2.5s ease-in-out infinite reverse`,
          backdropFilter: 'blur(10px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${getOpacityColor(theme.palette.primary.main, 0.2)}, ${getOpacityColor(theme.palette.secondary.main, 0.3)})`,
          animation: `${float} 4s ease-in-out infinite`,
          backdropFilter: 'blur(10px)',
        }}
      />

      {/* 메인 컨텐츠 카드 */}
      <Flex.Column
        align="center"
        justify="center"
        gap="2rem"
        padding="3rem 2rem"
        style={{
          backgroundColor: getOpacityColor(theme.palette.white, 0.95),
          borderRadius: '24px',
          boxShadow: `0 20px 40px ${getOpacityColor(theme.palette.black, 0.1)}`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${getOpacityColor(theme.palette.white, 0.2)}`,
          maxWidth: '500px',
          width: '90%',
          animation: `${pulse} 2s ease-in-out infinite`,
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* 로딩 스피너 */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            size={80}
            thickness={4}
            sx={{
              color: theme.palette.primary.main,
              animation: `${rotate} 2s linear infinite`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
              animation: `${pulse} 1.5s ease-in-out infinite`,
            }}
          />
        </div>

        {/* 메인 타이틀 */}
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}
        >
          🔧 시스템 점검 중
        </Typography>

        {/* 점검 메시지 - 서버에서 받은 메시지 우선 표시 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '400px',
            marginBottom: '1rem',
          }}
        >
          <Typography
            variant="body1"
            style={{
              color: theme.palette.text.primary,
              textAlign: 'center',
              lineHeight: 1.6,
              fontWeight: 500,
              whiteSpace: 'pre-line', // \n을 줄바꿈으로 처리
              width: '100%',
            }}
          >
            {status.message || '🔨 시스템 점검 중입니다.\n잠시만 기다려주세요.'}
          </Typography>
        </div>

        {/* 예상 완료 시간 - 서버에서 받은 시간 우선 표시 */}
        <Flex.Row
          align="center"
          gap="0.5rem"
          style={{
            backgroundColor: getOpacityColor(theme.palette.primary.light, 0.1),
            padding: '0.75rem 1.5rem',
            borderRadius: '20px',
            border: `1px solid ${getOpacityColor(theme.palette.primary.main, 0.2)}`,
          }}
        >
          <Typography
            variant="body2"
            style={{
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            ⏰ 예상 완료 시간: {status.estimatedTime || '30분 후'}
          </Typography>
        </Flex.Row>

        {/* 안내 메시지 */}
        <Typography
          variant="body2"
          style={{
            color: theme.palette.text.secondary,
            textAlign: 'center',
            lineHeight: 1.5,
            maxWidth: '350px',
          }}
        >
          문의: 22100548@handong.ac.kr 이유현
        </Typography>

        {/* 프로그레스 바 */}
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: getOpacityColor(theme.palette.grey300, 0.3),
            borderRadius: '2px',
            overflow: 'hidden',
            marginTop: '1rem',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: '2px',
              animation: `${pulse} 2s ease-in-out infinite`,
            }}
          />
        </div>
      </Flex.Column>

      {/* 하단 장식 */}
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${getOpacityColor(theme.palette.white, 0.1)}, transparent)`,
          animation: `${float} 6s ease-in-out infinite`,
          backdropFilter: 'blur(10px)',
        }}
      />
    </Flex.Column>
  );
};

export default MaintenancePage;
