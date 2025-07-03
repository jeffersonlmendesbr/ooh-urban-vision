import type { ExperienceCardData } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <div className="min-w-[420px] w-[420px] h-[480px] bg-olive-green text-soft-white border border-soft-white/20 flex flex-col justify-between p-8 transition-all duration-300 hover:border-soft-white/40 group">
    {/* Tag Section */}
    <div className="text-center mb-8">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase border border-soft-white/60 px-6 py-2 text-soft-white/90 group-hover:border-soft-white group-hover:text-soft-white transition-all duration-300">
        {experience.tagType}
      </span>
    </div>

    {/* Logo Section */}
    <div className="flex-1 flex items-center justify-center mb-8">
      <div className="w-40 h-20 flex items-center justify-center">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo`}
          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="text-center">
      <h3 className="font-heading text-xl mb-3 tracking-tight text-soft-white">
        {experience.title}
      </h3>
      <p className="text-soft-white/70 text-sm mb-6 tracking-wide font-medium">
        {experience.period}
      </p>
      <p className="text-sm text-soft-white/85 leading-relaxed line-height-1.6">
        {experience.description}
      </p>
    </div>
  </div>
);