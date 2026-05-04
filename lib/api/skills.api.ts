import apiClient from './client';
import type { SkillSection, CreateSkillSectionDto } from '@/lib/types/skill.types';

export const skillsAPI = {
  getAll: () => 
    apiClient.get<SkillSection[]>('/api/v1/skills'),
  
  getById: (id: number) => 
    apiClient.get<SkillSection>(`/api/v1/skills/${id}`),
  
  create: (data: CreateSkillSectionDto) => 
    apiClient.post<SkillSection>('/api/v1/skills', data),
  
  update: (id: number, data: Partial<CreateSkillSectionDto>) => 
    apiClient.put<SkillSection>(`/api/v1/skills/${id}`, data),
  
  delete: (id: number) => 
    apiClient.delete(`/api/v1/skills/${id}`),
};
