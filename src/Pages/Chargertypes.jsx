import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Chargertypes.css';
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Chargertypes = () => {
    const navigate = useNavigate();
    const [chargers, setChargers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Icons
    const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
    const InfoIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
    const BoltIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>;
    const ClockIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

    useEffect(() => {
        async function fetchConnectors() {
            try {
                const { data, error } = await supabase
                    .from('CONNECTORS')
                    .select('*')
                    .order('id', { ascending: true });
                
                if (error) throw error;
                if (data) {
                    const mapped = data.map(item => ({
                        id: item.id,
                        title: `${item.Type} - AC ${item.Speed}`,
                        desc: item.Description,
                        power: item.Power,
                        speed: item.Speed === 'Slow' ? '3-5 mi/hr' : (item.Speed === 'Fast' ? '25-35 mi/hr' : '180-250 mi/hr'),
                        timeLabel: item.Speed.includes('Fast') ? '80% charge time' : 'Full charge time',
                        timeVal: item.Speed === 'Slow' ? '40-50 hours' : (item.Speed === 'Fast' ? '4-8 hours' : '30-45 min'),
                        bestFor: `Best for: ${item.Description.toLowerCase()}`,
                        btnLabel: 'View Stations',
                        isPopular: item.Type === 'Level 2'
                    }));
                    setChargers(mapped);
                }
            } catch (err) {
                console.error('Error fetching connectors:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchConnectors();
    }, []);

    const displayChargers = chargers.length > 0 ? chargers : [
        {
            id: 1,
            title: "Level 1 - AC Slow",
            desc: "Standard household outlet",
            power: "1.4 kW",
            speed: "3-5 mi/hr",
            timeLabel: "Full charge time",
            timeVal: "40-50 hours",
            bestFor: "Best for: Overnight home charging",
            btnLabel: "View Stations",
            isPopular: false
        },
        {
            id: 2,
            title: "Level 2 - AC Fast",
            desc: "Public charging stations",
            power: "7-22 kW",
            speed: "25-35 mi/hr",
            timeLabel: "Full charge time",
            timeVal: "4-8 hours",
            bestFor: "Best for: Daily use, shopping trips",
            btnLabel: "Find Nearby",
            isPopular: true
        },
    ];

    return (
        <div className="container12">
            <header className="header12">
                <button className="backBtn12" onClick={() => navigate(-1)}><BackIcon /></button>
                <h1>Charger Types</h1>
                <button className="infoBtn12"><InfoIcon /></button>
            </header>

            <span className="intro12">
                Choose the right charger type for your vehicle and needs
            </span>

            <div className="chargerList12">
                {displayChargers.map((c) => (
                    <article key={c.id} className={`chargerCard12 ${c.isPopular ? 'popular12' : ''}`}>
                        {c.isPopular && <div className="popularBadge12">Most Popular</div>}
                        
                        <div className="cardHeader12">
                            <div className="cardIconBox12"><BoltIcon /></div>
                            <div className="cardTitleInfo12">
                                <span className="cardTitle12">{c.title}</span>
                                <span className="cardSub12">{c.desc}</span>
                            </div>
                        </div>

                        <div className="specGrid12">
                            <div className="specBox12">
                                <span className="specLabel12">Power</span>
                                <span className="specVal12">{c.power}</span>
                            </div>
                            <div className="specBox12">
                                <span className="specLabel12">Speed</span>
                                <span className="specVal12">{c.speed}</span>
                            </div>
                        </div>

                        <div className="timeBox12">
                            <span className="timeLabel12">{c.timeLabel}</span>
                            <span className="timeVal12">{c.timeVal}</span>
                        </div>

                        <div className="recRow12">
                            <div className="recIcon12"><ClockIcon /></div>
                            <span>{c.bestFor}</span>
                        </div>

                        <button 
                            className={`cardBtn12 ${c.isPopular ? 'btnSolid12' : 'btnOutline12'}`}
                            onClick={() => navigate('/Charging')}
                        >
                            {c.btnLabel}
                        </button>
                    </article>
                ))}
            </div>

            <Nav />
        </div>
    );
}

export default Chargertypes;