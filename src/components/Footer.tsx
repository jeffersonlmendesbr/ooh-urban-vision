
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';

const Footer = () => {
  return (
    <footer id="footer" className="bg-background/80 border-t border-primary/10 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-12">
          <h3 className="text-sm font-bold tracking-widest uppercase text-primary">
            Conecte-se
          </h3>
          <div className="w-20 h-0.5 mt-2 bg-primary mx-auto" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Jefferson Mendes
        </h2>

        <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
          Estou sempre aberto para discutir projetos, trocar ideias sobre o futuro da mídia OOH
          ou simplesmente conversar sobre como podemos transformar espaços urbanos em oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="p-6 text-center hover:border-primary/50 hover:-translate-y-1">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-foreground mb-2">E-mail</h3>
            <a href="mailto:jeffersonlmendes@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
              jeffersonlmendes@gmail.com
            </a>
          </Card>
          
          <Card className="p-6 text-center hover:border-primary/50 hover:-translate-y-1">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-foreground mb-2">Telefone</h3>
            <a href="tel:+5511997941150" className="text-foreground/80 hover:text-primary transition-colors">
              +55 11 99794-1150
            </a>
          </Card>
          
          <Card className="p-6 text-center hover:border-primary/50 hover:-translate-y-1">
            <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg text-foreground mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/jeffersonlmendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1.5"
            >
              Ver Perfil <ExternalLink className="w-4 h-4" />
            </a>
          </Card>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/jeffersonlmendes/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:jeffersonlmendes@gmail.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">E-mail</a>
            <a href="https://wa.me/5511997941150" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary transition-colors">WhatsApp</a>
            <a href="https://www.oohplanner.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-primary transition-colors">OOH Planner</a>
          </div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Jefferson Mendes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
