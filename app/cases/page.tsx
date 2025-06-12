'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './cases.css';
import Image from 'next/image';

const models = [
  {
    key: 'individual',
    label: 'Individual',
    desc: 'for personal cases',
    icon: '🧑',
  },
  {
    key: 'representative',
    label: 'Representative',
    desc: 'for cases of others',
    icon: '🧑‍🤝‍🧑',
  },
  {
    key: 'company',
    label: 'Company/Firm/Entity',
    desc: 'for organization',
    icon: '🏢',
  },
];

export default function Cases() {
  const [selected, setSelected] = useState<string>('');
  const router = useRouter();

  const handleClick = (key: string) => {
    setSelected(key);
    router.push('/case1');
  };

  return (
    <main className="cases-container">
      <div className="banner-container">
        <Image
          src="/images/banner.svg"
          alt="Banner"
          width={1392}
          height={200}
          className="banner-image"
        />
      </div>

      <h1 className="title">🔎 Looking up cases for</h1>
      <p className="subtitle">Choose any of the following</p>

      <div className="cases-grid">
        {models.map((item) => (
          <div
            key={item.key}
            className={`cases-card${selected === item.key ? ' selected' : ''}`}
            onClick={() => handleClick(item.key
              
            )}
          >
            <span className={`cases-radio${selected === item.key ? ' selected' : ''}`}>
              <span className="cases-radio-point" />
              <span className="cases-icon" aria-label={item.label}>
                {item.icon}
              </span>
            </span>
            <span className="cases-label">{item.label}</span>
            <span className="cases-desc">({item.desc})</span>
          </div>
        ))}
      </div>
    </main>
  );
}
