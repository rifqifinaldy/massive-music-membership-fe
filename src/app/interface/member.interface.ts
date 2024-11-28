export enum EMemberType {
  REGULAR = "Regular",
  PREMIUM = "Premium",
}

export type TMemberType = `${EMemberType}`;

export interface IMembers {
  id: number;
  profile_pic: string | null;
  first_name: string;
  last_name: string;
  email: string;
  age: number | null;
  gender: "male" | "female" | "";
  isActive: boolean;
  member_type: TMemberType | null;
}

export type TMembersInput = Omit<IMembers, "id">;
