import { Flex } from '@/components';
import { Skeleton, styled } from '@mui/material';

export const ProjectArchiveCardSkeleton = () => {
  return (
    <S.Card>
      <S.Header>
        <Skeleton variant="text" width="60%" height={28} />
        <Skeleton variant="rounded" width={60} height={24} style={{ borderRadius: '16px' }} />
      </S.Header>

      <S.RepositorySection>
        <Skeleton variant="circular" width={16} height={16} />
        <Skeleton variant="text" width="50%" height={16} />
      </S.RepositorySection>

      <S.DateSection>
        <Skeleton variant="circular" width={16} height={16} />
        <Skeleton variant="text" width="60%" height={16} />
      </S.DateSection>

      <S.TechStackSection>
        {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton
          key={i}
          variant="rounded"
          width={50}
          height={20}
          style={{ borderRadius: '10px' }}
        />
        ))}
      </S.TechStackSection>

      <S.ActionSection>
        <Skeleton variant="rounded" width="70%" height={36} style={{ borderRadius: '8px' }} />
        <Skeleton variant="rounded" width={36} height={36} style={{ borderRadius: '8px' }} />
      </S.ActionSection>
    </S.Card>
  );
};

const S = {
  Card: styled(Flex.Column)`
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    gap: 0.75rem;
    width: 100%;
    height: 280px;

    @media (max-width: 900px) {
      height: 260px;
      padding: 1rem;
      gap: 0.5rem;
    }
  `,

  Header: styled(Flex.Row)`
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  `,

  OwnerSection: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
  `,

  RepositorySection: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
  `,

  DateSection: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
  `,

  ActivitySection: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
  `,

  TechStackSection: styled(Flex.Row)`
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
  `,

  ActionSection: styled(Flex.Row)`
    gap: 0.75rem;
    margin-top: auto;
  `,
};
