import { EmptyBoxImg } from '@/assets';
import { Button, Flex, Heading, Main } from '@/components';
import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { ROUTE_PATH } from '@/constants/routePath';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  useTrackPageView({ eventName: '[View] 에러 페이지' });

  const theme = useTheme();
  return (
    <Main open={false}>
      <Flex.Column
        width="100%"
        height="400px"
        gap="1rem"
        justify="center"
        align="center"
      >
        <EmptyBoxImg />
        <Heading
          as="h2"
          style={{ fontSize: '1.5rem', color: theme.palette.grey300 }}
        >
          {ERROR_MESSAGES.default}
        </Heading>
        <Button
          label="로그인 페이지로 이동하기"
          size="large"
          onClick={() => navigate(ROUTE_PATH.login)}
        />
      </Flex.Column>
    </Main>
  );
};

export default ErrorPage;
