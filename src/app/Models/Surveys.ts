import { Questions } from "./Questions";

export class Surveys{
  id:number;
  code:number;
  userId:number;
  title:string;
  time:number;
  isOpen:boolean;
  questions:Questions[];
}
