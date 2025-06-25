
import { Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jeffersonlmendes/', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:jeffersonlmendes@gmail.com';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511997941150', '_blank');
  };

  return (
    <section 
      id="hero" 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-dark-charcoal"
      style={{
        backgroundImage: `linear-gradient(rgba(42, 42, 42, 0.7), rgba(42, 42, 42, 0.7)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    >
      <div className="text-center text-soft-white max-w-4xl mx-auto px-4">
        {/* Main Impact Phrase */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 leading-relaxed animate-fadeInSlightlyDelayed">
          Transformando o comum em extraordinário, uma campanha OOH por vez.
        </p>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.3s' }}>
          Jefferson Mendes
        </h1>
        
        {/* Title */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.6s' }}>
          Especialista em Mídia OOH Estratégica e Criativa
        </p>
        
        {/* Contact Links */}
        <div className="flex justify-center space-x-8 animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={openLinkedIn}
            className="flex items-center space-x-2 text-soft-white hover:text-olive-green transition-colors duration-300 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-medium">LinkedIn</span>
          </button>
          
          <button
            onClick={openEmail}
            className="flex items-center space-x-2 text-soft-white hover:text-olive-green transition-colors duration-300 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-medium">E-mail</span>
          </button>
          
          <button
            onClick={openWhatsApp}
            className="flex items-center space-x-2 text-soft-white hover:text-olive-green transition-colors duration-300 group"
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-medium">WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
