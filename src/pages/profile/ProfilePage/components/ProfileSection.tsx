import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { ProfileContent } from '../../components/ProfileContent';
import { useGetProfileQuery } from '../../hooks/useGetProfileQuery';

export const ProfileSection = () => {
  const theme = useTheme();
  const { profile } = useGetProfileQuery();

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

      <S.EditButton onClick={() => {}}>편집하기</S.EditButton>
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Row)`
    border-radius: 1rem;
    ${boxShadow}
    position: relative;
  `,
  ProfileImg: styled('img')`
    border-radius: 100%;
    height: 120px;
    object-fit: cover;
    width: 120px;
  `,
  LinkWrapper: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid ${({ theme }) => theme.palette.primary.dark};
    border-radius: 0.4rem;
  `,
  Link: styled('a')<{ noLink?: boolean }>`
    color: ${({ theme }) => theme.palette.primary.dark};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    gap: 0.5rem;
    justify-content: space-between;
    ${({ noLink }) =>
      !noLink &&
      `
       text-decoration: underline;
    `}

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  `,
  EditButton: styled('button')`
    border: none;
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 0.5rem;
    text-decoration: underline;
    top: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
};
