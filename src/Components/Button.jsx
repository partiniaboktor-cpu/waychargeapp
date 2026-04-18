import React, { useRef, useState } from "react";
import "./Button.css";

const THUMB = 55;
const PAD = 5;

const Button = ({ word, onSwipeComplete, onClick }) => {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);
  const dragRef = useRef({ active: false, startX: 0, startOffset: 0 });
  const completedRef = useRef(false);

  const swipeMode = typeof onSwipeComplete === "function";

  const maxOffset = () => {
    const el = trackRef.current;
    if (!el) return 0;
    return Math.max(0, el.offsetWidth - THUMB - PAD * 2);
  };

  const setOffsetBoth = (v) => {
    const m = maxOffset();
    const clamped = Math.min(Math.max(0, v), m);
    offsetRef.current = clamped;
    setOffset(clamped);
    return clamped;
  };

  const finishSwipe = () => {
    if (completedRef.current) return;
    const m = maxOffset();
    if (m <= 0) return;
    if (offsetRef.current >= m * 0.88) {
      completedRef.current = true;
      setOffsetBoth(m);
      onSwipeComplete();
    } else {
      setOffsetBoth(0);
    }
  };

  const onThumbPointerDown = (e) => {
    if (completedRef.current) return;
    e.preventDefault();
    (e.currentTarget).setPointerCapture(e.pointerId);
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startOffset: offsetRef.current,
    };
  };

  const onThumbPointerMove = (e) => {
    if (!dragRef.current.active || completedRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    setOffsetBoth(dragRef.current.startOffset + dx);
  };

  const onThumbPointerUp = (e) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    try {
      (e.currentTarget).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    finishSwipe();
  };

  if (!swipeMode) {
    return (
      <button type="button" className="allow-button5" onClick={onClick}>
        <div className="bolt-icon-wrapper5">
          <span className="bolt5">⚡</span>
        </div>
        <span className="button-text5">{word}</span>
      </button>
    );
  }

  return (
    <div
      ref={trackRef}
      className="allow-button5 allow-button5--swipe"
      role="presentation"
      aria-label={`${word}: drag the handle to the right to confirm`}
    >
      <span className="button-text5 button-text5--swipe">{word}</span>
      <div
        className="bolt-icon-wrapper5 bolt-icon-wrapper5--swipe"
        style={{ transform: `translateX(${offset}px)` }}
        onPointerDown={onThumbPointerDown}
        onPointerMove={onThumbPointerMove}
        onPointerUp={onThumbPointerUp}
        onPointerCancel={onThumbPointerUp}
      >
        <span className="bolt5">⚡</span>
      </div>
    </div>
  );
};

export default Button;
