'use client';

import { useState, useEffect } from 'react';
import { projectsAPI } from '@/lib/api/projects.api';
import type { Project, CreateProjectDto } from '@/lib/types/project.types';
import { message } from 'antd';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await projectsAPI.getAll();
      setProjects(response.data);
      setError(null);
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to fetch projects';
      setError(errMsg);
      message.error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const createProject = async (data: CreateProjectDto) => {
    try {
      const response = await projectsAPI.create(data);
      setProjects((prev) => [...prev, response.data]);
      message.success('Project created successfully');
      return { success: true, data: response.data };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to create project';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const updateProject = async (id: number, data: Partial<CreateProjectDto>) => {
    try {
      const response = await projectsAPI.update(id, data);
      setProjects((prev) => prev.map((p) => (p.id === id ? response.data : p)));
      message.success('Project updated successfully');
      return { success: true, data: response.data };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to update project';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  const deleteProject = async (id: number) => {
    try {
      await projectsAPI.delete(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      message.success('Project deleted successfully');
      return { success: true };
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to delete project';
      message.error(errMsg);
      return { success: false, error: errMsg };
    }
  };

  return {
    projects,
    isLoading,
    error,
    refresh: fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
}
