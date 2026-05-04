export interface SkillSection {
  id: number;
  title: string;
  description: string;
  items: string[];
  created_at: string;
  updated_at: string;
}

export interface CreateSkillSectionDto {
  title: string;
  description: string;
  items: string[];
}
