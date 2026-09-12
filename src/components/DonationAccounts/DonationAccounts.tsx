import React, { useState } from 'react';
import './DonationAccounts.css';

interface AccountItem {
  id: string;
  type: string;
  accountNumber: string;
  accountTitle: string;
}

const ACCOUNTS: AccountItem[] = [
  {
    id: 'meezan',
    type: 'Bank Account:',
    accountNumber: '9201 0104980230',
    accountTitle: 'Usama Waseem (Meezan Bank)',
  },
  {
    id: 'easypaisa',
    type: 'Easypaisa:',
    accountNumber: '03160359929',
    accountTitle: 'Muhammad Wasif',
  },
  {
    id: 'jazzcash',
    type: 'Jazzcash:',
    accountNumber: '03030305309',
    accountTitle: 'Amanullah',
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
        {/* Yellow Heading Banner (9f9b9b1) */}
        <div className="donate-yellow-banner">
          <h3 className="donate-yellow-title">
            Join us to help someone in need with your generous contribution
          </h3>
        </div>

        {/* Orange Accounts Card (e38e0dc) */}
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
