
const Footer = () => {
  return (
    <footer className="bg-ink-black text-cream-editorial py-16 border-t border-gold-accent/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-3xl font-display text-gold-accent mb-4">Jefferson Mendes</h3>
          <p className="text-grey-sophisticated font-editorial mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialista em Mídia OOH transformando a comunicação urbana através de estratégias 
            inovadoras baseadas em dados e comportamento.
          </p>
        </div>
        
        <div className="border-t border-gold-accent/20 pt-8">
          <p className="text-grey-sophisticated font-accent text-sm tracking-wide">
            © {new Date().getFullYear()} Jefferson Mendes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
