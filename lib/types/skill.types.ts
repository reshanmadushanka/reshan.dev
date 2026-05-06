export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
  order_index: number;
  created_at?: string;
  updated_at?: string;
}

export interface CreateSkillDto {
  name: string;
  category: string;
  level: number;
  order_index: number;
}
