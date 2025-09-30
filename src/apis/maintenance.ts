import { MaintenanceStatus } from '@/types/maintenance';
import { http } from './http';

const getMaintenanceStatus = async (email?: string): Promise<MaintenanceStatus> => {
  const params = email ? { email } : {};
  const response = await http.get<MaintenanceStatus>('/api/maintenance/status', { params });
  return response;
};

export default getMaintenanceStatus;
