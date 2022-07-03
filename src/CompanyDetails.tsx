import React from 'react';
import CompanyAddress from './CompanyAdress';
import CompanyContact from './CompanyContact';
import { ICompany } from './CompanyItem';
import NearbyCompanies from './NearbyCompanies';
// import './App.css';

function CompanyDetails(props: {company: ICompany, nearby: ICompany[]}) {
  const { company, nearby: nearby } = props;
  return (
    <div className="">
      <img src={company.image} />
      <div>
        <h4>Address</h4>
        <CompanyAddress address={company.address} />
        <h4>Contact</h4>
        <CompanyContact company={company} />
        <h4>Nearby Places</h4>
        <NearbyCompanies companies={nearby} />
      </div>
    </div>
  );
}

export default CompanyDetails;
