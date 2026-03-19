function KudoCard({ kudo }) {
  return (
    <article className="flex flex-col p-5 rounded-xl bg-surface border border-border transition-all duration-300 hover:shadow-md">
      <div className="mb-3 text-primary text-2xl font-display leading-none">
        &ldquo;
      </div>
      <p className="flex-1 text-muted text-sm leading-relaxed whitespace-pre-line mb-4">
        {kudo.content}
      </p>
      <div className="text-xs text-muted text-right">
        {kudo.author ? `${kudo.author} · ${kudo.date}` : kudo.date}
      </div>
    </article>
  );
}

export default KudoCard;
