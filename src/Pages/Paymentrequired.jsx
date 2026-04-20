import React, { useState, useEffect } from 'react';
import './Paymentrequired.css'
import { supabase } from '../Supabase';

const Paymentrequired = () => {
    const [pageData, setPageData] = useState(null);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('Payment-required-app').select('*').order('id', { ascending: true });
            if (!error && data) {
                const headerRow = data.find(d => d.title);
                const infoRows = data.filter(d => d.field && d.id !== 4);
                const amountDueRow = data.find(d => d.id === 4 || d.field === 'Amount due');

                setPageData({
                    title: headerRow?.title || 'Payment Required',
                    description: headerRow?.description || 'You have an outstanding charge that must be paid to continue using the app',
                    sign: headerRow?.sign || 'Access is restricted until payment is completed. Please settle your outstanding balance to continue.',
                    button: headerRow?.button || 'Pay 250.00 LE',
                    amountDueField: amountDueRow?.field || 'Amount due',
                    amountDueAnswer: amountDueRow?.answer || '250.00 LE'
                });
                
                if (infoRows.length > 0) {
                    setRows(infoRows);
                } else {
                    setRows([
                        { id: 1, field: 'Last charging session', answer: 'April 18, 2026' },
                        { id: 2, field: 'Duration', answer: '2h 34m' },
                        { id: 3, field: 'Energy consumed', answer: '45.8 kWh' }
                    ]);
                }
            }
        }
        fetchData();
    }, []);

    const displayData = pageData || {
        title: 'Payment Required',
        description: 'You have an outstanding charge that must be paid to continue using the app',
        sign: 'Access is restricted until payment is completed. Please settle your outstanding balance to continue.',
        button: 'Pay 250.00 LE',
        amountDueField: 'Amount due',
        amountDueAnswer: '250.00 LE'
    };
    
    const displayRows = rows.length > 0 ? rows : [
        { id: 'def1', field: 'Last charging session', answer: 'April 18, 2026' },
        { id: 'def2', field: 'Duration', answer: '2h 34m' },
        { id: 'def3', field: 'Energy consumed', answer: '45.8 kWh' }
    ];

    return ( <>
    
    <div className="container26">

      {/* Icon Section */}
      <div className="iconBox26">
        <div className="iconCircle26">
          <span className="iconExclamation26">!</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="title26">{displayData.title}</h2>

      {/* Description */}
      <p className="desc26">
        {displayData.description}
      </p>

      {/* Info Card */}
      <div className="card26">

        {displayRows.map(row => (
            <div className="row26" key={row.id}>
              <span className="label26">{row.field}</span>
              <span className="value26">{row.answer}</span>
            </div>
        ))}

        <hr className="line26" />

        <div className="totalRow26">
          <span className="totalLabel26">{displayData.amountDueField}</span>
          <span className="totalValue26">{displayData.amountDueAnswer}</span>
        </div>
      </div>

      {/* Warning Box */}
      <div className="warningBox26">
        <span className="warningIcon26">!</span>
        <p>
          {displayData.sign}
        </p>
      </div>

      {/* Button */}
      <button className="payBtn26">{displayData.button}</button>

      {/* Support */}
      <p className="support26">Contact Support</p>

    </div>
    
    </> );
}
 
export default Paymentrequired;