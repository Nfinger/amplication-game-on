import { ArgsType, Field } from "@nestjs/graphql";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";
import { CompanyUpdateInput } from "./CompanyUpdateInput";

@ArgsType()
class UpdateCompanyArgs {
  @Field(() => CompanyWhereUniqueInput, { nullable: false })
  where!: CompanyWhereUniqueInput;
  @Field(() => CompanyUpdateInput, { nullable: false })
  data!: CompanyUpdateInput;
}

export { UpdateCompanyArgs };
