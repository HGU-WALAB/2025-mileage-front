import { styled } from '@mui/material';

const NoticeCard = () => {
  return <S.Card>?</S.Card>;
};
export default NoticeCard;

const S = {
  Card: styled('div')`
    background-color: ${({ theme }) => theme.palette.black};
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: flex-start;
    padding: 2rem;
    position: relative;
    width: 600px;
  `,
  ImgBox: styled('div')`
    bottom: 0;
    position: absolute;
    right: 1rem;
  `,
};
