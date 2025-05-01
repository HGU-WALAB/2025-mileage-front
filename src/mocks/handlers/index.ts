import { AuthHandlers } from '@/mocks/handlers/auth';
import { AwardHandlers } from '@/mocks/handlers/award';
import { CapabilityHandlers } from '@/mocks/handlers/capability';
import { CommonHandlers } from '@/mocks/handlers/common';
import { MileageHandlers } from '@/mocks/handlers/mileage';
import { ScholarshipHandlers } from '@/mocks/handlers/scholarship';

export const handlers = [
  ...MileageHandlers,
  ...ScholarshipHandlers,
  ...AuthHandlers,
  ...CapabilityHandlers,
  ...AwardHandlers,
  ...CommonHandlers,
];
