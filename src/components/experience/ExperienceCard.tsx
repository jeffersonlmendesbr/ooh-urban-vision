import type { ExperienceCardData } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <div className="min-w-[420px] w-[420px] h-[600px] bg-white-pure/10 backdrop-blur-sm text-ink-black shadow-[0_0_15px_rgba(255,255,255,0.4)] flex flex-col justify-between p-8 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] group hover-lift">
    {/* Tag Section */}
    <div className="text-center mb-8">
      <span className="inline-block font-accent text-xs tracking-[0.2em] uppercase border border-gold-accent px-6 py-3 text-gold-accent bg-gold-accent/5 group-hover:bg-gold-accent group-hover:text-ink-black transition-all duration-300">
        {experience.tagType}
      </span>
    </div>

    {/* Logo Section */}
    <div className="flex-1 flex items-center justify-center mb-8">
      <div className="w-40 h-20 flex items-center justify-center p-4 bg-white-pure/10 group-hover:bg-gold-accent/10 transition-colors duration-300">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo`}
          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="text-center">
      <h3 className="font-heading text-2xl mb-4 tracking-tight text-ink-black group-hover:text-gold-accent transition-colors duration-300">
        {experience.title}
      </h3>
      <p className="text-grey-sophisticated text-sm mb-6 font-accent tracking-wide">
        {experience.period}
      </p>
      <p className="text-sm text-ink-black/80 font-editorial leading-relaxed">
        {experience.description}
      </p>
    </div>
  </div>
);