import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import CompanyMissing from './CompanyMissing';
import { getCompanies } from './model';

function CompanyDetailsScreen() {
  const { id } = useParams();
  const { status, data, error } = useQuery('companies', getCompanies, {
    staleTime: 120 * 1000,
  });
  if (status === "loading") {
    return (
      <div>Loading</div>
    )
  } else if (status === "error") {
    return (
      <div>Error: {(error as Error).message}</div>
    )
  } else {
    if (data != null) {
      const company = data.find(c => c.id === id);
      if (company != null) {
        const nearbyPlaces = data.filter(c => c.id !== id && c.address.city === company.address.city && c.address.country === company.address.country)
        return (
          <CompanyDetails company={company} nearby={nearbyPlaces} />
        );
      } else {
        return (
          <CompanyMissing />
        )
      }
    } else {
      return (
        <CompanyMissing />
      )
    }
  }
}

export default CompanyDetailsScreen;
