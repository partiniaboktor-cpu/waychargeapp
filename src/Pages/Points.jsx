import React, { useState, useEffect } from 'react';
import './Points.css'
import Uppernav from '../Components/Uppernav';
import coin from '../Assets/coins.svg'
import point1 from '../Assets/point1.png'
import point2 from '../Assets/point2.png'
import point3 from '../Assets/point3.png'
import point4 from '../Assets/point4.png'
import mission1 from '../Assets/mission1.png'
import mission2 from '../Assets/mission2.png'
import mission3 from '../Assets/mission3.png'
import mission4 from '../Assets/mission4.png'
import Nav from '../Components/Nav';
import { supabase } from '../Supabase';

const Points = () => {
    const [pageData, setPageData] = useState(null);
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from('Points-app').select('*').order('id', { ascending: true });
            if (!error && data) {
                const pointsRow = data.find(d => d.total_points);
                if (pointsRow) setPageData(pointsRow);
                
                const fetchedMissions = data.filter(d => d.reward_name || d.category || d.points_required).map((d, index) => {
                    const missionImages = [mission1, mission2, mission3, mission4];
                    return {
                        id: d.id,
                        name: d.reward_name || d.category || 'Special Reward',
                        points: d.points_required || '0',
                        image: missionImages[index % 4] || mission1
                    };
                });
                if (fetchedMissions.length > 0) {
                    setMissions(fetchedMissions);
                }
            }
        }
        fetchData();
    }, []);

    const d = pageData || {
        total_points: '5200'
    };

    const displayMissions = missions.length > 0 ? missions : [
        { id: 'm1', name: 'Free charging', points: '2600', image: mission1 },
        { id: 'm2', name: 'Fast charging', points: '1600', image: mission2 },
        { id: 'm3', name: 'Free coffee', points: '300', image: mission3 },
        { id: 'm4', name: '50% on next charging', points: '600', image: mission4 }
    ];

    return (  <>
    
    <Uppernav />
    
    <div className="container21">
      
      <h2 className="title21">REWARDS CLUB</h2>

      {/* Points Card */}
      <div className="points-card21">
        <div className="points-left21">
          <img className="coin21" src={coin} alt="" />
          <p>Your points:</p>
        </div>
        <h3>{d.total_points} points</h3>
      </div>

      {/* Icons Section */}
      <div className="icons21">
        <div className="icon-item21">
          <img src={point1}alt="history" />
          <p>History</p>
        </div>

        <div className="icon-item21">
          <img src={point2} alt="explore" />
          <p>Explore rewards</p>
        </div>

        <div className="icon-item21">
          <img src={point3} alt="rewards" />
          <p>Your rewards</p>
        </div>
      </div>

      {/* Discover Section */}
      <div className="discover21">
        <div className="discover-text21">
          <h2>DISCOVER YOUR TODAYS DEALS</h2>
        </div>
        <img src={point4} alt="deals" />
      </div>

      {/* Missions */}
      <h3 className="missions-title21">MISSIONS</h3>

      <div className="missions-grid21">
        {displayMissions.map((mission) => (
          <div className="mission-card21" key={mission.id}>
            <img src={mission.image} alt={mission.name} />
            <h4>{mission.name}</h4>
            <p>{mission.points} points</p>
          </div>
        ))}
      </div>

<Nav />
    </div>
    
    
    
    
    </>);
}
 
export default Points;