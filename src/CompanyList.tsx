import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
// import './App.css';
import CompanyItem, { ICompany } from './CompanyItem';

const url = "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f";

export async function getCompanies(): Promise<ICompany[]> {
  const response = await fetch(url);
  return response.json() as Promise<ICompany[]>;
}

function CompanyList() {
  // const queryClient = useQueryClient();
  const { status, data, error } = useQuery('companies', getCompanies);
  // const companies: Company[] = [{
  //   id: '1',
  //   name: "Aaaa"
  // }]
  if (status === 'loading') {
    return (
      <div>Loading</div>
    )
  } else if (status === "error") {
    return (
      <div>Error: {(error as Error).message}</div>
    )
  } else {
    if (data != null) {
      return (
        <ul className="">
          {data.map(company =>
            <li key={company.id} className="">
              <Link to={"/company/" + company.id}>{company.name}</Link>
              <span>{company.description}</span>
            </li>)}
        </ul>
      );
    } else {
      return (
        <div>No companies found</div>
      );
    }
  }

}

export default CompanyList;
