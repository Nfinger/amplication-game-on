import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type ProjectWhereInput = {
  apiKey?: string;
  company?: CompanyWhereUniqueInput | null;
  createdAt?: Date;
  descriotion?: string | null;
  id?: string;
  name?: string | null;
  updatedAt?: Date;
};
