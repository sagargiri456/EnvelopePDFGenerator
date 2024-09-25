import React from 'react';
import Image from 'next/image';

interface EnvelopeProps {
    name: string;
    llmreplacement: string;
    designation: string;
    resident: string;
    mobileno: string;
    email: string;
    recipientaddress: string;
    imgUrl: string;
}

const Envelope: React.FC<EnvelopeProps> = ({
    name,
    llmreplacement,
    designation,
    resident,
    mobileno,
    email,
    recipientaddress,
    imgUrl,
}) => {

    return (
        <div className="bg-yellow-200 p-8 max-w-4xl mx-auto mt-10 rounded-lg shadow-lg relative">
            {/* Top Section with Speed Post */}
            <div className="flex items-center justify-between mb-10">
                <div className="flex items-center">
                    <Image
                        src={imgUrl}
                        alt="Product"
                        width={50}
                        height={50}
                    />
                </div>
                <h1 className="text-xl text-red-700 font-semibold">Regd./Ad./Speed Post</h1>
            </div>

            <div className='flex'>
                {/* left Section with Return Address */}
                <div className="text-left mt-16 text-red-700">
                    <p className="text-sm mb-2">If not delivered, please return to:</p>
                    <h2 className="font-bold text-lg">{name}</h2>
                    <p>{llmreplacement}</p>
                    <p>{designation}</p>
                    <p>Chamber of Law Solutions</p>
                    <p>Resi.: {resident}</p>
                    <p>Mob.: {mobileno}</p>
                    <p>E-mail: {email}</p>
                </div>

                {/* Right Section with Recipient Address */}
                <div className="flex text-center ml-16 justify-center mb-32">
                    <div className="text-left">
                        <h3 className="text-lg text-red">To,</h3>
                        <h3 className="font-bold text-lg text-red">Shri</h3>
                        <p className="mt-2 underline">{recipientaddress}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Envelope;
