import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CompanyListScreen from './CompanyListScreen';
import CompanyDetailsScreen from './CompanyDetailsScreen';
import NoMatch from './NoMatch';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <HashRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<CompanyListScreen />} />
          <Route path="/company/:id" element={<CompanyDetailsScreen />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
