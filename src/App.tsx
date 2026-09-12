import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { MonthlySubscription } from './components/MonthlySubscription/MonthlySubscription';
import { Mission } from './components/Mission/Mission';
import { FutureImpact } from './components/FutureImpact/FutureImpact';
import { ActionCTA } from './components/ActionCTA/ActionCTA';
import { EmergencyCases } from './components/EmergencyCases/EmergencyCases';
import { LatestStats } from './components/LatestStats/LatestStats';
import { DonationAccounts } from './components/DonationAccounts/DonationAccounts';
import { Footer } from './components/Footer/Footer';
import { BackToTop } from './components/UI/BackToTop';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content" className="app-main">
        <Hero />
        <MonthlySubscription />
        <Mission />
        <FutureImpact />
        <ActionCTA />
        <EmergencyCases />
        <LatestStats />
        <DonationAccounts />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;