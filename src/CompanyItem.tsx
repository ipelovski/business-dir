import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

export class Company {
  constructor(public id: string, public name: string) { }
}

function CompanyItem(props: {company: Company}) {
  return (
    <li className="">
      <Link to={"/company/" + props.company.id}>{props.company.name}</Link>
    </li>
  );
}

export default CompanyItem;
