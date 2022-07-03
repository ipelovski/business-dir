import React from 'react';
import { Link } from 'react-router-dom';
import { ICompany } from './CompanyItem';
// import './App.css';

function NearbyCompanies(props: { companies: ICompany[] }) {
  const { companies } = props;
  return (
    <ul className="">
      {companies.map(company => {
        const address = company.address;
        return (
          <li key={company.id} className="">
            <Link to={"/company/" + company.id}>{company.name}</Link>
            <span>{address.number}</span>&nbsp;
            <span>{address.street}</span>&nbsp;
            <span>{address.city}</span>&nbsp;
            <span>{address.zip}</span>
          </li>
        )
      })}
    </ul>
  );
}

export default NearbyCompanies;