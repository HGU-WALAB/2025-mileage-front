import { AuthHandlers } from '@/mocks/handlers/auth';
import { AwardHandlers } from '@/mocks/handlers/award';
import { CapabilityHandlers } from '@/mocks/handlers/capability';
import { CommonHandlers } from '@/mocks/handlers/common';
import { MileageHandlers } from '@/mocks/handlers/mileage';
import { ProfileHandlers } from '@/mocks/handlers/profile';
import { ProjectHandlers } from '@/mocks/handlers/project';
import { ScholarshipHandlers } from '@/mocks/handlers/scholarship';
import { ShareHandlers } from '@/mocks/handlers/share';

export const handlers = [
  ...MileageHandlers,
  ...ScholarshipHandlers,
  ...AuthHandlers,
  ...CapabilityHandlers,
  ...AwardHandlers,
  ...ProjectHandlers,
  ...ProfileHandlers,
  ...ShareHandlers,
  ...CommonHandlers,
];
