import React2Pdf from "react2pdf";
import React from "react";

// This is a server-side route handler for PDF generation in Next.js
export default async function handler(req, res) {
  if (req.method === "GET") {
    // Instantiate the React2Pdf object
    const reactToPdf = new React2Pdf();
    
    // Add your React component to render as PDF
    reactToPdf.addPage(
      <h1 style={{ height: "200px", background: "blue" }}>
        Hello world!
      </h1>
    );
    
    // Render the PDF and get the stream
    const pdfStream = await reactToPdf.renderToStream("a4");
    
    // Set the correct content type for a PDF file
    res.setHeader("Content-Type", "application/pdf");
    
    // Pipe the PDF stream to the response
    pdfStream.pipe(res);
    
    // End the response when streaming is complete
    pdfStream.on("end", () => {
      console.log("PDF streaming completed.");
    });
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
