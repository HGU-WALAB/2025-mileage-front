import { Flex } from '@/components';
import {
  ChartSection,
  FAQSection,
  NoAccessLogoutModal,
  ProcessSection,
  ScholarshipDurationSection,
  ScholarshipStudentTypeSection,
} from '@/components/Dashboard';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useAuthStore } from '@/stores';

const DashboardPage = () => {
  useTrackPageView({ eventName: '[View] 대시보드 페이지' });

  const { student } = useAuthStore();

  return (
    <Flex.Column margin="1rem 1rem 2rem" gap="1rem">
      <Flex.Row justify="space-between" align="flex-end" wrap="wrap" gap="1rem">
        <ScholarshipDurationSection />
        <ScholarshipStudentTypeSection />
      </Flex.Row>

      <ChartSection />

      <ProcessSection />

      <FAQSection />

      {student.studentType === '기타' && <NoAccessLogoutModal />}
    </Flex.Column>
  );
};

export default DashboardPage;
