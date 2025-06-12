'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './found.css'

// Add custom checkbox styling
const checkboxStyle = {
  accentColor: '#50223C'
};

interface Case {
  petitioner: string;
  respondent: string;
  caseNumber: string;
  courtForum: string;
}

// Cases data as a constant
const casesData: Case[] = [
  {
    "petitioner": "Robin D & Others (P3)",
    "respondent": "State Of Kerala & Others",
    "caseNumber": "WA 233/2024",
    "courtForum": "High Court of Kerala"
  },
  {
    "petitioner": "Anjali S & Team (P1)",
    "respondent": "Union of India",
    "caseNumber": "WP 101/2023",
    "courtForum": "Supreme Court of India"
  },
  {
    "petitioner": "Kumar V & Friends (P2)",
    "respondent": "State Of Kerala",
    "caseNumber": "OA 77/2022",
    "courtForum": "Supreme Court of India"
  }
];

export default function Home() {
  const [cases, setCases] = useState<Case[]>(casesData);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  return (
    <main className="onboarding-container">
      <div className="banner-container">
        <Image
          src="/images/bannerpublic.png"
          alt="Banner"
          width={1392}
          height={200}
          className="banner-image"
        />
      </div>
      <div className="found-container">
        <div className="found-header">
          <button className="back-btn" onClick={() => router.push('/fetch/splash')}>← Back</button>
          <button className="add-case-btn" onClick={() => router.push('/fetch/addfile')}>+ Add another case</button>
        </div>
        <h2 className="results-title">
          We found {cases.length.toString().padStart(2, '0')} result{cases.length !== 1 ? 's' : ''}
        </h2>
        {error && <p className="error-message" style={{color: 'red', margin: '10px 0'}}>{error}</p>}
        <div className="results-actions">
          <label>
            <input type="checkbox" style={checkboxStyle} /> Select all
          </label>
          <button className="import-btn">Import to Dashboard</button>
        </div>
        <div className="results-list">
          {cases.map((item, idx) => (
            <div className={`result-row${idx === 0 ? " selected" : ""}`} key={idx}>
              <input type="checkbox" defaultChecked={idx === 0} style={checkboxStyle} />
              <div className="case-info">
                <div className="party">
                  <span className="party-label">Petitioner</span>
                  <span className="party-name">{item.petitioner}</span>
                </div>
                <div className="vs-circle">vs</div>
                <div className="party">
                  <span className="party-label">Respondent</span>
                  <span className="party-name">{item.respondent}</span>
                </div>
              </div>
              <div className="case-meta">
                <div>
                  <span className="meta-label">Case Number:</span>
                  <span className="case-number">{item.caseNumber}</span>
                </div>
                <div>
                  <span className="meta-label">Court Forum:</span>
                  <span className="court-forum">
                    <span className="forum-icon">🏛️</span> {item.courtForum}
                  </span>
                </div>
              </div>
              <div className="case-actions">
                <span className="gear-icon">⚙️</span>
                <span className="more-icon">⋮</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}