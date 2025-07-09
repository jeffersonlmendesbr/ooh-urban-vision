interface ExperienceHeaderProps {
  title: string;
}

export const ExperienceHeader = ({ title }: ExperienceHeaderProps) => (
  <div className="max-w-7xl mx-auto w-full mb-6">
    {/* Section Label */}
    <div className="mb-8">
      <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
        EXPERIÊNCIA
      </span>
      <div className="w-24 h-px bg-gold-accent"></div>
    </div>
    
    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white-pure mb-4 leading-none text-shadow-bold">
      {title}
    </h2>
  </div>
);