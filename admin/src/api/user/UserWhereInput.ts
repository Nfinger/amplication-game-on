import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type UserWhereInput = {
  company?: CompanyWhereUniqueInput | null;
  createdAt?: Date;
  firstName?: string | null;
  id?: string;
  lastName?: string | null;
  updatedAt?: Date;
  username?: string;
};
