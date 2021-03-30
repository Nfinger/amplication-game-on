import * as React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { Formik } from "formik";
import pick from "lodash.pick";

import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  EnumButtonStyle,
  TextField,
} from "@amplication/design-system";

import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { CompanySelect } from "../company/CompanySelect";
import { Project as TProject } from "../api/project/Project";
import { ProjectUpdateInput } from "../api/project/ProjectUpdateInput";

export const Project = (): React.ReactElement => {
  const match = useRouteMatch<{ id: string }>("/projects/:id/");
  const id = match?.params?.id;
  const history = useHistory();

  const { data, isLoading, isError, error } = useQuery<
    TProject,
    AxiosError,
    [string, string]
  >(["get-/api/projects", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/projects"}/${id}`);
    return response.data;
  });

  const [deleteEntity] = useMutation<TProject, AxiosError>(
    async (data) => {
      const response = await api.delete(`${"/api/projects"}/${id}`, data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push("//projects");
      },
    }
  );

  const [
    update,
    { error: updateError, isError: updateIsError, isLoading: updateIsLoading },
  ] = useMutation<TProject, AxiosError, ProjectUpdateInput>(async (data) => {
    const response = await api.patch(`${"/api/projects"}/${id}`, data);
    return response.data;
  });

  const handleSubmit = React.useCallback(
    (values: ProjectUpdateInput) => {
      void update(values);
    },
    [update]
  );

  useBreadcrumbs(match?.url, data?.name);

  const handleDelete = React.useCallback(() => {
    void deleteEntity();
  }, [deleteEntity]);

  const errorMessage =
    updateError?.response?.data?.message || error?.response?.data?.message;

  const initialValues = React.useMemo(
    () => pick(data, ["apiKey", "company", "descriotion", "name"]),
    [data]
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {data && (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form
            formStyle={EnumFormStyle.Horizontal}
            formHeaderContent={
              <FormHeader
                title={`${"Project"} ${
                  data?.name && data?.name.length ? data.name : data?.id
                }`}
              >
                <Button
                  type="button"
                  disabled={updateIsLoading}
                  buttonStyle={EnumButtonStyle.Secondary}
                  icon="trash_2"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button type="submit" disabled={updateIsLoading}>
                  Save
                </Button>
              </FormHeader>
            }
          >
            <div>
              <TextField label="Api Key" name="apiKey" />
            </div>
            <div>
              <CompanySelect label="Company" name="company.id" />
            </div>
            <div>
              <TextField label="descriotion" name="descriotion" />
            </div>
            <div>
              <TextField label="Name" name="name" />
            </div>
          </Form>
        </Formik>
      )}
      <Snackbar open={isError || updateIsError} message={errorMessage} />
    </>
  );
};
