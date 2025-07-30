
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { sections } from '../config/sections';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      {sections.map(({ id, Component }) => (
        <Component key={id} />
      ))}
      <Footer />
    </div>
  );
};

export default Index;
