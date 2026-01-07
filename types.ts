
export enum HeritageType {
  DUNHUANG = '敦煌 (Dunhuang)',
  SANXINGDUI = '三星堆 (Sanxingdui)',
  FORBIDDEN_CITY = '故宫 (Forbidden City)',
  TERRACOTTA = '兵马俑 (Terracotta)'
}

export type UserRole = 'INTERNAL' | 'COMMERCIAL';

export interface Artifact {
  id: string;
  name: string;
  type: HeritageType;
  imageUrl: string;
  description: string;
}

export interface IndustryNode {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
  icon: string;
}

export interface CreativeWork {
  id: string;
  title: string;
  originalStyle: HeritageType;
  generatedImageUrl: string;
  description: string;
  createdAt: string;
  roadmap: IndustryNode[];
}
