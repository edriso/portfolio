import { useState } from 'react';

const CONTENT_THRESHOLD = 450;

function KudoCard({ kudo }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = kudo.content.length > CONTENT_THRESHOLD;

  return (
    <article className="flex flex-col p-5 rounded-xl bg-surface border border-border transition-all duration-300 hover:shadow-md break-inside-avoid">
      <div className="mb-3 text-primary text-2xl font-display leading-none">
        &ldquo;
      </div>
      <div className="relative mb-2">
        <p
          className={`text-muted text-sm leading-relaxed whitespace-pre-line ${
            isLong && !expanded ? 'line-clamp-4' : ''
          }`}
        >
          {kudo.content}
        </p>
        {isLong && !expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-surface to-transparent pointer-events-none" />
        )}
      </div>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:underline mb-4 self-start cursor-pointer"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <div className="text-xs text-muted text-right">
        {kudo.author
          ? `${kudo.author}${kudo.role ? `, ${kudo.role}` : ''} · ${kudo.date}`
          : kudo.date}
      </div>
    </article>
  );
}

export default KudoCard;
