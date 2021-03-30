import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type UserCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
