import { AmplitudeService } from '@/service/amplitude/AmplitudeService';

const amplitudeService = new AmplitudeService();

// Mileage Add
export const trackAddNewMileageModalButton = () => {
  amplitudeService.customTrack('[Click] 마일리지 추가 등록 모달 오픈 버튼');
};

export const trackAddNewMileageButton = () => {
  amplitudeService.customTrack('[Click] 마일리지 추가 등록 저장 버튼');
};

// Submitted Mileage
export const trackSubmittedMileageModalButton = () => {
  amplitudeService.customTrack('[Click] 등록된 마일리지 상세보기 모달 버튼');
};

export const trackSubmittedMileageModalEditButton = () => {
  amplitudeService.customTrack('[Click] 등록된 마일리지 수정 버튼');
};

export const trackSubmittedMileageModalDeleteButton = () => {
  amplitudeService.customTrack('[Click] 등록된 마일리지 삭제 버튼');
};

// scholarship apply
export const trackScholarshipApplyButton = () => {
  amplitudeService.customTrack('[Click] 마일리지 장학금 신청 버튼');
};
