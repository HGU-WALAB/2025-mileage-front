import { BlogIcon, GithubIcon, InstagramIcon, LinkedInIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { styled, useTheme } from '@mui/material';

import { ProfileResponse } from '../types/profile';
import { useGetProfileImageQuery } from '../hooks/useGetProfileQuery';

export const ProfileContent = ({ profile } : { profile: ProfileResponse }) => {
  const theme = useTheme();
  const { profileImage } = useGetProfileImageQuery(profile?.profile_image_url);

  return (
    <>
      <Flex.Row align="center" gap="5rem">
        <S.ProfileImg
          src={profileImage ? profileImage : 'https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png?ssl=1'}
          alt="user profile image"
        />
        <Flex.Row
          style={{ color: theme.palette.primary.main }}
          wrap="wrap"
          gap=".25rem"
        >
          <Heading as="h1">{profile?.studentName} |</Heading>
          <Heading as="h1">{profile?.job}</Heading>
        </Flex.Row>
      </Flex.Row>

      <Flex.Row gap="1rem">
        <Flex.Column gap="1rem">
          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={profile?.github_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              noLink={!!profile?.github_link}
            >
              <GithubIcon />
              GitHub
            </S.Link>
          </S.LinkWrapper>

          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={profile?.blog_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlogIcon />
              Blog
            </S.Link>
          </S.LinkWrapper>
        </Flex.Column>

        <Flex.Column gap="1rem">
          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={profile?.linkedin_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </S.Link>
          </S.LinkWrapper>

          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={profile?.instagram_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              Instagram
            </S.Link>
          </S.LinkWrapper>
        </Flex.Column>
      </Flex.Row>
    </>
  );
};

const S = {
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
};
