import apiClient from './client';
import type { Project, CreateProjectDto } from '@/lib/types/project.types';

export const projectsAPI = {
  getAll: () => 
    apiClient.get<Project[]>('/api/v1/projects'),
  
  getById: (id: number) => 
    apiClient.get<Project>(`/api/v1/projects/${id}`),
  
  create: (data: CreateProjectDto) => 
    apiClient.post<Project>('/api/v1/projects', data),
  
  update: (id: number, data: Partial<CreateProjectDto>) => 
    apiClient.put<Project>(`/api/v1/projects/${id}`, data),
  
  delete: (id: number) => 
    apiClient.delete(`/api/v1/projects/${id}`),
};
