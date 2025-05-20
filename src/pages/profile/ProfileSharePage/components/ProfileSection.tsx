import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { ProfileContent } from '../../components/ProfileContent';
import { useGetShareProfileQuery } from '../../hooks/useGetShareProfileQuery';

export const ProfileSection = () => {
  const theme = useTheme();
  const { profile } = useGetShareProfileQuery();

  return (
    <S.Section
      width="100%"
      justify="space-around"
      align="center"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      margin="auto 0"
    >
      <ProfileContent profile={profile} />
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Row)`
    border-radius: 1rem;
    ${boxShadow}
    position: relative;
  `,
};
