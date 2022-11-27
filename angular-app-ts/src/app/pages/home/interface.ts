import { Gender } from "./enum";

export interface User {
  name: string,
  age: number,
  gender: Gender,
  education: string[]
}
