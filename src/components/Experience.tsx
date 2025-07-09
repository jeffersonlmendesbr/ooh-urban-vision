
import { ExperienceCard } from './experience/ExperienceCard';
import { ScrollableCards } from './experience/ScrollableCards';
import { CompetencesTicker } from './experience/CompetencesTicker';
import { ExperienceHeader } from './experience/ExperienceHeader';
import { ExperienceSection } from './experience/ExperienceSection';
import { experiencesData, competenceTags } from '../data/experience';

const Experience = () => {
  return (
    <ExperienceSection>
      <ExperienceHeader title="a jornada até aqui" />
      
      <ScrollableCards>
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </ScrollableCards>
    </ExperienceSection>
  );
};

export default Experience;
