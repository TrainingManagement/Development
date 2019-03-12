import { SecurityQuestions } from "./security";

export class UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  dob: Date;
  bio: string;
  skill: string;
  security = new SecurityQuestions();
}
