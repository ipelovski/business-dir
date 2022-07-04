import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getCompanies } from './model';

function CompanyList() {
  const { status, data, error } = useQuery('companies', getCompanies, {
    staleTime: 120 * 1000,
  });
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
        <div className="company-list">
          <div className='heading column-name'><h3>Name</h3></div>
          <div className='heading'><h3>Description</h3></div>
          {data.map(company =>
            <React.Fragment key={company.id}>
              <div className='column-name'>
                <Link to={"/company/" + company.id}>{company.name}</Link>
              </div>
              <div>
                <Link to={"/company/" + company.id}>{company.description}</Link>
              </div>
            </React.Fragment>)}
        </div>
      );
    } else {
      return (
        <div>No companies found</div>
      );
    }
  }
}

export default CompanyList;
