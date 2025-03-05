import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from '@/assets';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

const NoticeCard = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
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
    <S.CardImg
      src={images[currentIndex]}
      alt={`Carousel ${currentIndex + 1}`}
      isMobile={isMobile}
    />
  );
};
export default NoticeCard;

const S = {
  CardImg: styled('img')<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.black};
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: flex-start;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    width: ${({ isMobile }) => (isMobile ? '100%' : '600px')};
  `,
};
