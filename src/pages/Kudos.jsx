import kudos from '../data/kudos';
import KudoCard from '../components/KudoCard';

function Kudos() {
  const reversed = [...kudos].reverse();
  // Split into two columns for masonry-like layout without column reflow
  const columns = [
    reversed.filter((_, i) => i % 2 === 0),
    reversed.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl md:text-4xl mb-3">Kudos</h1>
        <p className="text-muted max-w-2xl mx-auto">
          Feedback and recognition I&apos;ve received from team leads, PMs, and
          colleagues through{' '}
          <a
            href="https://www.small-improvements.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Small Improvements
          </a>
          ,{' '}
          <a
            href="https://360feedback.scandiweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            360feedback
          </a>
          , and{' '}
          <a
            href="https://crowdbonus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Crowdbonus
          </a>
          .
        </p>
        <a
          href="https://drive.google.com/drive/folders/1xE5Q3hZa2Ibg390MCRJc1Z45yObDNmSi?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-primary hover:underline"
        >
          View full documentation &rarr;
        </a>
      </div>

      <div className="dim-siblings flex flex-col md:flex-row gap-5">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-5">
            {column.map((kudo) => (
              <KudoCard key={kudo.id} kudo={kudo} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Kudos;
