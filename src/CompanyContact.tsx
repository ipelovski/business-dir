import React from 'react';
import {  ICompany } from './CompanyItem';
// import './App.css';

function CompanyContact(props: {company: ICompany}) {
  const { company } = props;
  return (
    <div className="">
      <span>{company.phone}</span>
      <br />
      <span>{company.email}</span>
    </div>
  );
}

export default CompanyContact;
