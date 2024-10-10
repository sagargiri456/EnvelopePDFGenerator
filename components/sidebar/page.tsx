import React, { useState } from 'react';
import { format } from 'date-fns';

import File from '../file/page';
import Envelope from '../envelope/page';
import MemoOfAppearance from '../memo_of_appearance/page';
import { GlobalStoreModal, CoverStoreModal, EnvelopeStoreModal } from '../modals/create-store-modal';
import { usePDF } from 'react-to-pdf';
import LegalDoc from '../legaldoc/page';


const Sidebar: React.FC = () => {
    // State to track the currently selected section (Form, Dashboard, etc.)

    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [activeSection, setActiveSection] = useState('Form');
    const [isOpen, setIsOpen] = useState(false);
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
    const [formDataGlobal, setFormDataGlobal] = useState({
        name: '',
        llmreplacement: '',
        designation: '',
        resident: '',
        mobileno: '',
        email: '',
        recipientaddress: '',
        court_name: '',
        no: '',
        fix_for: '',
        petitioner_complaint: '',
        respondent: '',
        place: '',
        date: '',
        signature: '',
        authorized_by: '',
        address: '',
        other_name: '',
        persion1: '',
        persion2: '',
    });

    const handleFormSubmitGlobal = (data: any) => {
        console.log(data.name)
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
        });
    };
    const [formData1, setFormData1] = useState({
        court_name: '',
        no: '',
        fix_for: '',
        petitioner_complaint: '',
        respondent: '',
        place: '',
        date: '',
        signature: '',
        authorized_by: '',
        address: '',
        other_name: '',
    });

    const handleFormSubmitCover = (data: any) => {
        console.log(data.date)
        setFormData1({
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
        });
    };


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div
                className={` fixed top-0 left-0 w-64 h-full bg-blue-800 text-white flex flex-col justify-between p-5 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:static md:translate-x-0`}
            >
                {/* Logo */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">PDfZenrator</h1>
                </div>

                {/* Navigation Links */}
                <nav>
                    <button
                        className={`block py-2 px-3 mb-3 text-gray-200 hover:bg-blue-700 rounded ${activeSection === 'Form' ? 'bg-blue-700' : ''
                            }`}
                        onClick={() => setActiveSection('Form')}
                    >
                        Form
                    </button>
                    <button
                        className={`block py-2 px-3 mb-3 text-gray-200 hover:bg-blue-700 rounded ${activeSection === 'Dashboard' ? 'bg-blue-700' : ''
                            }`}
                        onClick={() => setActiveSection('Dashboard')}
                    >
                        Envelope
                    </button>
                    <button
                        className={`block py-2 px-3 mb-3 text-gray-200 hover:bg-blue-700 rounded ${activeSection === 'Settings' ? 'bg-blue-700' : ''
                            }`}
                        onClick={() => setActiveSection('Settings')}
                    >
                        Cover
                    </button>
                    <button
                        className={`block py-2 px-3 mb-3 text-gray-200 hover:bg-blue-700 rounded ${activeSection === 'Profile' ? 'bg-blue-700' : ''
                            }`}
                        onClick={() => setActiveSection('Profile')}
                    >
                        File
                    </button>
                    <button
                        className={`block py-2 px-3 mb-3 text-gray-200 hover:bg-blue-700 rounded ${activeSection === 'LegalDoc' ? 'bg-blue-700' : ''
                            }`}
                        onClick={() => setActiveSection('LegalDoc')}
                    >
                        Legal Document
                    </button>
                </nav>

                {/* Footer/Logout */}
                <div>
                    <button onClick={() => toPDF()} className="block py-2 px-3 text-gray-200 hover:bg-blue-700 rounded">
                        Download All PDfs
                    </button>
                </div>
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

                {/* Conditionally render content based on active section */}
                {activeSection === 'Form' && <div><GlobalStoreModal onSubmit={handleFormSubmit} /></div>}


                {activeSection === 'Dashboard' &&
                    <div>
                        <div><h1>Submit The Below Form.</h1><div><EnvelopeStoreModal onSubmit={handleFormSubmit} /></div>

                        </div>
                        <Envelope
                            name={formData.name}
                            llmreplacement={formData.llmreplacement}
                            designation={formData.designation}
                            resident={formData.resident}
                            mobileno={formData.mobileno}
                            email={formData.email}
                            recipientaddress={formData.recipientaddress}
                            imgUrl="/abcd" />
                    </div>} {/* Render Envelope when Dashboard is clicked */}


                {activeSection === 'Settings' &&
                    <div>
                        <div><h1>
                            Submit The Below Form.</h1><div>
                                <CoverStoreModal onSubmit={handleFormSubmitCover} />
                            </div>

                        </div>
                        <MemoOfAppearance
                            court_name={formData1.court_name}
                            fix_for={formData1.fix_for}
                            no={formData1.no}
                            date={formData1.date}
                            petitioner_complaint={formData1.petitioner_complaint}
                            respondent={formData1.respondent}
                            place={formData1.place}
                            signature={formData1.signature}
                            authorized_by={formData1.authorized_by}
                            other_name={formData1.other_name}
                            address={formData1.address} />
                    </div>}


                {activeSection === 'Profile' &&
                    <div>
                        <h1>File Document</h1>
                        <div>
                            <GlobalStoreModal onSubmit={handleFormSubmitGlobal} />
                        </div>

                        <File
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
                            name={formDataGlobal.name}
                            llmreplacement={formDataGlobal.llmreplacement}
                            designation={formDataGlobal.designation}
                            resident={formDataGlobal.resident}
                            mobileno={formDataGlobal.mobileno}
                            email={formDataGlobal.email}
                            recipientaddress={formDataGlobal.recipientaddress}
                            imgUrl="/abcd"
                            persion1={formDataGlobal.persion1}
                            persion2={formDataGlobal.persion2}
                        />
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
                            address={formDataGlobal.address} />
                        <Envelope
                            name={formDataGlobal.name}
                            llmreplacement={formDataGlobal.llmreplacement}
                            designation={formDataGlobal.designation}
                            resident={formDataGlobal.resident}
                            mobileno={formDataGlobal.mobileno}
                            email={formDataGlobal.email}
                            recipientaddress={formDataGlobal.recipientaddress}
                            imgUrl="/abcd" />
                    </div>
                }
                {activeSection === 'LegalDoc' && <LegalDoc />}

            </div>
        </div>
    );
};

export default Sidebar;