
interface ExperienceHeaderProps {
  title: string;
}

export const ExperienceHeader = ({ title }: ExperienceHeaderProps) => (
  <div className="max-w-7xl mx-auto w-full mb-12 text-center">
    <h2 className="font-bold text-5xl md:text-6xl text-foreground capitalize text-glow">
      {title}
    </h2>
  </div>
);
