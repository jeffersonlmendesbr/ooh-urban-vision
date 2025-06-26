
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-dark-charcoal text-soft-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-heading mb-8">Conecte-se comigo</h2>
        <p className="text-xl mb-12 leading-relaxed">
          Estou sempre aberto para discutir projetos, trocar ideias sobre o futuro da mídia OOH 
          ou simplesmente conversar sobre como podemos transformar espaços urbanos em oportunidades.
        </p>
        <div className="space-y-6 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <Mail className="w-6 h-6 text-olive-green" aria-hidden="true" />
            <a href="mailto:jeffersonlmendes@gmail.com" className="text-lg hover:text-olive-green transition-colors">
              jeffersonlmendes@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Phone className="w-6 h-6 text-olive-green" aria-hidden="true" />
            <a href="tel:+5511997941150" className="text-lg hover:text-olive-green transition-colors">
              +55 11 99794-1150
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Linkedin className="w-6 h-6 text-olive-green" aria-hidden="true" />
            <a
              href="https://linkedin.com/in/jefferson-mendes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-olive-green transition-colors"
              aria-label="Acessar perfil no LinkedIn de Jefferson Mendes"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
