'use client'; // Tells Next.js this page uses client-side interactivity

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation between pages
import Image from 'next/image'; // To load images from the public folder
import { FaBan } from 'react-icons/fa';

import './notfound.css'




export default function Home() {
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
<FaBan size={50} color="#000000" />
    <div className="splash-title">
    No matches yet
    </div>
    <div className="splash-subtitle">
    Maybe check the spelling or try different info?

    </div>
    <div className="splash-button">
    <button className="splash-button-text">
    Back 
    </button>
    </div>
  
</div>
</div>

    </main>
  );
}