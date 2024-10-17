import React, { useState, useRef, memo } from "react";
import { format } from "date-fns";

import File from "../file/page";
import Envelope from "../envelope/page";
import MemoOfAppearance from "../memo_of_appearance/page";
import {
  GlobalStoreModal,
  CoverStoreModal,
  EnvelopeStoreModal,
} from "../modals/create-store-modal";
import { usePDF } from "react-to-pdf";
import generatePDF from 'react-to-pdf';

import LegalDoc from "../legaldoc/page";

const Sidebar: React.FC = () => {
  // Create refs for all the different components separately.
  const fileRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const memoRef = useRef<HTMLDivElement>(null);
  const legalDocRef = useRef<HTMLDivElement>(null);
  // Create usePDF instances for each component
  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  // const { toPDF: toFilePDF } = usePDF({ filename: "File.pdf", targetRef: fileRef });
  // const { toPDF: toEnvelopePDF } = usePDF({ filename: "Envelope.pdf",targetRef: envelopeRef });
  // const { toPDF: toMemoPDF } = usePDF({ filename: "MemoOfAppearance.pdf", targetRef: memoRef });
  // const { toPDF: toLegalDocPDF } = usePDF({ filename: "LegalDoc.pdf",targetRef: legalDocRef });
  const [activeSection, setActiveSection] = useState("Form");
  const [isOpen, setIsOpen] = useState(false);
  const [formDataGlobal, setFormDataGlobal] = useState({
    name: "",
    llmreplacement: "",
    designation: "",
    resident: "",
    mobileno: "",
    email: "",
    recipientaddress: "",
    court_name: "",
    no: "",
    fix_for: "",
    petitioner_complaint: "",
    respondent: "",
    place: "",
    date: "",
    signature: "",
    authorized_by: "",
    address: "",
    other_name: "",
    persion1: "",
    persion2: "",
    brief_for: "",
    opposite_counsel: "",
    books_citation: "",
    clients_contact_no: "",
  });
  const handleFormSubmitGlobal = (data: any) => {
    console.log("sidebar.tsx -> handleFormSubmitGlobal()");
    console.log(data.name);
    console.log(data.court_name);
    setFormDataGlobal({
      name: data.name,
      llmreplacement: data.degree,
      designation: data.profession,
      resident: data.residential,
      mobileno: data.phoneno,
      email: data.email,
      recipientaddress: data.recipient,
      court_name: data.court_name,
      no: data.no,
      fix_for: data.fix_for,
      petitioner_complaint: data.petitioner_complaint,
      respondent: data.respondent,
      place: data.place,
      date: data.date,
      signature: data.signature,
      authorized_by: data.authorized_by,
      address: data.address,
      other_name: data.other_name,
      persion1: data.persion1,
      persion2: data.persion2,
      brief_for: data.brief_for,
      books_citation: data.books_citation,
      opposite_counsel: data.opposite_counsel,
      clients_contact_no: data.clients_contact_no,
    });
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleDownloadAll = () => {
    console.log("handleDownloadAll is presssed")
    if (fileRef.current) {
      generatePDF(() => fileRef.current, { filename: 'File.pdf' });
    }else{
      console.log("fileRef was empty")
    }
    if (envelopeRef.current) {
      generatePDF(() => envelopeRef.current, { filename: 'Envelope.pdf' });
    }else{
      console.log("envelopeRef was empty")
    }
    if (memoRef.current) {
      generatePDF(() => memoRef.current, { filename: 'MemoOfAppearance.pdf' });
    }else{
      console.log("memoRef was empty")
    }
    if (legalDocRef.current) {
      generatePDF(() => legalDocRef.current, { filename: 'LegalDoc.pdf' });
    }else{
      console.log("lefalDocRef was empty")
    }
  };
  
  
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className={` fixed top-0 left-0 w-64 h-full bg-blue-800 text-white flex flex-col justify-between p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">PDfZenrator</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <button
            className={`block py-2 px-3 mb-3 text-gray-200 hover:bg-blue-700 rounded ${
              activeSection === "Profile" ? "bg-blue-700" : ""
            }`}
            onClick={() => setActiveSection("Profile")}
          >
            File
          </button>
        </nav>

        {/* Footer/Logout */}
        <div>
          <button className="block py-2 px-3 text-gray-200 hover:bg-blue-700 rounded">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64 md:ml-0">
        <button
          className="md:hidden mb-5 text-blue-800"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>
        <h2 className="text-3xl font-bold mb-5">Document</h2>
        {activeSection === "Form" && (
          <div>
            <h1>File Document</h1>
            <div>
              <GlobalStoreModal onSubmit={handleFormSubmitGlobal} />
            </div>

            
              <div ref={fileRef}>
                <File
                  name={formDataGlobal.name}
                  llmreplacement={formDataGlobal.llmreplacement}
                  designation={formDataGlobal.designation}
                  resident={formDataGlobal.resident}
                  mobileno={formDataGlobal.mobileno}
                  email={formDataGlobal.email}
                  recipientaddress={formDataGlobal.recipientaddress}
                  imgUrl="/abcd"
                  no={formDataGlobal.no}
                  fix_for={formDataGlobal.fix_for}
                  petitioner_complaint={formDataGlobal.petitioner_complaint}
                  respondent={formDataGlobal.respondent}
                  place={formDataGlobal.place}
                  date={formDataGlobal.date}
                  signature={formDataGlobal.signature}
                  persion2={formDataGlobal.persion2}
                  authorized_by={formDataGlobal.authorized_by}
                  address={formDataGlobal.address}
                  other_name={formDataGlobal.other_name}
                  persion1={formDataGlobal.persion1}
                  brief_for={formDataGlobal.brief_for}
                  court_name={formDataGlobal.court_name}
                  books_citation={formDataGlobal.books_citation}
                  opposite_counsel={formDataGlobal.opposite_counsel}
                  clients_contact_no={formDataGlobal.clients_contact_no}
                />
              </div>
              <div ref={memoRef}>
                <MemoOfAppearance
                  court_name={formDataGlobal.court_name}
                  fix_for={formDataGlobal.fix_for}
                  no={formDataGlobal.no}
                  date={formDataGlobal.date}
                  petitioner_complaint={formDataGlobal.petitioner_complaint}
                  respondent={formDataGlobal.respondent}
                  place={formDataGlobal.place}
                  signature={formDataGlobal.signature}
                  authorized_by={formDataGlobal.authorized_by}
                  other_name={formDataGlobal.other_name}
                  address={formDataGlobal.address}
                />
            </div>
              <div ref={envelopeRef}>
                <Envelope
                  name={formDataGlobal.name}
                  llmreplacement={formDataGlobal.llmreplacement}
                  designation={formDataGlobal.designation}
                  resident={formDataGlobal.resident}
                  mobileno={formDataGlobal.mobileno}
                  email={formDataGlobal.email}
                  recipientaddress={formDataGlobal.recipientaddress}
                  imgUrl="/abcd"
                />
            </div>
              <div ref={legalDocRef}>
                <LegalDoc />
            </div>
            <button onClick={()=> handleDownloadAll()}>Download All PDFs</button>
            {/*
              Previously i was just defining the handlwDownloadAll function here i.e. 
              <button onClick={()=> handleDownloadAll}>Download All PDFs</button> 

              which didn't caused handleDownloadAll function to be invoked or called. which in 
              return didn't generatedPdfs of all the four component but when i defined and called 
              at the same place then pdfs are downloaded into separated pages as coded
            */}
          </div>
        )}
        {activeSection === "LegalDoc" && <LegalDoc />}
      </div>
    </div>
  );
};

export default Sidebar;
