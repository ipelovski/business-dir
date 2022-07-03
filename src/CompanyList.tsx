import React from 'react';
// import './App.css';
import CompanyItem, { Company } from './CompanyItem';

function CompanyList() {
  const companies: Company[] = [{
    id: '1',
    name: "Aaaa"
  }]
  const list = companies.map(company =>
    <CompanyItem key={company.id} company={company} />);
  return (
    <ul className="">
      {list}
    </ul>
  );
}

export default CompanyList;
