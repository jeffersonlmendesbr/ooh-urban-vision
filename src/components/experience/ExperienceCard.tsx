
import type { ExperienceCardData } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <div 
    className="min-w-[420px] w-[420px] h-[600px] bg-white/10 backdrop-blur-sm flex flex-col justify-between p-8 transition-all duration-500 group hover:shadow-2xl"
    style={{
      boxShadow: `
        0 0 0 1px rgba(255, 255, 255, 0.1),
        0 4px 20px rgba(255, 255, 255, 0.15),
        0 8px 40px rgba(255, 255, 255, 0.1),
        0 16px 60px rgba(255, 255, 255, 0.05)
      `
    }}
  >
    {/* Tag Section */}
    <div className="text-center mb-8">
      <span className="inline-block text-xs tracking-[0.2em] uppercase px-6 py-3 bg-white text-black font-bold">
        {experience.tagType}
      </span>
    </div>

    {/* Logo Section */}
    <div className="flex-1 flex items-center justify-center mb-8">
      <div className="w-[400px] h-[400px] flex items-center justify-center">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo`}
          className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="text-center space-y-4">
      <h3 className="text-2xl font-bold tracking-tight text-white">
        {experience.title}
      </h3>
      <p className="text-white/80 text-sm tracking-wide">
        {experience.period}
      </p>
      <p className="text-sm text-white/90 leading-relaxed">
        {experience.description}
      </p>
    </div>
  </div>
);
