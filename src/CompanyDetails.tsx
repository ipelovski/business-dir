import React from 'react';
import { Company } from './CompanyItem';
// import './App.css';

function CompanyDetails(props: {company: Company}) {
  return (
    <div className="">
      {props.company.name}
    </div>
  );
}

export default CompanyDetails;
