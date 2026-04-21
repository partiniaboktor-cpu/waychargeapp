import React, { useEffect, useState } from "react";
import "./NotificationInbox.css";
import bellIcon from "../Assets/notification.svg";
import myimg from '../Assets/myimg.png'
import Uppernav from "../Components/Uppernav";
import Nav from "../Components/Nav";
import { supabase } from "../Supabase";

const AVATAR =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop";
const THUMB =
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&h=200&fit=crop";

const NotificationInbox = () => {
  const [notifications, setNotifications] = useState({ today: [], yesterday: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data, error } = await supabase
          .from('notification-app')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;

        if (data) {
          const grouped = data.reduce((acc, n) => {
            if (!n.message) return acc; // Skip null messages
            const section = n.section ? n.section.toLowerCase() : 'today';
            if (!acc[section]) acc[section] = [];
            acc[section].push({
              id: n.id,
              unread: n.is_read === 'false' || n.is_read === false,
              name: "Partinia Boktor", // Defaulting as SQL doesn't have name
              text: n.message,
              time: n.time_ago,
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

  if (loading) {
    return (
      <div className="ni-root" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="loader">Loading notifications...</div>
      </div>
    );
  }

  const countToday = notifications.today.length;

  return (
    <div className="ni-root">
      <div className="ni-bg-lines" aria-hidden />
      <Uppernav />

      <div className="ni-title-block">
        <h1 className="ni-page-title">NOTIFICATIONS</h1>
        <p className="ni-summary">
          You have <strong>{countToday} Notifications</strong> today.
        </p>
      </div>

      {notifications.today.length > 0 && (
        <>
          <h2 className="ni-section-label">Today</h2>
          {notifications.today.map((n, i) => (
            <div key={n.id}>
              <article
                className="ni-card"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span
                  className={`ni-unread-dot ${n.unread ? "" : "ni-hidden"}`}
                  aria-hidden
                />
                <div className="ni-card-body">
                  <p className="ni-card-name">{n.name}</p>
                  <p className="ni-card-text">{n.text}</p>
                </div>
                <img className="ni-thumb" src={THUMB} alt="" />
              </article>
              <p className="ni-time">{n.time}</p>
            </div>
          ))}
        </>
      )}

      {notifications.yesterday.length > 0 && (
        <>
          <h2 className="ni-section-label">Yesterday</h2>
          {notifications.yesterday.map((n, i) => (
            <div key={n.id}>
              <article
                className="ni-card"
                style={{
                  animationDelay: `${(i + notifications.today.length) * 0.06}s`,
                }}
              >
                <span
                  className={`ni-unread-dot ${n.unread ? "" : "ni-hidden"}`}
                  aria-hidden
                />
                <div className="ni-card-body">
                  <p className="ni-card-name">{n.name}</p>
                  <p className="ni-card-text">{n.text}</p>
                </div>
                <img className="ni-thumb" src={THUMB} alt="" />
              </article>
              <p className="ni-time">{n.time}</p>
            </div>
          ))}
        </>
      )}
      
      {/* Handle other sections if any */}
      {Object.keys(notifications).map(section => {
        if (section === 'today' || section === 'yesterday') return null;
        if (notifications[section].length === 0) return null;
        return (
          <React.Fragment key={section}>
            <h2 className="ni-section-label" style={{ textTransform: 'capitalize' }}>{section}</h2>
            {notifications[section].map((n, i) => (
              <div key={n.id}>
                <article className="ni-card">
                  <span className={`ni-unread-dot ${n.unread ? "" : "ni-hidden"}`} aria-hidden />
                  <div className="ni-card-body">
                    <p className="ni-card-name">{n.name}</p>
                    <p className="ni-card-text">{n.text}</p>
                  </div>
                  <img className="ni-thumb" src={THUMB} alt="" />
                </article>
                <p className="ni-time">{n.time}</p>
              </div>
            ))}
          </React.Fragment>
        );
      })}

      <Nav />
    </div>
  );
};

export default NotificationInbox;
