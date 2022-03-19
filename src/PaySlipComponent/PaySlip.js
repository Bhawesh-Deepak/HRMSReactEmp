import React from 'react';
import { useState } from 'react';

const Payslip = () => {

    const [pdfDownload, setpdfDownload] = useState("http://africau.edu/images/default/sample.pdf");

    return (
        <div className="content-wrapper" style={{ 'min-height': 870 }} >
            <section className='content'>
                <div className='row'>
                    <div className='col-md-8'>
                        <object data={pdfDownload} type="application/pdf" width="100%" height="600px">
                            <p>Alternative text - include a link <a href={pdfDownload}>to the PDF!</a></p>
                        </object>
                    </div>
                </div>
            </section>

        </div >
    );
}

export default Payslip;
