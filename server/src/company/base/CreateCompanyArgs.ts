import { ArgsType, Field } from "@nestjs/graphql";
import { CompanyCreateInput } from "./CompanyCreateInput";

@ArgsType()
class CreateCompanyArgs {
  @Field(() => CompanyCreateInput, { nullable: false })
  data!: CompanyCreateInput;
}

export { CreateCompanyArgs };
