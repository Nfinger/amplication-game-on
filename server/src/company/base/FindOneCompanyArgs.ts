import { ArgsType, Field } from "@nestjs/graphql";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";

@ArgsType()
class FindOneCompanyArgs {
  @Field(() => CompanyWhereUniqueInput, { nullable: false })
  where!: CompanyWhereUniqueInput;
}

export { FindOneCompanyArgs };
