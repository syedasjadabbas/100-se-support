import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchResultsPage } from '../Search/SearchResultsPage';
import { Hero } from '../../components/Hero/Hero';
import { Mission } from '../../components/Mission/Mission';
import { FutureImpact } from '../../components/FutureImpact/FutureImpact';
import { EmergencyCases } from '../../components/EmergencyCases/EmergencyCases';
import { LatestStats } from '../../components/LatestStats/LatestStats';
import { DonationAccounts } from '../../components/DonationAccounts/DonationAccounts';

export const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('s') || searchParams.get('q');

  // If a global search query parameter is present on the root URL, render search results
  if (searchQuery !== null) {
    return <SearchResultsPage />;
  }

  return (
    <>
      <Hero />
      <LatestStats />
      <Mission />
      <FutureImpact />
      <EmergencyCases />
      <DonationAccounts />
    </>
  );
};
