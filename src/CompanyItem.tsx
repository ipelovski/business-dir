import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

export interface ICompany {
  id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: ICompanyAddress;
}

export interface ICompanyAddress {
  number: string;
  street: string;
  zip: string;
  city: string;
  country: string;
}

function CompanyItem(props: {company: ICompany}) {
  return (
    <li className="">
      <Link to={"/company/" + props.company.id}>{props.company.name}</Link>
      <span>{props.company.description}</span>
    </li>
  );
}

export default CompanyItem;
