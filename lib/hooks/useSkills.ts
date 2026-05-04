'use client';

import { useState, useEffect } from 'react';
import { skillsAPI } from '@/lib/api/skills.api';
import type { SkillSection, CreateSkillSectionDto } from '@/lib/types/skill.types';
import { message } from 'antd';

export function useSkills() {
  const [skills, setSkills] = useState<SkillSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const response = await skillsAPI.getAll();
      setSkills(response.data);
      setError(null);
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to fetch skills';
      setError(errMsg);
      message.error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const createSkill = async (data: CreateSkillSectionDto) => {
    try {
      const response = await skillsAPI.create(data);
      setSkills((prev) => [...prev, response.data]);
      message.success('Skill section created successfully');
      return { success: true, data: response.data };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to create skill section';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const updateSkill = async (id: number, data: Partial<CreateSkillSectionDto>) => {
    try {
      const response = await skillsAPI.update(id, data);
      setSkills((prev) => prev.map((s) => (s.id === id ? response.data : s)));
      message.success('Skill section updated successfully');
      return { success: true, data: response.data };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to update skill section';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const deleteSkill = async (id: number) => {
    try {
      await skillsAPI.delete(id);
      setSkills((prev) => prev.filter((s) => s.id !== id));
      message.success('Skill section deleted successfully');
      return { success: true };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to delete skill section';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  return {
    skills,
    isLoading,
    error,
    refresh: fetchSkills,
    createSkill,
    updateSkill,
    deleteSkill,
  };
}
