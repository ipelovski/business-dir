import React from 'react';
import {  ICompany } from './CompanyItem';
// import './App.css';

function CompanyContact(props: {company: ICompany}) {
  const { company } = props;
  return (
    <div className="company-contact">
      <span>{company.name}</span>
      <br />
      <span>{company.phone}</span>
      <br />
      <span>{company.email}</span>
    </div>
  );
}

export default CompanyContact;
