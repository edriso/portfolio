import kudos from '../data/kudos';
import KudoCard from '../components/KudoCard';

function Kudos() {
  return (
    <section>
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl md:text-4xl mb-3">Kudos</h1>
        <p className="text-(--color-font-light) max-w-2xl mx-auto">
          During my time at Scandiweb, I had the chance to use two wonderful
          apps. One is{' '}
          <a
            href="https://www.small-improvements.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-active) hover:underline"
          >
            Small Improvements
          </a>
          , a platform where team leads and colleagues provide valuable
          feedback, and the other is Crowdbonus, which allowed employees to
          share &euro;50 as a token of appreciation (paused as of July 2025).
          Below are some of the feedback and recognition I received through
          these platforms.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1xE5Q3hZa2Ibg390MCRJc1Z45yObDNmSi?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-(--color-active) hover:underline"
        >
          View full documentation &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {kudos.map((kudo) => (
          <KudoCard key={kudo.id} kudo={kudo} />
        ))}
      </div>
    </section>
  );
}

export default Kudos;
