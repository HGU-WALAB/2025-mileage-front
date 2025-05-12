import { CloudUploadIcon } from '@/assets';
import { styled } from '@mui/material';
import React from 'react';

interface Props {
  label: string;
  onUpload: (file: File) => void;
}

const UploadButton = ({ label, onUpload }: Props) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onUpload(files[0]);
    }
  };

  return (
    <S.UploadButton>
      <CloudUploadIcon />
      {label}
      <S.HiddenInput type="file" onChange={handleUpload} multiple />
    </S.UploadButton>
  );
};

export default UploadButton;

const S = {
  UploadButton: styled('label')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.white};
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    gap: 1.5rem;
    height: 50px;
    justify-content: center;
    padding: 0.5rem 1rem;
    width: 200px;
    ${({ theme }) => theme.typography.body1}

    &:hover, &:active {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
  HiddenInput: styled('input')`
    bottom: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1rem;
    left: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1rem;
  `,
};
