import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { CompanyList } from "./CompanyList";
import { CreateCompany } from "./CreateCompany";
import { Company } from "./Company";

export const CompanyIndex = (): React.ReactElement => {
  useBreadcrumbs("/companies/", "Companies");

  return (
    <Switch>
      <PrivateRoute exact path={"/companies/"} component={CompanyList} />
      <PrivateRoute path={"/companies/new"} component={CreateCompany} />
      <PrivateRoute path={"/companies/:id"} component={Company} />
    </Switch>
  );
};
