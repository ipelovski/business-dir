import React from 'react';
import { Link } from 'react-router-dom';

function CompanyMissing() {
  return (
    <div className="">
      Company not found.
      <Link to="/">Return back</Link>
    </div>
  );
}

export default CompanyMissing;
