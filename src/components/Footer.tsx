
import { SectionContainer } from './ui/section-container';

const Footer = () => {
  return (
    <SectionContainer id="footer" className="bg-ink-black">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-display text-gold-accent mb-4">Jefferson Mendes</h3>
          <p className="text-grey-sophisticated font-editorial mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialista em Mídia OOH transformando a comunicação urbana através de estratégias 
            inovadoras baseadas em dados e comportamento.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://www.linkedin.com/in/jeffersonlmendes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-editorial hover:text-gold-accent transition-colors font-accent text-sm tracking-wide"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:jeffersonlmendes@gmail.com"
              className="text-cream-editorial hover:text-gold-accent transition-colors font-accent text-sm tracking-wide"
            >
              E-mail
            </a>
            <a 
              href="https://wa.me/5511997941150" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-editorial hover:text-gold-accent transition-colors font-accent text-sm tracking-wide"
            >
              WhatsApp
            </a>
            <a 
              href="https://www.oohplanner.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-editorial hover:text-gold-accent transition-colors font-accent text-sm tracking-wide"
            >
              OOH Planner
            </a>
          </div>
        </div>
        
        <div className="border-t border-gold-accent/20 pt-8">
          <p className="text-grey-sophisticated font-accent text-sm tracking-wide">
            © {new Date().getFullYear()} Jefferson Mendes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
