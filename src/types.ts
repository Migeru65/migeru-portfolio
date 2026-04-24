export interface ProjectData {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  readmeHighlight: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
}
