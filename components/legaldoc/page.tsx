import React from 'react'

const LegalDoc = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto bg-white border border-gray-400">
            <h1 className="text-center text-2xl font-bold mb-4">वकालत नामा</h1>
            <p className="text-center text-sm mb-2">
                (अधिनियम अधिकारिता, 1961 में अन्तर्गत नियमानुसार नियम 4 (1))
            </p>

            <div className="text-center font-bold text-lg mb-6">समक्ष माननीय</div>

            <div className="mb-6">
                <div className="w-1/2 p-2">
                    <p>प्रकरण / कार्यवाही क्रमांक:</p>
                    <p>_________________________</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-full border p-2">
                        <p>वही / अपीलार्थी / अभियोजनी / आवेदक</p>
                        <div className="mt-4">
                            <p>Hello World</p> <hr className="border-1 border-gray-800 shadow-lg my-4" />
                            <p>Hello world</p> <hr className="border-1 border-gray-800 shadow-lg my-4" />
                        </div>
                    </div>
                </div>

                <div className="p-2 mt-4">
                    <p className='text-center'>विरुद्ध:</p>
                </div>

                <div className="border p-2 mt-4">
                    <p>प्रतिवादी / प्रत्यर्थी / अनावेदक / अभियुक्त</p>
                    <div className="mt-4">
                        <p>Hello World</p> <hr className="border-1 border-gray-800 shadow-lg my-4" />
                        <p>Hello world</p> <hr className="border-1 border-gray-800 shadow-lg my-4" />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <p>
                    मैं / हम उपरोक्त पक्षकार द्वारा, मेरा / हमारा अधिवक्ता / अभिकर्ता के रूप में
                    श्री ____________________ अधिवक्ता नियुक्त करता / करते हैं, मेरे / हमारे
                    पैरोकार, इस मामले में प्रस्तुत याचिका, बहस, बयान, आवेदन, शपथ-पत्र,
                    परस्पर विनिमय आदि प्रस्तुत करेंगे। इस प्रकार मेरे/हमारे अधिवक्ता किसी भी
                    प्रकार की सुनवाई में भाग लेंगे।
                </p>
            </div>

            <div className="border p-2 mt-4">
                <p className="font-bold">वकालतनामा निष्पादित करने वाले प्रयोजक पक्षकार का विवरण</p>
                <table className="table-auto w-full mt-2 text-left">
                    <thead>
                        <tr className="border">
                            <th className="px-2">नाम एवं पिता /<br /> पति का नाम</th>
                            <th className="px-2">पंजीकृत पता</th>
                            <th className="px-2">ई-मेल पता <br />(यदि हो तो)</th>
                            <th className="px-2">टेलीफोन नं. <br />(यदि हो तो)</th>
                            <th className="px-2">प्रकरण में <br />हस्ताक्षर</th>
                            <th className="px-2">पूर्ण हस्ताक्षर <br />अमूल चिन्ह</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="border p-2 mt-4">
                <p className="font-bold">वकालतनामा स्वीकार करने वाले प्रयोजक अधिवक्ता का विवरण</p>
                <table className="table-auto w-full mt-2 text-left">
                    <thead>
                        <tr className="border">
                            <th className="px-2">पूर्ण नाम तथा नामांकन क्रमांक</th>
                            <th className="px-2">अधिवक्ता का पता</th>
                            <th className="px-2">ई-मेल पता (यदि हो तो)</th>
                            <th className="px-2">टेलीफोन नंबर (यदि हो तो)</th>
                            <th className="px-2">पूर्ण हस्ताक्षर</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1">शिव पूजन सिंह, पंजीकृत न. 2127/08</td>
                            <td className="px-2 py-1">10, कृष्णा कॉम्प्लेक्स, बीमा कुंज, कोलार रोड, भोपाल</td>
                            <td className="px-2 py-1">adv_shivpoojansingh@yahoo.com</td>
                            <td className="px-2 py-1">9826092582</td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border">
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1"></td>
                            <td className="px-2 py-1">__________________</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LegalDoc