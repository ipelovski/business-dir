import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Company } from './CompanyItem';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import CompanyListScreen from './CompanyListScreen';
import CompanyDetailsScreen from './CompanyDetailsScreen';
import NoMatch from './NoMatch';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<CompanyListScreen />} />
        <Route path="/company/:id" element={<CompanyDetailsScreen />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
