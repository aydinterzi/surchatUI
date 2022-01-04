import { Options } from "./Options";
import { UserAnswers } from "./UserAnswers";

export class Questions{
  id:number;
  question:string;
  surveyId:number;
  options:Options[];
  userAnswers:UserAnswers[];
}
