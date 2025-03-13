import { AmplitudeService } from '@/service/amplitude/AmplitudeService';

const amplitudeService = new AmplitudeService();

// Mileage Add
export const trackAddNewMileageModalButton = () => {
  amplitudeService.customTrack('[Click] 마일리지 추가 등록 모달 오픈 버튼');
};

export const trackAddNewMileageButton = () => {
  amplitudeService.customTrack('[Click] 마일리지 추가 등록 저장 버튼');
};
