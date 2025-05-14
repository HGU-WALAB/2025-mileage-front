<<<<<<< HEAD
import { BlogIcon, GithubIcon, InstagramIcon, LinkedInIcon } from '@/assets';
=======
import { BlogIcon, InstagramIcon, GithubIcon, LinkedInIcon } from '@/assets';
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
import { Flex, Heading } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { useGetUserInfoQuery } from '@auth/hooks/useGetUserInfoQuery';

export const ProfileSection = () => {
  const theme = useTheme();
  const { userInfo } = useGetUserInfoQuery();

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
      <Flex.Row align="center" gap="5rem">
        <S.ProfileImg src={userInfo?.imgUrl ? userInfo.imgUrl : "https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png?ssl=1"} alt="user profile image" />
        <Flex.Column style={{ color: theme.palette.primary.main }}>
          <Heading as="h1">
            {userInfo?.studentName} | {userInfo?.job}
          </Heading>
        </Flex.Column>
      </Flex.Row>

<<<<<<< HEAD
      <Flex.Row gap=".5rem">
        <Flex.Column style={{ color: theme.palette.primary.main }}>
=======
      <Flex.Column style={{ color: theme.palette.primary.main }}>
        <S.LinksContainer>
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={userInfo?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              GitHub
            </S.Link>
          </S.LinkWrapper>
<<<<<<< HEAD

=======
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={userInfo?.blogLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlogIcon />
              Blog
            </S.Link>
          </S.LinkWrapper>
<<<<<<< HEAD
        </Flex.Column>

        <Flex.Column>
=======
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={userInfo?.linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </S.Link>
          </S.LinkWrapper>
          <S.LinkWrapper padding=".5rem 1rem">
            <S.Link
              href={userInfo?.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              Instagram
            </S.Link>
          </S.LinkWrapper>
<<<<<<< HEAD
        </Flex.Column>
      </Flex.Row>
=======
        </S.LinksContainer>
      </Flex.Column>
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)

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
  LinksContainer: styled(Flex.Column)`
    height: 8rem;
    gap: 0.25rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  `,
  LinkWrapper: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid ${({ theme }) => theme.palette.primary.dark};
    border-radius: 0.4rem;
  `,
  Link: styled('a')`
    color: ${({ theme }) => theme.palette.primary.dark};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-weight: 500;
    gap: 0.5rem;
    justify-content: space-between;
    text-decoration: underline;

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
