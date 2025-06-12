'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './case1.css';
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
  const [formData, setFormData] = useState({
    name: '',
    oppositionName: '',
    caseType: '',
    caseNumber: '',
    filingYear: '',
    district: '',
    courtForum: '',
  });
  const router = useRouter();

  const handleClick = (key: string) => {
    setSelected(key);
    router.push('/case1');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleSubmit2 = (e: React.FormEvent) => {
    router.push('/fetch/splash');
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
            onClick={() => handleClick(item.key)}
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

      {selected === 'individual' && (
        <div>
          <div>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <label>Your Name<span className="required">*</span></label>
                  <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Opposition Party Name <span className="sub">(Person or authority against the case)</span></label>
                  <input type="text" name="oppositionName" placeholder="Enter Opposition Name" onChange={handleChange} />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label>Case Number<span className="required">*</span></label>
                  <div className="case-number-row">
                    <select name="caseType" onChange={handleChange} required>
                      <option value="">Case Type</option>
                      <option value="WA">WA</option>
                      <option value="CR">CR</option>
                    </select>
                    <input type="text" name="caseNumber" placeholder="Case Number" onChange={handleChange} required />
                    <select name="filingYear" onChange={handleChange} required>
                      <option value="">Filing Year</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  <p className="example">Eg: WA 233 2024</p>
                </div>

                <div className="form-group">
                  <label>District (In which your case is filed)<span className="required">*</span></label>
                  <select name="district" onChange={handleChange} required>
                    <option value="">Choose District</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Trivandrum">Trivandrum</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label>Court Forum</label>
                  <select name="courtForum" onChange={handleChange}>
                    <option value="">Choose Court</option>
                    <option value="High Court">High Court</option>
                    <option value="District Court">District Court</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <button className="submit-button" onClick={handleSubmit2}>Find Case(s) For Me</button>
        </div>
      )}
    </main>
  );
}
