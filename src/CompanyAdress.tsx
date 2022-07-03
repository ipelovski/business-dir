import React from 'react';
import {  ICompanyAddress } from './CompanyItem';
// import './App.css';

function CompanyAddress(props: {address: ICompanyAddress}) {
  const { address } = props;
  return (
    <div className="">
      <span>{address.number}</span>&nbsp;<span>{address.street}</span>
      <br />
      <span>{address.city}</span>,&nbsp;<span>{address.country}</span>&nbsp;<span>{address.zip}</span>
    </div>
  );
}

export default CompanyAddress;
