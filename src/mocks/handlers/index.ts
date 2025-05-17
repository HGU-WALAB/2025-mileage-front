import { AuthHandlers } from '@/mocks/handlers/auth';
import { AwardHandlers } from '@/mocks/handlers/award';
import { CapabilityHandlers } from '@/mocks/handlers/capability';
import { CommonHandlers } from '@/mocks/handlers/common';
import { MileageHandlers } from '@/mocks/handlers/mileage';
import { ProjectHandlers } from '@/mocks/handlers/project';
import { ProfileHandlers } from '@/mocks/handlers/profile';
import { ScholarshipHandlers } from '@/mocks/handlers/scholarship';

export const handlers = [
  ...MileageHandlers,
  ...ScholarshipHandlers,
  ...AuthHandlers,
  ...CapabilityHandlers,
  ...AwardHandlers,
  ...ProjectHandlers,
  ...ProfileHandlers,
  ...CommonHandlers,
];
