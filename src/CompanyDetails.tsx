import React from 'react';
import CompanyAddress from './CompanyAdress';
import CompanyContact from './CompanyContact';
import { ICompany } from './CompanyItem';
import NearbyCompanies from './NearbyCompanies';
// import './App.css';

function CompanyDetails(props: {company: ICompany, nearby: ICompany[]}) {
  const { company, nearby: nearby } = props;
  return (
    <div className="company-details">
      <div className='company-image'>
        <img src={company.image} />
      </div>
      <div className='company-info'>
        <div className="company-info-column">
          <h4>Address</h4>
          <CompanyAddress address={company.address} />
        </div>
        <div className="company-info-column">
          <h4>Contact</h4>
          <CompanyContact company={company} />
        </div>
        <div className="company-nearby-places">
          <h4>Nearby Places</h4>
          <NearbyCompanies companies={nearby} />
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
