'use client'; // Tells Next.js this page uses client-side interactivity

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation between pages
import Image from 'next/image'; // To load images from the public folder
import { FaSearchPlus } from 'react-icons/fa';

import './splash.css'

export default function Home() {
  const router = useRouter();

  const handleSubmit1 = (e: React.FormEvent) => {
    router.push('/fetch/found');
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    router.push('/fetch/notfound');
  };

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
<div className="splash-container">
<div className="splash-icon">
<FaSearchPlus size={50} color="#000000" />
    <div className="splash-title">
    Hang tight...
    </div>
    <div className="splash-subtitle">
    finding your cases may take a moment, 
    but it's worth it.
    </div>


</div>
<button className="submit-button" onClick={handleSubmit1}>Found Case(s) </button>
<button className="submit-button" onClick={handleSubmit2}>Not Found Case(s) </button>

</div>

    </main>
  );
}