import { CircularProgress } from '@mui/material';

export const Spinner = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '8px',
          padding: '1rem',
        }}
      >
        <CircularProgress size={32} />
      </div>
    </div>
  );
};
