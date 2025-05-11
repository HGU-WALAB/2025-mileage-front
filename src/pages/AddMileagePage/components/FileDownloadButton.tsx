import { Text } from '@/components';
import { styled } from '@mui/material';

import { useGetSubmittedFileQuery } from '../hooks/useGetSubmittedFileQuery';
import { SubmittedMileageResponse } from '../types/addMileage';

export const FileDownloadButton = ({
  item,
}: {
  item: SubmittedMileageResponse;
}) => {
  const { file } = useGetSubmittedFileQuery(item.uniqueFileName ?? '');

  const handleDownload = () => {
    if (file) {
      const url = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', item.file || 'downloaded_file');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  return <S.Text onClick={handleDownload}>{item.file}</S.Text>;
};

const S = {
  Text: styled(Text)`
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey300};
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ theme }) => theme.typography.body2};
  `,
};
