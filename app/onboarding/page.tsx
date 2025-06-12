'use client'; // Tells Next.js this page uses client-side interactivity

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation between pages
import Image from 'next/image'; // To load images from the public folder
import './onboarding.css';

//  Roles to show in the UI
const roles = [
  {
    role: 'Lawyer',
    desc: 'A legal professional who represents clients and appears in court.',
  },
  {
    role: 'Public/Litigant',
    desc: 'Involved in a case and wants to track its updates.',
  },
  {
    role: 'Paralegal/Clerk',
    desc: 'Assists lawyers with case work, scheduling, and court tasks.',
  },
  {
    role: 'Law Student',
    desc: 'A law student preparing for a legal career.',
  },
];

export default function OnboardingPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null); //  To track selected card
  const router = useRouter(); // To change page when clicked

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);

    // Redirect to login/phone page when Public/Litigant is selected
    if (role === 'Public/Litigant') {
      router.push('/login/phone');
    }
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

      <h1 className="title">
        👋 Welcome to Court Click
      </h1>
      <p className="subtitle">
        Streamlining your legal workflow with instant court updates.
      </p>

      <h2 className="role-title">
        I describe myself as a
      </h2>
      <p className="role-subtitle">
        You can select only one option
      </p>

      <div className="role-grid">
        {roles.map((item, index) => (
          <div
            key={index}
            onClick={() => handleRoleClick(item.role) }
            className={`role-card ${selectedRole === item.role ? 'selected' : ''}`}
          >
            <h3 className="role-name">{item.role}</h3>
            <p className="role-description">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="help-text">
        🛈 Getting started?{' '}
        <span className="help-link">
          Need help?
        </span>
      </p>
    </main>
  );
}
