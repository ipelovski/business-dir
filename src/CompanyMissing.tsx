import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

function CompanyMissing() {
  return (
    <div className="">
      Company not found.
      <Link to="/">Return back</Link>
    </div>
  );
}

export default CompanyMissing;
