interface ExperienceHeaderProps {
  title: string;
}

export const ExperienceHeader = ({ title }: ExperienceHeaderProps) => (
  <div className="max-w-7xl mx-auto w-full mb-16">
    <h2 className="font-heading text-5xl text-soft-white lowercase tracking-tight mb-8 leading-tight">
      {title}
    </h2>
    <div className="border-t border-soft-white/30 w-full"></div>
  </div>
);