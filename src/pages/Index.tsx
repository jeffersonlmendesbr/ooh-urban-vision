
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
// import AfricaDDB from '../components/AfricaDDB'; // Comentado temporariamente se VemPraRua substitui ou vem antes/depois
import VemPraRua from '../components/VemPraRua'; // Importa o novo componente
import Manifesto from '../components/Manifesto';
import Tools from '../components/Tools';
import OOHPlanner from '../components/OOHPlanner';
import NationalPresence from '../components/NationalPresence';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-white font-editorial">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <VemPraRua />
      {/* <AfricaDDB /> A seção AfricaDDB pode ser reposicionada ou removida conforme necessário */}
      <Manifesto />
      <Tools />
      <OOHPlanner />
      <NationalPresence />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
