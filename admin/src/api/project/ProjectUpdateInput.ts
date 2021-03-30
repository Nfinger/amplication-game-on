import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type ProjectUpdateInput = {
  apiKey?: string;
  company?: CompanyWhereUniqueInput | null;
  descriotion?: string | null;
  name?: string | null;
};
