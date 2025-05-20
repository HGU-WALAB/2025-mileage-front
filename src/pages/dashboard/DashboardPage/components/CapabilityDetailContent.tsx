import { Flex, ToggleButton } from '@/components';
import { styled } from '@mui/material';
import { useMemo, useState } from 'react';

import { useGetCapabilityDetailQuery } from '../../hooks/useGetCapabilityDetailQuery';
import { useGetCapabilityQuery } from '../../hooks/useGetCapabilityQuery';
import { CapabilityDetailTable } from './CapabilityDetailTable';

export const CapabilityDetailContent = () => {
  const { capability } = useGetCapabilityQuery();
  const { capabilityDetail } = useGetCapabilityDetailQuery();
  const [selectedCapability, setSelectedCapability] = useState<string>(
    capability[0].capabilityName,
  );

  const selectedCapabilityDetail = useMemo(
    () =>
      capabilityDetail.filter(
        detail => detail.capabilityName === selectedCapability,
      ),
    [selectedCapability, capabilityDetail],
  );

  return (
    <Flex.Column justify="flex-start" gap=".5rem" height="100%">
      <S.CategoryOptions gap=".5rem">
        {capability.map(capa => (
          <ToggleButton
            size="small"
            label={capa.capabilityName}
            selected={capa.capabilityName === selectedCapability}
            onClick={() => setSelectedCapability(capa.capabilityName)}
          />
        ))}
      </S.CategoryOptions>

      <Flex.Row
        height="85%"
        style={{ overflow: 'hidden', overflowX: 'scroll' }}
      >
        <CapabilityDetailTable capabilityList={selectedCapabilityDetail} />
      </Flex.Row>
    </Flex.Column>
  );
};

const S = {
  CategoryOptions: styled(Flex.Row)`
    height: fit-content;
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
  `,
};
