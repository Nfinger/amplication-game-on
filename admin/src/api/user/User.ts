import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type User = {
  company?: CompanyWhereUniqueInput | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
