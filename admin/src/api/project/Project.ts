import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type Project = {
  apiKey: string;
  company?: CompanyWhereUniqueInput | null;
  createdAt: Date;
  descriotion: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
