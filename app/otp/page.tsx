import { Suspense } from 'react';
import OTPClient from './components/OTPClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading OTP...</div>}>
      <OTPClient />
    </Suspense>
  );
}
