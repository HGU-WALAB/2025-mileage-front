import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from '@/assets';
import { styled } from '@mui/material';
import { useEffect, useState } from 'react';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

const NoticeCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Container>
      <S.CardImg
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex + 1}`}
      />
    </S.Container>
  );
};
export default NoticeCard;

const S = {
  Container: styled('div')`
    position: relative;
    width: 100%;
  `,
  CardImg: styled('img')`
    background-color: ${({ theme }) => theme.palette.black};
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: flex-start;
    max-width: 600px;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    width: 100%;
  `,
  Text: styled('div')`
    bottom: 10%;
    color: ${({ theme }) => theme.palette.white};
    font-size: 2rem;
    font-weight: bold;
    left: 10%;
    position: absolute;
  `,
};
