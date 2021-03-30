import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Company } from "../api/company/Company";

type Props = { id: string };

export const CompanyTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    Company,
    AxiosError,
    [string, string]
  >(["get-/api/companies", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/companies"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/companies"}/${id}`} className="entity-id">
      {data?.name && data?.name.length ? data.name : data?.id}
    </Link>
  );
};
