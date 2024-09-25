"use client"
import Envelope from '@/components/envelope/page';
import { usePDF } from 'react-to-pdf';

const HomePage = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  return (
    <div>
      <button onClick={() => toPDF()}>Download PDF</button>
      <div ref={targetRef}>
        <Envelope
          name="Sagar Giri"
          llmreplacement="llm"
          designation="Advocate"
          resident="H.No. 88 Santoshi Vihar,Narela Jod."
          mobileno="+1234567890"
          email="sagargiri456@gmail.com"
          recipientaddress="this is the address of the reciepient"
          imgUrl="" />
      </div>
    </div>
  )
}

export default HomePage;
