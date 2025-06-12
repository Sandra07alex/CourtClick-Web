'use client';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import './otp-client.css';

export default function OTPClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone') || 'Unknown';
  const [otp, setOtp] = useState(Array(4).fill(''));

  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (otp[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <main className="otp-container">
      <div className="banner-container">
        <Image
          src="/images/bannerpublic.png"
          alt="Banner"
          width={1600}
          height={208}
          className="banner-image"
        />
      </div>

      <h1 className="title">👋 Welcome to Court Click</h1>
      <p className="subtitle">Streamlining your legal workflow with instant court updates.</p>

      <h2 className="verification-title">OTP Verification</h2>
      <p className="phone-text">
        Enter OTP sent to <strong>+91 {phone}</strong>{' '}
        <span className="edit-link" onClick={() => router.back()}>
          ✎ Edit
        </span>
      </p>

      <div className="otp-inputs">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el!;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Backspace') handleBackspace(i);
            }}
            className="otp-input"
          />
        ))}
      </div>

      <p className="resend-text">
        Didn't receive a code? <span className="resend-link">Resend code</span>
      </p>

      <button
        className="confirm-button"
        onClick={() => {
          alert(`Entered OTP is: ${otp.join('')}`);
          router.push('/case1');
        }}
      >
        Confirm
      </button>
    </main>
  );
} 
