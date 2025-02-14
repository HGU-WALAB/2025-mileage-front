import { MoneyImg } from '@/assets';
import { Heading } from '@/components';
import { styled, useTheme } from '@mui/material';

const NoticeCard = () => {
  const theme = useTheme();
  return (
    <S.Card>
      <Heading as="h1" color={theme.palette.white} margin="1rem">
        2025-1 마일리지 장학금 신청
      </Heading>
      <Heading as="h2" color={theme.palette.white} margin="0 1rem">
        기간 : 2025년 3월 20일 ~ 3월 31일
      </Heading>
      <S.ImgBox>
        <MoneyImg />
      </S.ImgBox>
    </S.Card>
  );
};
export default NoticeCard;

const S = {
  Card: styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    padding: 2rem;
    position: relative;
    width: 70%;
  `,
  ImgBox: styled('div')`
    bottom: 0;
    position: absolute;
    right: 1rem;
  `,
};
