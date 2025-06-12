'use client'; // Tells Next.js this page uses client-side interactivity

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation between pages
import Image from 'next/image'; // To load images from the public folder
import './page.css'



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

    {/* <h1 className="title">
      👋 Welcome to Court Click
    </h1> */}
    {/* <p className="subtitle">
      Streamlining your legal workflow with instant court updates.
    </p> */}

    </main>
  );
}