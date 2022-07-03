import React from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import { Company } from './CompanyItem';
import CompanyMissing from './CompanyMissing';
// import './App.css';

function CompanyDetailsScreen() {
  const { id } = useParams();
  const company = new Company(id!, "aaa")
  if (company == null) {
    return (
      <CompanyMissing />
    )
  } else {
    return (
      <CompanyDetails company={company} />
    );
  }
}

export default CompanyDetailsScreen;
