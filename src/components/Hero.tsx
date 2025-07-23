
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&q=80" 
          alt="Jefferson Mendes - Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content positioned to avoid face overlap */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
          
          {/* Left Column - Main Content */}
          <div className="text-left text-white lg:pr-8">
            {/* Editorial Quote */}
            <div className="mb-6">
              <span className="inline-block text-yellow-400 font-bold text-xs sm:text-sm tracking-widest mb-4 animate-fadeInSlightlyDelayed">
                CREATIVE • STRATEGIC • LEADERSHIP
              </span>
            </div>
            
            {/* Main Impact Phrase */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 mb-8 leading-relaxed animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.2s'
            }}>
              Transformando o comum em extraordinário, uma campanha OOH por vez.
            </p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.4s'
            }}>
              Jefferson
              <span className="block text-yellow-400 italic">Mendes</span>
            </h1>
            
            {/* Title */}
            <div className="mb-8 animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.6s'
            }}>
              <p className="text-lg sm:text-xl font-light text-gray-100 mb-2">
                Especialista em Mídia OOH
              </p>
              <p className="text-sm sm:text-base font-medium text-yellow-400">HÁ 15 ANOS TRADUZINDO DESAFIOS DE MÍDIA EM SOLUÇÕES QUE IMPACTAM</p>
            </div>
          </div>

          {/* Right Column - Contact Links */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:pl-8">
            <div className="flex flex-col gap-4 animate-fadeInSlightlyDelayed" style={{
              animationDelay: '0.8s'
            }}>
              <a href="https://www.linkedin.com/in/jeffersonlmendes/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 px-6 py-3 border border-gray-400 hover:border-yellow-400 transition-all duration-300 bg-black bg-opacity-20 backdrop-blur-sm" aria-label="Visitar LinkedIn de Jefferson Mendes">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" aria-hidden="true" />
                <span className="font-medium text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">LinkedIn</span>
              </a>

              <a href="mailto:jeffersonlmendes@gmail.com" className="group flex items-center space-x-3 px-6 py-3 border border-gray-400 hover:border-yellow-400 transition-all duration-300 bg-black bg-opacity-20 backdrop-blur-sm" aria-label="Enviar email para Jefferson Mendes">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" aria-hidden="true" />
                <span className="font-medium text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">E-mail</span>
              </a>

              <a href="https://wa.me/5511997941150" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 px-6 py-3 bg-yellow-400 hover:bg-white transition-all duration-300" aria-label="Conversar no WhatsApp com Jefferson Mendes">
                <MessageCircle className="w-5 h-5 text-black transition-colors" aria-hidden="true" />
                <span className="font-medium text-sm text-black">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
