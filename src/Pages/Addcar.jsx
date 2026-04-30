import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addcar.css';
import Button from '../Components/Button';

const Addcar = () => {
    const navigate = useNavigate();
    
    // State for selections
    const [connector, setConnector] = useState('CCS');
    const [power, setPower] = useState('150 kW');
    const [speed, setSpeed] = useState('Fast');
    const [alertThreshold, setAlertThreshold] = useState(20);

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
    const CardIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line><line x1="7" y1="15" x2="7.01" y2="15"></line><line x1="11" y1="15" x2="11.01" y2="15"></line></svg>;
    const BoltIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
    const InfoIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;

    return (
        <div className="container3">
            <header className="header3">
                <button className="backBtn3" onClick={() => navigate(-1)}><BackIcon /></button>
                <h1>Add Vehicle</h1>
            </header>

            <div className="stepper3">
                <div className="step3">
                    <div className="stepCircle3 completed"><CheckIcon /></div>
                    <span className="stepLabel3 active">Create Account</span>
                </div>
                <div className="stepLine3 active"></div>
                <div className="step3">
                    <div className="stepCircle3 active">2</div>
                    <span className="stepLabel3 active">Add Car</span>
                </div>
                <div className="stepLine3"></div>
                <div className="step3">
                    <div className="stepCircle3">3</div>
                    <span className="stepLabel3">Confirm</span>
                </div>
            </div>

            <section className="section3">
                <span className="sectionTitle3">Connector Type</span>
                <div className="cardGrid3">
                    <div 
                        className={`card3 ${connector === 'CCS' ? 'active' : ''}`}
                        onClick={() => setConnector('CCS')}
                    >
                        <div className="cardIconBox3"><CardIcon /></div>
                        <span className="cardLabel3">CCS</span>
                    </div>
                    <div 
                        className={`card3 ${connector === 'CHAdeMO' ? 'active' : ''}`}
                        onClick={() => setConnector('CHAdeMO')}
                    >
                        <div className="cardIconBox3"><CardIcon /></div>
                        <span className="cardLabel3">CHAdeMO</span>
                    </div>
                </div>
            </section>

            <section className="section3">
                <span className="sectionTitle3">Battery Capacity</span>
                <div className="inputGroup3">
                    <input type="number" className="inputValue3" defaultValue="75" />
                    <span className="inputUnit3">kWh</span>
                </div>
            </section>

            <section className="section3">
                <span className="sectionTitle3">Max Charging Power</span>
                <div className="threeGrid3">
                    <div 
                        className={`smallCard3 ${power === '50 kW' ? 'active' : ''}`}
                        onClick={() => setPower('50 kW')}
                    >
                        <span className="smallCardVal3">50 kW</span>
                        <span className="smallCardSub3">Level 2</span>
                    </div>
                    <div 
                        className={`smallCard3 ${power === '150 kW' ? 'active' : ''}`}
                        onClick={() => setPower('150 kW')}
                    >
                        <span className="smallCardVal3">150 kW</span>
                        <span className="smallCardSub3">DC Fast</span>
                    </div>
                    <div 
                        className={`smallCard3 ${power === '250 kW' ? 'active' : ''}`}
                        onClick={() => setPower('250 kW')}
                    >
                        <span className="smallCardVal3">250 kW</span>
                        <span className="smallCardSub3">Superfast</span>
                    </div>
                </div>
            </section>

            <section className="section3">
                <span className="sectionTitle3">Typical Range (Full Charge)</span>
                <div className="inputGroup3">
                    <input type="number" className="inputValue3" defaultValue="358" />
                    <span className="inputUnit3">miles</span>
                </div>
            </section>

            <section className="section3">
                <span className="sectionTitle3">Default Charging Speed</span>
                <div className="selectionRow3">
                    <div 
                        className={`selectionCard3 ${speed === 'Fast' ? 'active' : ''}`}
                        onClick={() => setSpeed('Fast')}
                    >
                        <div className="selectionCardIcon3"><BoltIcon /></div>
                        <div className="selectionCardContent3">
                            <span className="selectionCardTitle3">Fast Charging</span>
                            <span className="selectionCardSub3">Higher cost, quicker charge</span>
                        </div>
                        <div className="radioCircle3"></div>
                    </div>
                    <div 
                        className={`selectionCard3 ${speed === 'Standard' ? 'active' : ''}`}
                        onClick={() => setSpeed('Standard')}
                    >
                        <div className="selectionCardIcon3"><BoltIcon /></div>
                        <div className="selectionCardContent3">
                            <span className="selectionCardTitle3">Standard Charging</span>
                            <span className="selectionCardSub3">Lower cost, slower charge</span>
                        </div>
                        <div className="radioCircle3"></div>
                    </div>
                </div>
            </section>

            <section className="section3">
                <span className="sectionTitle3">Low Battery Alert Threshold</span>
                <div className="sliderBox3">
                    <div className="sliderHeader3">
                        <span className="sliderLabel3">Alert when battery drops below</span>
                        <span className="sliderValue3">{alertThreshold}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={alertThreshold} 
                        onChange={(e) => setAlertThreshold(e.target.value)}
                        className="slider3"
                    />
                </div>
            </section>

            <div className="infoBox3">
                <div className="infoIcon3"><InfoIcon /></div>
                <p className="infoText3">
                    We'll use these details to find the best charging stations and estimate costs for your vehicle.
                </p>
            </div>

            <div className="footerAction3">
                <Button word='Continue' onSwipeComplete={() => navigate('/Selectcharger')} />
            </div>
        </div>
    );
}

export default Addcar;