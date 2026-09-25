import React, { useState } from 'react';
import './DonationAccounts.css';

interface AccountItem {
  id: string;
  type: string;
  accountNumber: string;
  accountTitle: string;
  logo: React.ReactNode;
}

const MeezanLogo: React.FC = () => (
  <div className="donate-account-logo-wrap" title="Meezan Bank">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="donate-account-logo">
      <rect width="48" height="48" rx="24" fill="#002B49" />
      <path d="M24 10L36 17V19H12V17L24 10Z" fill="#E5B25D" />
      <rect x="14.5" y="20.5" width="3.2" height="13" rx="1.2" fill="#FFFFFF" />
      <rect x="20.5" y="20.5" width="3.2" height="13" rx="1.2" fill="#FFFFFF" />
      <rect x="26.5" y="20.5" width="3.2" height="13" rx="1.2" fill="#FFFFFF" />
      <rect x="32.5" y="20.5" width="3.2" height="13" rx="1.2" fill="#FFFFFF" />
      <rect x="11" y="34" width="26" height="4" rx="1.5" fill="#E5B25D" />
    </svg>
  </div>
);

const EasypaisaLogo: React.FC = () => (
  <div className="donate-account-logo-wrap" title="Easypaisa">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="donate-account-logo">
      <rect width="48" height="48" rx="24" fill="#00A859" />
      <path d="M24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36C28.8 36 32.92 33.17 34.8 29.1H29.84C28.52 31.04 26.4 32.29 24 32.29C19.42 32.29 15.71 28.58 15.71 24C15.71 19.42 19.42 15.71 24 15.71C27.71 15.71 30.87 18.15 31.89 21.54H35.74C34.58 16 29.78 12 24 12Z" fill="#FFFFFF" />
      <circle cx="24" cy="24" r="4.6" fill="#FFFFFF" />
    </svg>
  </div>
);

const JazzCashLogo: React.FC = () => (
  <div className="donate-account-logo-wrap" title="JazzCash">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="donate-account-logo">
      <rect width="48" height="48" rx="24" fill="#ED1C24" />
      <circle cx="24" cy="24" r="20" fill="#1C1B1B" />
      <path d="M26.5 14C26.5 14 30.5 18.5 30.5 22.5C30.5 26.5 27.5 29 24 29C20.5 29 17.5 26.5 17.5 22.5C17.5 18 22.5 14 22.5 14C22.5 14 20.5 17.5 20.5 20.5C20.5 22.8 22 24.5 24 24.5C26 24.5 27.5 22.8 27.5 20.5C27.5 18 26.5 14 26.5 14Z" fill="#FFC800" />
      <path d="M21 26C21 31 24.5 34 29 34" stroke="#ED1C24" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  </div>
);

const ACCOUNTS: AccountItem[] = [
  {
    id: 'meezan',
    type: 'Bank Account:',
    accountNumber: '9201 0104980230',
    accountTitle: 'Usama Waseem (Meezan Bank)',
    logo: <MeezanLogo />,
  },
  {
    id: 'easypaisa',
    type: 'Easypaisa:',
    accountNumber: '03133474377',
    accountTitle: 'Haseeb Ur Rehman',
    logo: <EasypaisaLogo />,
  },
  {
    id: 'jazzcash',
    type: 'Jazzcash:',
    accountNumber: '03030305309',
    accountTitle: 'Amanullah',
    logo: <JazzCashLogo />,
  },
];

export const DonationAccounts: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    const cleanNumber = text.replace(/\s+/g, '');
    navigator.clipboard.writeText(cleanNumber).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="donate" className="donate-accounts-section" aria-label="Donation Bank Accounts">
      {/* Decorative Background Contour Graphic */}
      <div className="donate-bg-graphic" aria-hidden="true">
        <img
          src="/assets/home-main-background-2.png"
          alt=""
          loading="lazy"
          className="donate-bg-img"
        />
      </div>

      <div className="donate-accounts-container">
        {/* Yellow Heading Banner */}
        <div className="donate-yellow-banner">
          <h3 className="donate-yellow-title">
            DONATE TO US
          </h3>
        </div>

        {/* Orange Accounts Card */}
        <div className="donate-accounts-card">
          <div className="donate-accounts-grid">
            {ACCOUNTS.map((acc) => (
              <div
                key={acc.id}
                className="donate-account-col"
                onClick={() => handleCopy(acc.id, acc.accountNumber)}
                title="Click to copy account number"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCopy(acc.id, acc.accountNumber);
                  }
                }}
              >
                {acc.logo}
                <h5 className="donate-account-type">{acc.type}</h5>
                <div className="donate-number-row">
                  <h4 className="donate-account-number">{acc.accountNumber}</h4>
                  {copiedId === acc.id && (
                    <span className="donate-copied-toast">Copied!</span>
                  )}
                </div>
                <h5 className="donate-account-holder">{acc.accountTitle}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
