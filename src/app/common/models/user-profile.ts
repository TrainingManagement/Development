import { SecurityQuestions } from "./security";

export class UserProfile {
  firstname: string;
  lastname: string;
  email: string;
  contact: number;
  dob: Date;
  bio: string;
  isAdmin: boolean;
  isTrainer: boolean;
  skill: string;
  security = new SecurityQuestions();
}
