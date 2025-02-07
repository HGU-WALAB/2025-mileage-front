import { useThemeStore } from '@/stores';
import { Box, Button } from '@mui/material';

const Components = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
        minHeight: '100vh',
      }}
    >
      <div style={{ padding: '16px' }}>
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          테마 변경
        </Button>
      </div>
    </Box>
  );
};

export default Components;
