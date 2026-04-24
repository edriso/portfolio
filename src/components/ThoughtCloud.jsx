import { useState, useEffect } from 'react';

const THOUGHT_MESSAGES = [
  'Looking for a dev?',
  'Yosh! Let’s build.',
  'Got a project?',
  'Let’s ship it!',
];

const APPEAR_DELAY_MS = 1200;
const ROTATE_INTERVAL_MS = 3800;

function ThoughtCloud() {
  const [visible, setVisible] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), APPEAR_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setMsgIdx((n) => (n + 1) % THOUGHT_MESSAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-center transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="cloud-float relative w-52 md:w-60">
        <svg
          viewBox="0 0 240 110"
          className="block w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 95 C8 95 6 75 22 70 C12 52 26 40 48 44 C50 20 78 16 92 32 C105 15 140 14 155 30 C170 14 200 22 202 46 C225 46 232 66 220 76 C238 82 234 96 216 95 C150 100 90 100 30 95 Z"
            className="fill-surface stroke-border"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center px-6 pt-3 pb-2">
          <p
            key={msgIdx}
            className="animate-fade-in text-xs md:text-sm text-foreground text-center leading-tight"
          >
            {THOUGHT_MESSAGES[msgIdx]}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center mt-1">
        <div className="w-2 h-2 rounded-full bg-surface border border-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-surface border border-border" />
        <div className="w-1 h-1 rounded-full bg-surface border border-border" />
      </div>
    </div>
  );
}

export default ThoughtCloud;
