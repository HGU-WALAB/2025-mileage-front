import { ALL } from '../constants/awardTypeLabels';
import { useQueryParams } from '../hooks/useQueryParams';
import { AwardResponse, AwardType } from '../types/award';
import { useGetAwardsQuery } from './useGetAwardsQuery';

export const useGroupedAwardList = () => {
  const { awards } = useGetAwardsQuery();
  const { queryParams } = useQueryParams();

  let filteredAwards: AwardResponse[] = awards;

  if (queryParams.awardType && queryParams.awardType !== ALL) {
    filteredAwards = filteredAwards.filter(
      award => award.awardType === queryParams.awardType,
    );
  }

  if (queryParams.awardYear && queryParams.awardYear !== ALL) {
    filteredAwards = filteredAwards.filter(
      award => award.awardYear === queryParams.awardYear,
    );
  }

  if (queryParams.keyword) {
    filteredAwards = filteredAwards.filter(
      award =>
        award.awardName.includes(queryParams.keyword) ||
        award.contestName.includes(queryParams.keyword) ||
        award.organization.includes(queryParams.keyword),
    );
  }

  const groupByAwardType = (awards: AwardResponse[]) => {
    return Object.values(
      awards.reduce(
        (acc, award) => {
          if (!acc[award.awardType]) {
            acc[award.awardType] = {
              awardType: award.awardType,
              items: [],
            };
          }
          acc[award.awardType].items.push(award);

          return acc;
        },
        {} as Record<
          AwardType,
          { awardType: AwardType; items: AwardResponse[] }
        >,
      ),
    );
  };

  const groupedAwardList = groupByAwardType(filteredAwards || []);

  return { groupedAwardList };
};
