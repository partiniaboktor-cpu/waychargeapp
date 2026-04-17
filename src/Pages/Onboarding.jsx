import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const BODY =
  "WayCharge makes charging your electric vehicle simple and convenient.";

const IllustrationPlug = () => (
  <svg
    className="onb-illustration"
    viewBox="0 0 280 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <ellipse cx="140" cy="210" rx="90" ry="14" fill="rgba(0,0,0,0.06)" />
    <path
      d="M120 20 L160 20 L168 48 L188 52 L188 120 L168 128 L160 200 L120 200 L112 128 L92 120 L92 52 L112 48 Z"
      fill="#2a2a2a"
    />
    <path
      d="M118 118 L162 118 L158 132 L122 132 Z"
      fill="#8cc63f"
    />
    <rect x="108" y="128" width="64" height="8" rx="2" fill="#8cc63f" />
    <circle cx="140" cy="78" r="22" fill="#3a3a3a" stroke="#8cc63f" strokeWidth="6" />
    <path d="M140 56 L140 20" stroke="#444" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

const IllustrationStations = () => (
  <svg
    className="onb-illustration"
    viewBox="0 0 280 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <ellipse cx="140" cy="210" rx="100" ry="14" fill="rgba(0,0,0,0.06)" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${38 + i * 56}, 40)`}>
        <rect x="0" y="20" width="36" height="120" rx="6" fill="#c8c8c8" />
        <rect x="8" y="0" width="20" height="28" rx="4" fill="#a8a8a8" />
        <path
          d="M18 140 L18 175"
          stroke="#333"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="18" cy="182" r="10" fill="#2a5a8a" stroke="#8cc63f" strokeWidth="3" />
      </g>
    ))}
  </svg>
);

const IllustrationCar = () => (
  <svg
    className="onb-illustration"
    viewBox="0 0 280 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <ellipse cx="140" cy="200" rx="110" ry="16" fill="rgba(0,0,0,0.06)" />
    <g transform="translate(40, 95)">
      <path
        d="M20 60 Q20 30 55 28 L155 28 Q190 30 190 60 L195 75 L195 88 L15 88 L15 75 Z"
        fill="#8cc63f"
      />
      <rect x="35" y="38" width="135" height="28" rx="4" fill="#6fb02e" opacity="0.5" />
      <circle cx="55" cy="88" r="16" fill="#222" />
      <circle cx="155" cy="88" r="16" fill="#222" />
    </g>
    <g transform="translate(15, 115)">
      <ellipse cx="22" cy="35" rx="18" ry="22" fill="#c68642" />
      <path d="M8 48 L36 48 L40 62 L4 62 Z" fill="#005a9c" />
      <rect x="2" y="8" width="44" height="22" rx="3" fill="#4caf50" transform="rotate(-8 24 19)" />
      <rect x="6" y="12" width="36" height="14" rx="2" fill="#81c784" transform="rotate(-8 24 19)" />
    </g>
    <g transform="translate(195, 108)">
      <ellipse cx="22" cy="35" rx="18" ry="22" fill="#e8c4a8" />
      <path d="M8 48 L36 48 L40 62 L4 62 Z" fill="#005a9c" />
      <path
        d="M28 12 L42 18 L44 32 L38 44 L24 40 L20 24 Z"
        fill="#2a2a2a"
      />
      <rect x="32" y="20" width="8" height="18" rx="2" fill="#1565c0" />
    </g>
  </svg>
);

const SLIDES = [
  { title: "Charging solution", art: IllustrationPlug },
  { title: "Hassle-free parking", art: IllustrationStations },
  { title: "Auto payments", art: IllustrationCar },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const touchRef = useRef(null);

  const goLogin = () => navigate("/Login");

  const next = useCallback(() => {
    setStep((s) => Math.min(s + 1, SLIDES.length - 1));
  }, []);

  const prev = useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const onTouchStart = (e) => {
    touchRef.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) < 48) return;
    if (dx < 0) next();
    else prev();
  };

  const Art = SLIDES[step].art;

  return (
    <div className="onb-root">
      <header className="onb-header">
        <button
          type="button"
          className="onb-back"
          onClick={() => (step === 0 ? navigate("/") : prev())}
        >
          ← Back
        </button>
        <button type="button" className="onb-skip" onClick={goLogin}>
          Skip
        </button>
      </header>

      <div
        className="onb-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        key={step}
      >
        <Art />
      </div>

      <div className="onb-bottom">
        <h1 className="onb-title">{SLIDES[step].title}</h1>
        <p className="onb-desc">{BODY}</p>

        {step < SLIDES.length - 1 ? (
          <div className="onb-actions">
            <button type="button" className="onb-primary" onClick={next}>
              Continue
            </button>
          </div>
        ) : (
          <div className="onb-actions">
            <button type="button" className="onb-primary" onClick={goLogin}>
              Get started
            </button>
          </div>
        )}

        <div className="onb-dots" role="tablist" aria-label="Onboarding steps">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === step}
              className={`onb-dot ${i === step ? "onb-dot-active" : ""}`}
              onClick={() => setStep(i)}
              aria-label={`Step ${i + 1}`}
            />
          ))}
        </div>
        <p className="onb-swipe-hint">Swipe left or right on the image to change steps</p>
      </div>
    </div>
  );
};

export default Onboarding;
