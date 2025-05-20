import {
  BlogIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  UserImg,
} from '@/assets';
import { Flex, Heading } from '@/components';
import { styled, useTheme } from '@mui/material';

import { useGetProfileImageQuery } from '../hooks/useGetProfileQuery';
import { ProfileResponse } from '../types/profile';

export const ProfileContent = ({ profile }: { profile: ProfileResponse }) => {
  const theme = useTheme();
  const { profileImage } = useGetProfileImageQuery(profile?.profile_image_url);

  return (
    <>
      <Flex.Row align="center" gap="5rem">
        <S.ProfileImg
          src={profileImage ? profileImage : UserImg}
          alt="user profile image"
        />
        <Flex.Row
          style={{ color: theme.palette.primary.main }}
          wrap="wrap"
          gap=".25rem"
        >
          <Heading as="h1">{profile?.studentName} |</Heading>
          <Heading as="h1">
            {profile.job ? profile?.job : '희망 직군을 추가해주세요'}
          </Heading>
        </Flex.Row>
      </Flex.Row>

      <Flex.Row gap="1rem">
        <Flex.Column gap="1rem">
          <S.LinkWrapper padding=".5rem 1rem" disable={!profile?.github_link}>
            <S.Link
              as={profile?.github_link ? 'a' : 'span'}
              href={profile?.github_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              noLink={!profile?.github_link}
            >
              <GithubIcon />
              GitHub
            </S.Link>
          </S.LinkWrapper>

          <S.LinkWrapper padding=".5rem 1rem" disable={!profile?.blog_link}>
            <S.Link
              as={profile?.blog_link ? 'a' : 'span'}
              href={profile?.blog_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              noLink={!profile?.blog_link}
            >
              <BlogIcon />
              Blog
            </S.Link>
          </S.LinkWrapper>
        </Flex.Column>

        <Flex.Column gap="1rem">
          <S.LinkWrapper padding=".5rem 1rem" disable={!profile?.linkedin_link}>
            <S.Link
              as={profile?.linkedin_link ? 'a' : 'span'}
              href={profile?.linkedin_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              noLink={!profile?.linkedin_link}
            >
              <LinkedInIcon />
              LinkedIn
            </S.Link>
          </S.LinkWrapper>

          <S.LinkWrapper
            padding=".5rem 1rem"
            disable={!profile?.instagram_link}
          >
            <S.Link
              as={profile?.instagram_link ? 'a' : 'span'}
              href={profile?.instagram_link ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              noLink={!profile?.instagram_link}
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
  LinkWrapper: styled(Flex.Column)<{ disable: boolean }>`
    background-color: ${({ theme, disable }) =>
      disable ? theme.palette.grey[200] : theme.palette.primary.light};
    border: 1px solid
      ${({ theme, disable }) =>
        disable ? theme.palette.grey[400] : theme.palette.primary.main};
    border-radius: 0.4rem;
    color: ${({ theme, disable }) =>
      disable ? theme.palette.grey[400] : theme.palette.primary.main};

    &:hover {
      color: ${({ theme, disable }) => !disable && theme.palette.primary.dark};
    }
  `,
  Link: styled('a')<{ noLink?: boolean }>`
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
  `,
};
