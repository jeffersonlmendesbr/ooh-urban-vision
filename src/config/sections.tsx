import type { ComponentType } from 'react';

import About from '../components/About';
import AfricaDDB from '../components/AfricaDDB';
import Experience from '../components/Experience';
import Cases from '../components/Cases';
import Manifesto from '../components/Manifesto';
import NationalPresence from '../components/NationalPresence';
import Tools from '../components/Tools';
import OOHPlanner from '../components/OOHPlanner';
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
  { id: 'experiencias', label: 'Jornada', Component: Experience, includeInNav: true },
  { id: 'cases', label: 'Cases', Component: Cases, includeInNav: true },
  { id: 'manifesto', label: 'Manifesto', Component: Manifesto, includeInNav: true },
  { id: 'presenca', label: 'Presença', Component: NationalPresence, includeInNav: true },
  { id: 'ferramentas', label: 'Ferramentas', Component: Tools, includeInNav: true },
  { id: 'oohplanner', label: 'OOH Planner', Component: OOHPlanner, includeInNav: true },
  { id: 'testemunhos', label: 'Testemunhos', Component: Testimonials, includeInNav: true },
  { id: 'contato', label: 'Contato', Component: Contact, includeInNav: true },
];
