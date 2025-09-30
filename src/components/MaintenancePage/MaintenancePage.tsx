import { MaintenanceStatus } from '@/types/maintenance';
import { Box, Typography, CircularProgress } from '@mui/material';

interface MaintenancePageProps {
  status: MaintenanceStatus;
}

const MaintenancePage = ({ status }: MaintenancePageProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <CircularProgress size={60} sx={{ marginBottom: '2rem' }} />
      
      <Typography variant="h4" component="h1" gutterBottom>
        시스템 점검 중
      </Typography>
      
      {status.message && (
        <Typography variant="body1" sx={{ marginBottom: '1rem', maxWidth: '600px' }}>
          {status.message}
        </Typography>
      )}
      
      {status.estimatedTime && (
        <Typography variant="body2" color="text.secondary">
          예상 완료 시간: {status.estimatedTime}
        </Typography>
      )}
      
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: '2rem' }}>
        잠시만 기다려주세요. 점검이 완료되면 자동으로 페이지가 새로고침됩니다.
      </Typography>
    </Box>
  );
};

export default MaintenancePage;
