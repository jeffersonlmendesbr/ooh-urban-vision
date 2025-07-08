
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24 bg-cream-editorial text-ink-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-gold-accent font-accent text-sm tracking-widest mb-4">
            CONECTE-SE
          </span>
          <div className="w-24 h-px bg-gold-accent mx-auto"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink-black mb-12 leading-none">
          Conecte-se comigo
        </h2>
        
        <p className="text-xl md:text-2xl font-editorial text-slate-elegant mb-16 max-w-4xl mx-auto leading-relaxed">
          Estou sempre aberto para discutir projetos, trocar ideias sobre o futuro da mídia OOH 
          ou simplesmente conversar sobre como podemos transformar espaços urbanos em oportunidades.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white-pure border border-gold-accent/20 p-8 hover-lift hover-glow transition-all duration-300 group">
            <Mail className="w-8 h-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <h3 className="font-heading text-lg text-ink-black mb-2">E-mail</h3>
            <a href="mailto:jeffersonlmendes@gmail.com" className="text-slate-elegant hover:text-gold-accent transition-colors font-editorial">
              jeffersonlmendes@gmail.com
            </a>
          </div>
          
          <div className="bg-white-pure border border-gold-accent/20 p-8 hover-lift hover-glow transition-all duration-300 group">
            <Phone className="w-8 h-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <h3 className="font-heading text-lg text-ink-black mb-2">Telefone</h3>
            <a href="tel:+5511997941150" className="text-slate-elegant hover:text-gold-accent transition-colors font-editorial">
              +55 11 99794-1150
            </a>
          </div>
          
          <div className="bg-white-pure border border-gold-accent/20 p-8 hover-lift hover-glow transition-all duration-300 group">
            <Linkedin className="w-8 h-8 text-gold-accent mx-auto mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <h3 className="font-heading text-lg text-ink-black mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/jefferson-mendes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-elegant hover:text-gold-accent transition-colors font-editorial"
              aria-label="Acessar perfil no LinkedIn de Jefferson Mendes"
            >
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
