import React, { useState } from 'react';
import Image from 'next/image';

interface MainFormProps {
    name: string;
    llmreplacement: string;
    designation: string;
    resident: string;
    mobileno: string;
    email: string;
    recipientaddress: string;
    imgUrl: string;
    court_name: string;
    no: string;
    fix_for: string;
    petitioner_complaint: string;
    respondent: string;
    place: string;
    date: string;
    signature: string;
    authorized_by: string;
    address: string;
    other_name: string;
    persion1: string;
    persion2: string;
}

const File: React.FC<MainFormProps> = ({
    name,
    llmreplacement,
    designation,
    resident,
    mobileno,
    email,
    recipientaddress,
    imgUrl,
    court_name,
    no,
    fix_for,
    petitioner_complaint,
    respondent,
    place,
    date,
    signature,
    authorized_by,
    address,
    other_name,
    persion1,
    persion2,
}) => {
    const [value, setValue] = useState(' ');
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    return ( 
        <div className="max-w-3xl mx-auto p-4 bg-yellow-100 border border-gray-300 rounded-lg shadow-md">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-500">SHIV POOJAN SINGH</h1>
                <div className="flex justify-between mt-2">
                    <div>
                        <p className="text-sm font-semibold">ANURAG DUBEY</p>
                        <p className="text-xs">Advocate</p>
                        <p className="text-xs">Mob: 9425609368</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-blue-800 text-white px-4 py-1 inline-block rounded-full">
                            <p className="font-bold">Advocate</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold">CHANDRABHAN UIKEY</p>
                        <p className="text-xs">Advocate</p>
                        <p className="text-xs">Mob: 7999196881</p>
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mt-4">
                <p className="text-sm font-semibold">CHAMBER OF LAW SOLUTIONS</p>
                <hr className="border-2 border-gray-800 shadow-lg my-4" />
                <p className="text-xs">
                    Office/Chamber 10, Krishna Complex-B, Gangpati Enclave, Beema Kunj,
                    Kolar Road, Bhopal
                </p>
                <p className="text-xs">Mob: 9826092582</p>
                <p className="text-xs">Email: adv_shivpoojansingh@yaahoo.com</p>
                <hr className="border-2 border-gray-800 shadow-lg my-4" />
            </div>

            {/* Form Fields */}
            <div className="mt-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-sm font-semibold">Before the Hon'ble</label>
                        <input
                            type="text"
                            className="w-full bg-transparent p-1"
                            value={value}
                            onChange={handleOnChange}
                        />
                        <hr className="border-2 border-gray-800 shadow-lg my-4" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <p><u>{persion1}</u></p>
                        <hr className="border-2 border-gray-800 shadow-lg my-4" />
                    </div>
                    <div>
                        <p className="text-center text-xl">Versus</p>
                    </div>
                    <div>
                        <p><u>{persion2}</u></p>
                        <hr className="border-2 border-gray-800 shadow-lg my-4" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-sm font-semibold">Brief For:</label>
                    <input
                        type="text"
                        className="w-full bg-transparent p-1"
                        value={value}
                        onChange={handleOnChange}
                    />
                    <hr className="border-2 border-gray-800 shadow-lg my-4" />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-semibold">Opposite Counsel:</label>
                    <input
                        type="text"
                        className="w-full bg-transparent p-1"
                    />
                    <hr className="border-2 border-gray-800 shadow-lg my-4" />
                </div>

                <div className="mb-4">
                    <label className="text-sm font-semibold">Books & Citation:</label>
                    <input
                        type="text"
                        className="w-full bg-transparent p-1"
                    />
                    <hr className="border-2 border-gray-800 shadow-lg my-4" />
                </div>
            </div>

            {/* Table for Hearings and Proceedings */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-400 text-xs">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 p-2">Date of Hearing</th>
                            <th className="border border-gray-400 p-2">Proceeding</th>
                            <th className="border border-gray-400 p-2">Date of Hearing</th>
                            <th className="border border-gray-400 p-2">Proceeding</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                            <td className="border border-gray-400 p-2">
                                <input
                                    type="text"
                                    className="w-full bg-transparent p-1"
                                />
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            {/* Client Contact Number */}
            <div className="mt-4">
                <label className="text-sm font-semibold">Client Contact No.:</label>
                <input
                    type="text"
                    className="w-full bg-transparent p-1"
                />
                <hr className="border-2 border-gray-800 shadow-lg my-4" />
            </div>
        </div>
    );
};

export default File;
