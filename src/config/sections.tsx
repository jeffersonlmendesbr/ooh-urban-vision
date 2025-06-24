import type { ComponentType } from 'react';

import About from '../components/About';
import AfricaDDB from '../components/AfricaDDB';
import Experience from '../components/Experience';
import VemPraRua from '../components/VemPraRua';
import Manifesto from '../components/Manifesto';
import Tools from '../components/Tools';
import OOHPlanner from '../components/OOHPlanner';
import NationalPresence from '../components/NationalPresence';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export interface SectionConfig {
  id: string;
  label: string;
  Component: ComponentType;
  includeInNav?: boolean;
}

export const sections: SectionConfig[] = [
  { id: 'sobre', label: 'Sobre', Component: About, includeInNav: true },
  { id: 'africa', label: 'Africa DDB', Component: AfricaDDB, includeInNav: true },
  { id: 'experiencias', label: 'Experiências', Component: Experience, includeInNav: true },
  // VemPraRua does not appear in nav currently
  { id: 'vem-pra-rua', label: 'Vem Pra Rua', Component: VemPraRua },
  { id: 'manifesto', label: 'Manifesto', Component: Manifesto, includeInNav: true },
  { id: 'ferramentas', label: 'Ferramentas', Component: Tools, includeInNav: true },
  { id: 'oohplanner', label: 'OOHPlanner', Component: OOHPlanner, includeInNav: true },
  { id: 'presenca', label: 'Presença', Component: NationalPresence, includeInNav: true },
  { id: 'testimonials', label: 'Depoimentos', Component: Testimonials },
  { id: 'contato', label: 'Contato', Component: Contact, includeInNav: true },
];
