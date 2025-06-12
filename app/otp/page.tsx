'use client';
import { Suspense } from 'react';
import OTPPage from './otp-client/page';


export default function Page() {
  return (
    <Suspense fallback={<div>Loading OTP...</div>}>
      <OTPPage />
    </Suspense>
  );
}
