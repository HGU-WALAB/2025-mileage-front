import { AuthHandlers } from '@/mocks/handlers/auth';
import { CommonHandlers } from '@/mocks/handlers/common';
import { MileageHandlers } from '@/mocks/handlers/mileage';
import { ScholarshipHandlers } from '@/mocks/handlers/scholarship';

export const handlers = [
  ...MileageHandlers,
  ...ScholarshipHandlers,
  ...AuthHandlers,
  ...CommonHandlers,
];
