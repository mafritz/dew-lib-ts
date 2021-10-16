import { Feeling } from "./feeling.interface";
import { Appraisal } from "./appraisal.interface";
export interface AffectiveSpace {
    algorithmType: string;
    appraisals?: Array<Appraisal>;
    feelings: Array<Feeling>;
}
