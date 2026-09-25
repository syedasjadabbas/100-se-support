import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Mission } from '../../components/Mission/Mission';
import { FutureImpact } from '../../components/FutureImpact/FutureImpact';
import { ActionCTA } from '../../components/ActionCTA/ActionCTA';
import { EmergencyCases } from '../../components/EmergencyCases/EmergencyCases';
import { LatestStats } from '../../components/LatestStats/LatestStats';
import { DonationAccounts } from '../../components/DonationAccounts/DonationAccounts';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <FutureImpact />
      <ActionCTA />
      <EmergencyCases />
      <LatestStats />
      <DonationAccounts />
    </>
  );
};
