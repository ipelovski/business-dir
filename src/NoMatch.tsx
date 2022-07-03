import React from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

function NoMatch() {
  return (
    <div className="">
      Nothing found here.
      <Link to="/">Return back</Link>
    </div>
  );
}

export default NoMatch;
