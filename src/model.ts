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
  