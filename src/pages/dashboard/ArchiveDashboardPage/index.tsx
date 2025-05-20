import { Flex } from '@/components';

import { AwardArchiveSection } from './components/AwardArchiveSection';
import { ProjectArchiveSection } from './components/ProjectArchiveSection';

const ArchiveDashboardPage = () => {
  return (
    <Flex.Column margin="1rem" gap="3rem">
      <AwardArchiveSection />

      <ProjectArchiveSection />
    </Flex.Column>
  );
};

export default ArchiveDashboardPage;
