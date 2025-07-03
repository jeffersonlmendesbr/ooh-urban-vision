
import { ExperienceCard } from './experience/ExperienceCard';
import { ScrollableCards } from './experience/ScrollableCards';
import { CompetencesTicker } from './experience/CompetencesTicker';
import { experiencesData, competenceTags } from '../data/experience';

const Experience = () => {
  return (
    <section
      id="experience"
      className="h-screen bg-olive-green flex flex-col justify-center py-16 px-8"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto w-full mb-16">
        <h2 className="font-heading text-5xl text-soft-white lowercase tracking-tight mb-8 leading-tight">
          a jornada até aqui
        </h2>
        <div className="border-t border-soft-white/30 w-full"></div>
      </div>

      {/* Cards Section */}
      <ScrollableCards>
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </ScrollableCards>

      {/* Competências Ticker */}
      <CompetencesTicker tags={competenceTags} />
    </section>
  );
};

export default Experience;
