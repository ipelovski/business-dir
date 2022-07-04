import React from 'react';
import { Link } from 'react-router-dom';
import { ICompany } from './model';

function NearbyCompanies(props: { companies: ICompany[] }) {
  const { companies } = props;
  return (
    <div className="nearby-places-grid">
      {companies.map(company => {
        const address = company.address;
        return (
          <React.Fragment key={company.id}>
            <div className='column-name'>
              <Link to={"/company/" + company.id}>{company.name}</Link>
            </div>
            <div>
              <span>{address.number}</span>
              <span>{address.street}</span>
              <span>{address.city}</span>
              <span>{address.zip}</span>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default NearbyCompanies;
