
import type { ExperienceCardData } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <div 
    className="min-w-[420px] w-[420px] h-[600px] bg-white-pure/10 flex flex-col p-8 transition-all duration-500 group hover-lift"
  >
    {/* Tag Section - Altura fixa */}
    <div className="text-center h-[60px] flex items-center justify-center">
      <span className="inline-block font-accent text-xs tracking-[0.2em] uppercase px-6 py-3 bg-ink-black text-gold-accent group-hover:bg-white-pure group-hover:text-gold-accent transition-all duration-300 font-bold">
        {experience.tagType}
      </span>
    </div>

    {/* Logo Section - Altura fixa */}
    <div className="h-[240px] flex items-center justify-center">
      <div className="w-[200px] h-[200px] flex items-center justify-center p-4 bg-white-pure/20 group-hover:bg-gold-accent/10 transition-colors duration-300 rounded-lg">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo`}
          className="max-w-[180px] max-h-[180px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>

    {/* Title Section - Altura fixa */}
    <div className="h-[70px] flex items-start justify-center text-center">
      <h3 className="font-heading text-2xl font-bold tracking-tight text-ink-black group-hover:text-white-pure transition-colors duration-300">
        {experience.title}
      </h3>
    </div>

    {/* Period Section - Altura fixa */}
    <div className="h-[40px] flex items-start justify-center text-center">
      <p className="text-ink-black text-sm font-accent tracking-wide opacity-80 font-bold">
        {experience.period}
      </p>
    </div>

    {/* Description Section - Altura restante */}
    <div className="flex-1 flex items-start justify-center text-center pt-2">
      <p className="text-sm text-ink-black font-editorial leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 px-2 font-bold">
        {experience.description}
      </p>
    </div>
  </div>
);
