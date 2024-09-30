"use client"
import Envelope from '@/components/envelope/page'
import MemoOfAppearance from '@/components/memo_of_appearance/page';
import { StoreModal } from '@/components/modals/create-store-modal';
import { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import Sidebar from '@/components/sidebar/page';

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


  return (

    <div>
      <div ref={targetRef}>
        <Sidebar />

      </div>



    </div>
  )
}

export default HomePage;
