interface ExperienceHeaderProps {
  title: string;
}

export const ExperienceHeader = ({ title }: ExperienceHeaderProps) => (
  <div className="max-w-7xl mx-auto w-full mb-8">
    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black leading-none text-shadow-bold">
      {title}
    </h2>
  </div>
);