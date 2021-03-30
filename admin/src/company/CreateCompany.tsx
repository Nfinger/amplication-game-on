import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Company } from "../api/company/Company";
import { CompanyCreateInput } from "../api/company/CompanyCreateInput";

const INITIAL_VALUES = {} as CompanyCreateInput;

export const CreateCompany = (): React.ReactElement => {
  useBreadcrumbs("/companies/new", "Create Company");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    Company,
    AxiosError,
    CompanyCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/companies", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/companies"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: CompanyCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Company"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <TextField label="Name" name="name" />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
