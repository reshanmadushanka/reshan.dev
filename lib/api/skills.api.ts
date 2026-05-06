import apiClient from './client';
import type { Skill, CreateSkillDto } from '@/lib/types/skill.types';
import type { Category } from '@/lib/types/category.types';

export const skillsAPI = {
  getAll: () =>
    apiClient.get<Skill[]>('/api/v1/skills'),

  getById: (id: number) =>
    apiClient.get<Skill>(`/api/v1/skills/${id}`),

  create: (data: CreateSkillDto) =>
    apiClient.post<Skill>('/api/v1/skills', data),

  update: (id: number, data: Partial<CreateSkillDto>) =>
    apiClient.put<Skill>(`/api/v1/skills/${id}`, data),

  delete: (id: number) =>
    apiClient.delete(`/api/v1/skills/${id}`),

  getCategories: () =>
    apiClient.get<Category[]>('/api/v1/skills/categories'),
};
