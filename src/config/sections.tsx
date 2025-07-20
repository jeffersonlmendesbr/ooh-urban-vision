
import type { ComponentType } from 'react';

import About from '../components/About';
import HighlightsCarousel from '../components/HighlightsCarousel';
import Experience from '../components/Experience';
import Cases from '../components/Cases';
import Manifesto from '../components/Manifesto';
import NationalPresence from '../components/NationalPresence';
import PepeTribute from '../components/PepeTribute';
import Tools from '../components/Tools';
import OOHDescomplicado from '../components/OOHDescomplicado';
import OOHPlanner from '../components/OOHPlanner';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Analytics from '../components/Analytics';
import FAQ from '../components/FAQ';

export interface SectionConfig {
  id: string;
  label: string;
  Component: ComponentType;
  includeInNav?: boolean;
}

export const sections: SectionConfig[] = [
  { id: 'about', label: 'Sobre', Component: About, includeInNav: true },
  { id: 'highlights', label: 'Destaques', Component: HighlightsCarousel, includeInNav: true },
  { id: 'experience', label: 'Jornada', Component: Experience, includeInNav: true },
  { id: 'pepetribute', label: 'Homenagem', Component: PepeTribute, includeInNav: true },
  { id: 'cases', label: 'Cases', Component: Cases, includeInNav: true },
  { id: 'manifesto', label: 'Manifesto', Component: Manifesto, includeInNav: true },
  { id: 'nationalpresence', label: 'Presença', Component: NationalPresence, includeInNav: true },
  { id: 'tools', label: 'Ferramentas', Component: Tools, includeInNav: true },
  { id: 'oohdescomplicado', label: 'OOH Descomplicado', Component: OOHDescomplicado, includeInNav: true },
  { id: 'oohplanner', label: 'OOH Planner', Component: OOHPlanner, includeInNav: true },
  { id: 'testimonials', label: 'Testemunhos', Component: Testimonials, includeInNav: true },
  { id: 'analytics', label: 'Analytics', Component: Analytics, includeInNav: true },
  { id: 'faq', label: 'FAQ', Component: FAQ, includeInNav: true },
  { id: 'contact', label: 'Contato', Component: Contact, includeInNav: true },
];
