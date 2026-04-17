import React from "react";
import "./NotificationInbox.css";
import bellIcon from "../Assets/notification.svg";
import myimg from '../Assets/myimg.png'
import Uppernav from "../Components/Uppernav";
import Nav from "../Components/Nav";
const AVATAR =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop";
const THUMB =
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=200&h=200&fit=crop";

const NOTIFICATIONS = {
  today: [
    {
      id: "1",
      unread: true,
      name: "Partinia Boktor",
      text: "Liked your recent post",
      time: "2 h ago",
    },
    {
      id: "2",
      unread: true,
      name: "Partinia Boktor",
      text: "Liked your recent post",
      time: "5 h ago",
    },
    {
      id: "3",
      unread: false,
      name: "Partinia Boktor",
      text: "Liked your recent post",
      time: "8 h ago",
    },
  ],
  yesterday: [
    {
      id: "4",
      unread: false,
      name: "Partinia Boktor",
      text: "Liked your recent post",
      time: "Yesterday",
    },
  ],
};

const NotificationInbox = () => {
  const countToday = NOTIFICATIONS.today.length;

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

      <h2 className="ni-section-label">Today</h2>
      {NOTIFICATIONS.today.map((n, i) => (
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

      <h2 className="ni-section-label">Yesterday</h2>
      {NOTIFICATIONS.yesterday.map((n, i) => (
        <div key={n.id}>
          <article
            className="ni-card"
            style={{
              animationDelay: `${(i + NOTIFICATIONS.today.length) * 0.06}s`,
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
      <Nav />
    </div>
  );
};

export default NotificationInbox;
