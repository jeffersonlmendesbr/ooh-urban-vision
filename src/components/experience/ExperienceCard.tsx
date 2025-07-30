
import type { ExperienceCardData } from '../../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

interface ExperienceCardProps {
  experience: ExperienceCardData;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <Card className="min-w-[400px] w-[400px] h-[580px] flex flex-col hover:border-primary/50 hover:-translate-y-1">
    <CardHeader className="text-center pt-8">
      <div className="mb-4">
        <span className="bg-primary/10 border border-primary/30 text-primary font-semibold text-xs tracking-widest uppercase px-4 py-2 rounded-full">
          {experience.tagType}
        </span>
      </div>
      <div className="w-full h-[180px] flex items-center justify-center my-4">
        <img
          src={experience.logoUrl}
          alt={`${experience.companyName} logo para mídia OOH`}
          loading="lazy"
          className="max-w-[160px] max-h-[160px] object-contain"
        />
      </div>
      <CardTitle className="text-2xl font-bold text-foreground">
        {experience.title}
      </CardTitle>
      <CardDescription className="text-base text-primary font-semibold">
        {experience.period}
      </CardDescription>
    </CardHeader>
    <CardContent className="text-center text-foreground/80 flex-1 flex items-center">
      <p className="text-base leading-relaxed">
        {experience.description}
      </p>
    </CardContent>
  </Card>
);
