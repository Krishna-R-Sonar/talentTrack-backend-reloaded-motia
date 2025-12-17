// src/types/autoapply.ts
export interface ProcessedJob {
  jobId: string;
  title: string;
  companyName: string;
  jobNiche: string;
  location: string;
  salary?: string;
  applicationsSubmitted: number;
  highestScore: number;
  processed: boolean;
  lastUpdated: number;
}

export interface MockUser {
  id: string;
  name: string;
  email: string;
  niches: string[];
  experience: string;
  skills: string;
}