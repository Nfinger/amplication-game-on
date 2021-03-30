import { ArgsType, Field } from "@nestjs/graphql";
import { CompanyWhereInput } from "./CompanyWhereInput";

@ArgsType()
class FindManyCompanyArgs {
  @Field(() => CompanyWhereInput, { nullable: true })
  where?: CompanyWhereInput;
}

export { FindManyCompanyArgs };
