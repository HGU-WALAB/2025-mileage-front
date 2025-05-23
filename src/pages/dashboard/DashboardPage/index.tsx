import { Flex } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useAuthStore } from '@/stores';

import { CapabilitySection } from './components/CapabilitySection';
import { NoAccessLogoutModal } from './components/NoAccessLogoutModal';
import { ScholarshipDurationSection } from './components/ScholarshipDurationSection';
import { ScholarshipStudentTypeSection } from './components/ScholarshipStudentTypeSection';

const DashboardPage = () => {
  useTrackPageView({ eventName: '[View] 대시보드 페이지' });

  const { user } = useAuthStore();

  return (
    <Flex.Column margin="1rem 1rem 2rem" gap="1rem">
      <Flex.Row justify="space-between" align="flex-end" wrap="wrap" gap="1rem">
        <ScholarshipDurationSection />
        <ScholarshipStudentTypeSection />
      </Flex.Row>

      <CapabilitySection />

      {user.studentType === '기타' && <NoAccessLogoutModal />}
    </Flex.Column>
  );
};

export default DashboardPage;
