interface CompetencesTickerProps {
  tags: string[];
}

export const CompetencesTicker = ({ tags }: CompetencesTickerProps) => (
  <div className="mt-16 max-w-7xl mx-auto w-full">
    <div className="border-t border-soft-white/30 pt-8">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker-scroll">
          {/* First set of tags */}
          {tags.map((tag, index) => (
            <span 
              key={`first-${index}`}
              className="text-lg font-medium text-soft-white/80 whitespace-nowrap mx-12 tracking-wide"
            >
              {tag}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {tags.map((tag, index) => (
            <span 
              key={`second-${index}`}
              className="text-lg font-medium text-soft-white/80 whitespace-nowrap mx-12 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);