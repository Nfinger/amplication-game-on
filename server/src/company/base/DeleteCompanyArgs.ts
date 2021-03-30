import { ArgsType, Field } from "@nestjs/graphql";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";

@ArgsType()
class DeleteCompanyArgs {
  @Field(() => CompanyWhereUniqueInput, { nullable: false })
  where!: CompanyWhereUniqueInput;
}

export { DeleteCompanyArgs };
