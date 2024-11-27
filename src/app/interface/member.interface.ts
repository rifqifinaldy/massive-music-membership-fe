export interface IMembers {
  id: number;
  profile_pic: string;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  gender: "male" | "female";
  isActive: boolean;
}
