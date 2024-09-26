"use client"
import Envelope from '@/components/envelope/page'
import { StoreModal } from '@/components/modals/create-store-modal';
import { useState } from 'react';
import { usePDF } from 'react-to-pdf';

const HomePage = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    llmreplacement: '',
    designation: '',
    resident: '',
    mobileno: '',
    email: '',
    recipientaddress: ''
  });

  const handleFormSubmit = (data: any) => {
    setFormData({
      name: data.name,
      llmreplacement: data.degree,
      designation: data.profession,
      resident: data.residential,
      mobileno: data.phoneno,
      email: data.email,
      recipientaddress: data.recipient
    });
  };
  return (

    <div>
      <div>
        <StoreModal onSubmit={handleFormSubmit} />
      </div>
      <div ref={targetRef}>
        <Envelope
          name={formData.name}
          llmreplacement={formData.llmreplacement}
          designation={formData.designation}
          resident={formData.resident}
          mobileno={formData.mobileno}
          email={formData.email}
          recipientaddress={formData.recipientaddress}
          imgUrl="/abcd" />
      </div>
      <button onClick={() => toPDF()}>Download PDF</button>
    </div>
  )
}

export default HomePage;
