import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';
import Button from '../Components/Button';
import Nav from '../Components/Nav';

const Request = () => {
    const navigate = useNavigate();
    
    // State
    const [chargingType, setChargingType] = useState('Fast');
    const [targetCharge, setTargetCharge] = useState(80);

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const PinIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
    const CarIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="13" width="22" height="8" rx="2"></rect><path d="M7 13l3-7h4l3 7"></path><circle cx="5.5" cy="18.5" r="1.5"></circle><circle cx="18.5" cy="18.5" r="1.5"></circle></svg>;
    const BoltIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
    const ClockIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
    const InfoIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    const ChevronIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

    return (
        <div className="container22">
            <header className="header22">
                <button className="backBtn22" onClick={() => navigate(-1)}><BackIcon /></button>
                <h1>Request Charging</h1>
            </header>

            <section className="section22">
                <span className="sectionTitle22">Select Station</span>
                <div className="selectCard22" onClick={() => navigate('/Location')}>
                    <div className="iconBox22 green-bg"><PinIcon /></div>
                    <div className="cardContent22">
                        <span className="cardTitle22">Station A - Downtown</span>
                        <span className="cardSub22 green">0.3 mi away • Available</span>
                    </div>
                    <ChevronIcon />
                </div>
            </section>

            <section className="section22">
                <span className="sectionTitle22">Your Vehicle</span>
                <div className="selectCard22" onClick={() => navigate('/Profile')}>
                    <div className="iconBox22"><CarIcon /></div>
                    <div className="cardContent22">
                        <span className="cardTitle22">Tesla Model 3</span>
                        <span className="cardSub22">Battery: 45%</span>
                    </div>
                    <ChevronIcon />
                </div>
            </section>

            <section className="section22">
                <span className="sectionTitle22">Charging Type</span>
                <div className="typeGrid22">
                    <div 
                        className={`typeCard22 ${chargingType === 'Fast' ? 'active' : ''}`}
                        onClick={() => setChargingType('Fast')}
                    >
                        <BoltIcon />
                        <span className="typeCardTitle22">Fast Charge</span>
                        <span className="typeCardSub22">$0.45/kWh</span>
                    </div>
                    <div 
                        className={`typeCard22 ${chargingType === 'Standard' ? 'active' : ''}`}
                        onClick={() => setChargingType('Standard')}
                    >
                        <BoltIcon />
                        <span className="typeCardTitle22">Standard</span>
                        <span className="typeCardSub22">$0.28/kWh</span>
                    </div>
                </div>
            </section>

            <section className="section22">
                <span className="sectionTitle22">Estimated Duration</span>
                <div className="estimationBox22">
                    <div className="sliderRow22">
                        <span className="sliderLabel22">Target charge level</span>
                        <span className="sliderVal22">{targetCharge}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={targetCharge} 
                        onChange={(e) => setTargetCharge(e.target.value)}
                        className="slider22"
                    />
                    <div className="summaryGrid22">
                        <div className="summaryItem22">
                            <span className="summaryVal22">~45min</span>
                            <span className="summarySub22">Duration</span>
                        </div>
                        <div className="summaryItem22">
                            <span className="summaryVal22 green">~$24.50</span>
                            <span className="summarySub22">Est. Cost</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section22">
                <span className="sectionTitle22">Schedule (Optional)</span>
                <div className="selectCard22">
                    <div className="iconBox22"><ClockIcon /></div>
                    <div className="cardContent22">
                        <span className="cardTitle22">Start charging now</span>
                    </div>
                    <ChevronIcon />
                </div>
            </section>

            <div className="infoBox22">
                <div className="infoIcon22"><InfoIcon /></div>
                <div className="infoContent22">
                    <span className="infoTitle22">Earn 120 reward points</span>
                    <p className="infoText22">Free coffee available at Green Bean Café (0.2 mi)</p>
                </div>
            </div>

            <div className="actions22">
                <Button word='Send Request' onSwipeComplete={() => navigate('/Requestconfirmation')} />
                <button className="draftLink22">Save as Draft</button>
            </div>
            <Nav />
        </div>
    );
}

export default Request;