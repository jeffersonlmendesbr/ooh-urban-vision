import { Linkedin, Mail, MessageCircle } from 'lucide-react';
const Hero = () => {
  return (
    <section id="hero" className="w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/214736ae-a6c9-4c22-8290-099d5e531c50.png"
          alt="Jefferson Mendes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 text-center">

        {/* Top Tagline */}
        <span className="inline-block text-yellow-400 font-bold text-xs sm:text-sm tracking-widest animate-fadeInSlightlyDelayed mb-6 md:mb-8">
          CREATIVE • STRATEGIC • LEADERSHIP
        </span>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full mb-10 md:mb-12">
          {/* Left Column - Name and Title */}
          <div className="text-center lg:text-left text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.4s' }}>
              Jefferson
              <span className="block text-yellow-400 italic">Mendes</span>
            </h1>
            <div className="animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.6s' }}>
              <p className="text-base sm:text-lg md:text-xl font-light text-gray-100">
                Especialista em Mídia OOH
              </p>
            </div>
          </div>

          {/* Right Column - Impact Phrase */}
          <div className="flex justify-center lg:justify-end items-center">
            <p style={{ animationDelay: '0.2s' }} className="text-lg sm:text-xl md:text-2xl font-light text-yellow-400 leading-relaxed animate-fadeInSlightlyDelayed text-center lg:text-right max-w-md">
              Transformando o comum em extraordinário. Uma campanha OOH por vez.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none justify-center animate-fadeInSlightlyDelayed" style={{ animationDelay: '0.8s' }}>
          <a href="https://www.linkedin.com/in/jeffersonlmendes/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 border border-gray-400 hover:border-yellow-400 transition-all duration-300 bg-black bg-opacity-20 backdrop-blur-sm" aria-label="Visitar LinkedIn de Jefferson Mendes">
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" aria-hidden="true" />
            <span className="font-medium text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">LinkedIn</span>
          </a>
          <a href="mailto:jeffersonlmendes@gmail.com" className="group flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 border border-gray-400 hover:border-yellow-400 transition-all duration-300 bg-black bg-opacity-20 backdrop-blur-sm" aria-label="Enviar email para Jefferson Mendes">
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" aria-hidden="true" />
            <span className="font-medium text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">E-mail</span>
          </a>
          <a href="https://wa.me/5511997941150" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 bg-yellow-400 hover:bg-white transition-all duration-300" aria-label="Conversar no WhatsApp com Jefferson Mendes">
            <MessageCircle className="w-5 h-5 text-black transition-colors" aria-hidden="true" />
            <span className="font-medium text-sm text-black">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;