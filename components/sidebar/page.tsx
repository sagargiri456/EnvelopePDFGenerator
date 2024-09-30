import React, { useState } from 'react';

import Envelope from '../envelope/page';
import MemoOfAppearance from '../memo_of_appearance/page';
import { StoreModal } from '../modals/create-store-modal';
import { usePDF } from 'react-to-pdf';

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


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-blue-800 text-white flex flex-col justify-between p-5 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
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
                        Other1
                    </button>
                </nav>

                {/* Footer/Logout */}
                <div>
                    <button className="block py-2 px-3 text-gray-200 hover:bg-blue-700 rounded">
                        Other2
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
                {activeSection === 'Form' && <div><h1>
                    Submit The Below Form.</h1><div>
                        <StoreModal onSubmit={handleFormSubmit} />
                    </div>

                </div>}


                {activeSection === 'Dashboard' && <Envelope
                    name={formData.name}
                    llmreplacement={formData.llmreplacement}
                    designation={formData.designation}
                    resident={formData.resident}
                    mobileno={formData.mobileno}
                    email={formData.email}
                    recipientaddress={formData.recipientaddress}
                    imgUrl="/abcd" />} {/* Render Envelope when Dashboard is clicked */}


                {activeSection === 'Settings' && <MemoOfAppearance />}


                {activeSection === 'Profile' && <p>This is the Profile section content.</p>}
                <button onClick={() => toPDF()}>Download PDF</button>
            </div>
        </div>
    );
};

export default Sidebar;
