
import type { ExperienceCardData } from '../../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <Card className="min-w-[420px] w-[420px] h-[600px] flex flex-col maximalist-glow hover:scale-105 transition-all duration-500 relative overflow-hidden">
    {/* Enhanced background with prismatic effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" />
    
    <CardHeader className="text-center pt-10 relative z-10">
      <div className="mb-6">
        <span className="utilitarian-border bg-primary/15 text-primary font-bold text-sm tracking-[0.2em] uppercase px-6 py-3 rounded-lg shadow-lg">
          {experience.tagType}
        </span>
      </div>
      <div className="w-full h-[200px] flex items-center justify-center my-6 glass-primary rounded-xl p-4">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo para mídia OOH`}
          loading="lazy"
          className="max-w-[180px] max-h-[180px] object-contain filter drop-shadow-lg"
        />
      </div>
      <CardTitle className="text-2xl font-black text-foreground mb-2 tracking-wide">
        {experience.title}
      </CardTitle>
      <CardDescription className="text-lg text-secondary font-bold tracking-wide text-glow-secondary">
        {experience.period}
      </CardDescription>
    </CardHeader>
    <CardContent className="text-center text-foreground/85 flex-1 flex items-center relative z-10">
      <p className="text-lg leading-relaxed font-medium tracking-wide">
        {experience.description}
      </p>
    </CardContent>
  </Card>
);
