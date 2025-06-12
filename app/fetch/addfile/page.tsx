'use client'; // Tells Next.js this page uses client-side interactivity

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation between pages
import Image from 'next/image'; // To load images from the public folder
import { FaUser } from 'react-icons/fa';


import './addfile.css'




export default function Home() {
  const router = useRouter();

  const handleSubmit1 = (e: React.FormEvent) => {
    router.push('/case1');
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
  <FaUser size={50} color="#000000" className="mb-4" />

    <div className="splash-title">
    No Cases Added Yet
    </div>
    <div className="splash-subtitle">
    Need help finding yours? We’re here to assist!
    </div>
    <div className="splash-button"> 
    <button className="splash-button-text" onClick={handleSubmit1}>
    Add Case
    </button>
    </div>

</div>
</div>

    </main>
  );
}