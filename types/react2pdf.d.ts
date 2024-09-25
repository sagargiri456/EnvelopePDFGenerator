// types/react2pdf.d.ts
declare module 'react2pdf' {
    import React from 'react';
  
    interface React2PdfRenderProps {
      toPdf: () => void;
    }
  
    interface React2PdfProps {
      targetRef: React.RefObject<HTMLElement>;
      filename?: string;
      options?: {
        orientation?: 'portrait' | 'landscape';
        unit?: 'pt' | 'mm' | 'cm' | 'in';
        format?: string | number[];
        [key: string]: any; // Allow additional options if necessary
      };
      x?: number;
      y?: number;
      scale?: number;
      children: (props: React2PdfRenderProps) => React.ReactNode;
    }
  
    const React2Pdf: React.FC<React2PdfProps>;
  
    export default React2Pdf;
  }
  