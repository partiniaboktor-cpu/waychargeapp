import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NotificationInbox.css";
import Nav from "../Components/Nav";
import { supabase } from "../Supabase";

const NotificationInbox = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({ today: [], yesterday: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data, error } = await supabase
          .from('notification-app')
          .select('*')
          .order('id', { ascending: false });

        if (error) throw error;

        // If no data, we'll use the sample data from the design to show the user
        if (!data || data.length === 0) {
          const sampleData = {
            today: [
              {
                id: 1,
                type: 'complete',
                title: 'Charging Complete',
                time: '2m ago',
                text: 'Your vehicle is fully charged. 48.5 kWh added.',
                detail: 'Station A - Downtown'
              },
              {
                id: 2,
                type: 'payment',
                title: 'Payment Successful',
                time: '15m ago',
                text: '$34.20 charged to •••• 4582'
              },
              {
                id: 3,
                type: 'station',
                title: 'Station Available',
                time: '1h ago',
                text: 'Fast charger now available at Station B (0.3 mi away)'
              }
            ],
            yesterday: [
              {
                id: 4,
                type: 'reservation',
                title: 'Reservation Reminder',
                time: 'Yesterday',
                text: 'Your charging slot at Station C starts in 30 minutes'
              },
              {
                id: 5,
                type: 'offer',
                title: 'Special Offer',
                time: 'Yesterday',
                text: 'Free coffee at nearby café during your next charge!'
              },
              {
                id: 6,
                type: 'started',
                title: 'Charging Started',
                time: 'Yesterday',
                text: 'Charging session started at Station A'
              }
            ]
          };
          setNotifications(sampleData);
        } else {
          // Group database data
          const grouped = data.reduce((acc, n) => {
            const section = n.section ? n.section.toLowerCase() : 'today';
            if (!acc[section]) acc[section] = [];
            
            // Map common keywords to types for icons
            let type = 'started';
            if (n.message.toLowerCase().includes('complete') || n.message.toLowerCase().includes('finish')) type = 'complete';
            else if (n.message.toLowerCase().includes('payment') || n.message.toLowerCase().includes('charged')) type = 'payment';
            else if (n.message.toLowerCase().includes('available')) type = 'station';
            else if (n.message.toLowerCase().includes('reservation')) type = 'reservation';
            else if (n.message.toLowerCase().includes('offer') || n.message.toLowerCase().includes('coffee')) type = 'offer';

            acc[section].push({
              id: n.id,
              title: n.title || 'Notification',
              text: n.message,
              time: n.time_ago,
              type: type
            });
            return acc;
          }, { today: [], yesterday: [] });
          setNotifications(grouped);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'complete':
        return <div className="ni-icon-container green-bg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>;
      case 'payment':
        return <div className="ni-icon-container"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></div>;
      case 'station':
        return <div className="ni-icon-container"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>;
      case 'reservation':
        return <div className="ni-icon-container"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>;
      case 'offer':
        return <div className="ni-icon-container green-bg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>;
      default:
        return <div className="ni-icon-container"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>;
    }
  };

  if (loading) {
    return (
      <div className="ni-loader-container">
        <div className="ni-loader"></div>
      </div>
    );
  }

  return (
    <div className="ni-root">
      <header className="ni-header">
        <button className="ni-back-btn" onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <h1>Notifications</h1>
        <button className="ni-add-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </header>

      {Object.entries(notifications).map(([section, list]) => (
        <div key={section}>
          {list.length > 0 && <h2 className="ni-section-label">{section}</h2>}
          <div className="ni-card-list">
            {list.map((n) => (
              <article className="ni-card" key={n.id}>
                {getIcon(n.type)}
                <div className="ni-card-content">
                  <div className="ni-card-header">
                    <span className="ni-card-title">{n.title}</span>
                    <span className="ni-card-time">{n.time}</span>
                  </div>
                  <p className="ni-card-text">{n.text}</p>
                  {n.detail && (
                    <div className="ni-card-detail">
                      <div className="ni-dot"></div>
                      <span>{n.detail}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      <Nav />
    </div>
  );
};

export default NotificationInbox;
