import { Flex } from '@/components';
import { Skeleton, useTheme } from '@mui/material';

export const ProfileSkeleton = () => {
  const theme = useTheme();

  return (
    <Flex.Column
      width="100%"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      margin="auto 0"
      style={{ borderRadius: '1rem' }}
    >
      <Flex.Row gap="1rem" align="center" padding="1rem" wrap="wrap">
        <Skeleton variant="circular" width={120} height={120} />
        <Flex.Column gap="0.5rem" style={{ flex: 1 }}>
          <Skeleton variant="text" width={160} height={28} />
          <Skeleton variant="text" width={220} height={20} />
          <Skeleton variant="rectangular" width={240} height={40} />
        </Flex.Column>
      </Flex.Row>
    </Flex.Column>
  );
};
