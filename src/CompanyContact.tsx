import {  ICompany } from './model';

function CompanyContact(props: {company: ICompany}) {
  const { company } = props;
  return (
    <div className="company-contact">
      <span>{company.name}</span>
      <br />
      <span>{company.phone}</span>
      <br />
      <span>{company.email}</span>
    </div>
  );
}

export default CompanyContact;
