import { Feeling } from "./feeling.interface";

export interface AffectiveSpace {
  name: string;
  description: string;
  lang: string;
  algorithmType: string;
  dimX: string;
  dimY: string;
  isGrid: boolean;
  isPublic: boolean;
  feelings: Array<Feeling>;
  citation: string;
  user: string;
  id: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: number;
}
