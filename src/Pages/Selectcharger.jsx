import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Selectcharger.css'
import Upper from '../Components/Upper';
import logo from '../Assets/logo.svg'
import Button from "../Components/Button";
import Nav from "../Components/Nav";
import { supabase } from "../Supabase";

const Selectcharger = () => {

    const navigate = useNavigate();
    const [selected4, setSelected4] = useState('Type 2');
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('Selectcharger-app').select('*');
            if (!error && data) {
                const titleRow = data.find(d => d.Title);
                const buttonRow = data.find(d => d.Button);
                const options = data.filter(d => d.type).map((d, index) => ({
                    id: `opt${index}`,
                    label: d.type
                }));
                
                setPageData({
                    title: titleRow?.Title?.toUpperCase() || 'SELECT CHARGER CONNECTOR 🔌',
                    subtitle: titleRow?.description || 'Different EVs use different connectors.',
                    label: titleRow?.name || 'Choose option:',
                    footerText: buttonRow?.description || 'The system shows only compatible chargers.',
                    buttonText: buttonRow?.Button || 'Next',
                    options: options.length > 0 ? options : [
                        { id: 'ccs4', label: 'CCS' },
                        { id: 'type24', label: 'Type 2' },
                        { id: 'chademo4', label: 'CHAdeMO' }
                    ]
                });
            }
        }
        fetchData();
    }, []);

    const displayData = pageData || {
        title: 'SELECT CHARGER CONNECTOR 🔌',
        subtitle: 'Different EVs use different connectors.',
        label: 'Choose option:',
        footerText: 'The system shows only compatible chargers.',
        buttonText: 'Next',
        options: [
            { id: 'ccs4', label: 'CCS' },
            { id: 'type24', label: 'Type 2' },
            { id: 'chademo4', label: 'CHAdeMO' }
        ]
    };

    return ( <>
    
<Upper />
<img className='logo' src={logo} alt="logo" />

<div className="container4">
      <div className="card4">
        <h1 className="title4">
          {displayData.title}
        </h1>
        <p className="subtitle4">{displayData.subtitle}</p>

        <div className="selection-group4">
          <p className="label4">{displayData.label}</p>
          
          {displayData.options.map((option4) => (
            <label 
              key={option4.id} 
              className={`option-card4 ${selected4 === option4.label ? 'active4' : ''}`}
            >
              <span className="option-text4">{option4.label}</span>
              <input
                type="radio"
                name="connector4"
                className="radio-input4"
                checked={selected4 === option4.label}
                onChange={() => setSelected4(option4.label)}
              />
              <span className="custom-radio4"></span>
            </label>
          ))}
        </div>

        <p className="footer-text4">
          {displayData.footerText}
        </p>

         <Button word={displayData.buttonText} onSwipeComplete={() => navigate('/Pushlocation')} />
      </div>
    </div>

    <Nav />
    
    </> );
}
 
export default Selectcharger;