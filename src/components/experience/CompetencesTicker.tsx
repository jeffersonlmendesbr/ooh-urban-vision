interface CompetencesTickerProps {
  tags: string[];
}

export const CompetencesTicker = ({ tags }: CompetencesTickerProps) => (
  <div className="mt-20 max-w-7xl mx-auto w-full">
    <div className="border-t border-gold-accent/40 pt-12">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker-scroll">
          {/* First set of tags */}
          {tags.map((tag, index) => (
            <span 
              key={`first-${index}`}
              className="text-lg font-accent text-gold-accent whitespace-nowrap mx-12 tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {tags.map((tag, index) => (
            <span 
              key={`second-${index}`}
              className="text-lg font-accent text-gold-accent whitespace-nowrap mx-12 tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);