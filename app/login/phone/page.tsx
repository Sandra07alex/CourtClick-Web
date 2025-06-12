'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './phone.css';

export default function PhoneLoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setPhoneNumber(value);
      setError('');
    }
  };

  const handleGetOTP = () => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    router.push(`/otp?phone=${phoneNumber}`);
  };

  return (
    <main className="phone-container">
      <div className="banner-container">
        <Image
          src="/images/banenrpublic.png"
          alt="Banner"
          width={1600}
          height={208}
          className="banner-image"
        />
      </div>
      <h1 className="title">
        👋 Welcome to Court Click
      </h1>
      <p className="subtitle">
        Streamlining your legal workflow with instant court updates.
      </p>
      <div className="login-container">
        <h1 className="title">
          Log in to Court Click
        </h1>
        <p className="subtitle">
          Enter your phone number to log in.
        </p>
      </div>
      <div className="input-container">
        <input
          type="tel"
          placeholder="+91 | Phone number"
          className="phone-input"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        {error && <p className="error-text">{error}</p>}
      </div>
      {/* Terms */}
      <label className="terms-label">
        <input type="checkbox" className="terms-checkbox" />
        I agree with the <a href="#" className="terms-link">Terms of services</a> & <a href="#" className="terms-link">Privacy policy</a>
      </label>

      {/* Get OTP button */}
      <button
        className="otp-button"
        disabled={phoneNumber.length !== 10}
        onClick={handleGetOTP}
      >
        Get OTP
      </button>
    </main>
  );
}