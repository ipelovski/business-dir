import React from 'react';
import {  ICompanyAddress } from './CompanyItem';
// import './App.css';

function CompanyAddress(props: {address: ICompanyAddress}) {
  const { address } = props;
  return (
    <div>
      <span>{address.number}</span> <span>{address.street}</span>
      <br />
      <span>{address.city}</span>, <span>{address.country}</span> <span>{address.zip}</span>
    </div>
  );
}

export default CompanyAddress;
