export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProjectDto {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}
