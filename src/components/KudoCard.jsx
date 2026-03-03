function KudoCard({ kudo }) {
  return (
    <article className="p-5 rounded-xl bg-(--color-bg-card) border border-(--color-border) transition-all duration-300 hover:shadow-md">
      <div className="mb-3 text-(--color-active) text-2xl font-display leading-none">
        &ldquo;
      </div>
      <p className="text-(--color-font-light) text-sm leading-relaxed whitespace-pre-line mb-4">
        {kudo.content}
      </p>
      <div className="text-xs text-(--color-font-light) text-right">
        {kudo.date}
      </div>
    </article>
  );
}

export default KudoCard;
