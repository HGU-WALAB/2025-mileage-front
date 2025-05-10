import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from '@/assets';
import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

export const NoticeCard = () => {
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
    <S.CardBox isMobile={isMobile}>
      <S.CardImg
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex + 1}`}
      />
    </S.CardBox>
  );
};

const S = {
  CardBox: styled(Flex.Row)<{ isMobile: boolean }>`
    border-radius: 24px;
    height: 300px;
    overflow: hidden;
    position: relative;
    width: ${({ isMobile }) => (isMobile ? '100%' : '500px')};
  `,
  CardImg: styled('img')`
    border-radius: 24px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  `,
};
