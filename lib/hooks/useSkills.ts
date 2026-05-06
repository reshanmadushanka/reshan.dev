'use client';

import { useState, useEffect } from 'react';
import { skillsAPI } from '@/lib/api/skills.api';
import type { Skill, CreateSkillDto } from '@/lib/types/skill.types';
import { message } from 'antd';

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
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
      // Only show message if it's a real error (not just empty list)
      if (err.response?.status !== 404) {
        message.error(errMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const createSkill = async (data: CreateSkillDto) => {
    try {
      const response = await skillsAPI.create(data);
      setSkills((prev) => [...prev, response.data]);
      message.success('Skill created successfully');
      return { success: true, data: response.data };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to create skill';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const updateSkill = async (id: number, data: Partial<CreateSkillDto>) => {
    try {
      const response = await skillsAPI.update(id, data);
      setSkills((prev) => prev.map((s) => (s.id === id ? response.data : s)));
      message.success('Skill updated successfully');
      return { success: true, data: response.data };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to update skill';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const deleteSkill = async (id: number) => {
    try {
      await skillsAPI.delete(id);
      setSkills((prev) => prev.filter((s) => s.id !== id));
      message.success('Skill deleted successfully');
      return { success: true };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to delete skill';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const getMainSkillCategories = () => {

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
