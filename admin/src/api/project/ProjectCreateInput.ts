import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type ProjectCreateInput = {
  apiKey: string;
  company?: CompanyWhereUniqueInput | null;
  descriotion?: string | null;
  name?: string | null;
};
