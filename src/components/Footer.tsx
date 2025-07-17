
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { SectionContainer } from './ui/section-container';

const Footer = () => {
  return (
    <SectionContainer id="footer" className="bg-ink-black" fullHeight={true}>
      <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Connect Section */}
        <div className="text-center">
          <div className="mb-12">
            <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
              CONECTE-SE
            </span>
            <div className="w-24 h-px bg-gold-accent mx-auto mb-6"></div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-gold-accent mb-6 leading-none">
            Conecte-se comigo
          </h2>
          
          <p className="text-lg font-editorial text-grey-sophisticated mb-8 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto para discutir projetos, trocar ideias sobre o futuro da mídia OOH 
            ou simplesmente conversar sobre como podemos transformar espaços urbanos em oportunidades.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white-pure/10 border border-gold-accent/20 p-6 hover:bg-white-pure/20 transition-all duration-300 group">
              <Mail className="w-6 h-6 text-gold-accent mx-auto mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="font-heading text-base text-gold-accent mb-2">E-mail</h3>
              <a href="mailto:jeffersonlmendes@gmail.com" className="text-grey-sophisticated hover:text-gold-accent transition-colors font-editorial text-sm">
                jeffersonlmendes@gmail.com
              </a>
            </div>
            
            <div className="bg-white-pure/10 border border-gold-accent/20 p-6 hover:bg-white-pure/20 transition-all duration-300 group">
              <Phone className="w-6 h-6 text-gold-accent mx-auto mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="font-heading text-base text-gold-accent mb-2">Telefone</h3>
              <a href="tel:+5511997941150" className="text-grey-sophisticated hover:text-gold-accent transition-colors font-editorial text-sm">
                +55 11 99794-1150
              </a>
            </div>
            
            <div className="bg-white-pure/10 border border-gold-accent/20 p-6 hover:bg-white-pure/20 transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-gold-accent mx-auto mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="font-heading text-base text-gold-accent mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/jeffersonlmendes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-sophisticated hover:text-gold-accent transition-colors font-editorial text-sm inline-flex items-center gap-1"
                aria-label="Acessar perfil no LinkedIn de Jefferson Mendes"
              >
                Ver Perfil <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl font-display text-gold-accent mb-3">Jefferson Mendes</h3>
            <p className="text-grey-sophisticated font-editorial mb-6 max-w-2xl mx-auto leading-relaxed">
              Especialista em Mídia OOH transformando a comunicação urbana através de estratégias 
              inovadoras baseadas em dados e comportamento.
            </p>
            
            <div className="flex justify-center space-x-8 mb-6">
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
          
          <div className="border-t border-gold-accent/20 pt-6">
            <p className="text-grey-sophisticated font-accent text-sm tracking-wide">
              © {new Date().getFullYear()} Jefferson Mendes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
