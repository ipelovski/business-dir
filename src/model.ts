const url = "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f";

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


export async function getCompanies(): Promise<ICompany[]> {
  const response = await fetch(url);
  return response.json();
}
