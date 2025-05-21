import { Flex } from '@/components'; // Flex.Row, Flex.Column 등
import { styled } from '@mui/material';

export const Footer = () => {
  return (
    <S.Container>
      <Flex.Row justify="space-between" align="center" wrap="wrap" gap="1rem">
        <Flex.Column gap="0.5rem">
          <S.ServiceName>마일스톤 시스템</S.ServiceName>
          <S.Description>
            한동대학교 SW전공생을 위한 역량 모니터링 서비스
          </S.Description>
          <S.Copyright>
            © {new Date().getFullYear()} WALAB. All rights reserved.
          </S.Copyright>
        </Flex.Column>

        <Flex.Column align="flex-end" gap="0.3rem">
          <S.Link
            href="https://github.com/HGU-WALAB/2025-mileage-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </S.Link>
          <S.Link href="mailto:HyelimChoi01@gmail.com">문의하기</S.Link>
        </Flex.Column>
      </Flex.Row>
    </S.Container>
  );
};

const S = {
  Container: styled('footer')`
    border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
    margin-top: 2rem;
    padding: 2rem 1.5rem;
    width: 100%;
  `,
  ServiceName: styled('strong')`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.1rem;
    font-weight: 600;
  `,
  Description: styled('p')`
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 0.9rem;
    margin: 0;
  `,
  Copyright: styled('p')`
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 0.75rem;
    margin: 0;
  `,
  Link: styled('a')`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0.85rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,
};
