
import { LucideIcon } from 'lucide-react';
import { GraduationCap, Monitor, Smartphone, MapPin, Database, Tv, BookOpen, Globe, Flag, Shield, Camera, Zap, Calendar } from 'lucide-react';

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'strong' | 'illustrative' | 'certification' | 'future';
  icon: LucideIcon;
  year?: string;
  order: number;
}

export const timelineData: TimelineItem[] = [
  {
    id: 'unifieo',
    title: 'Bacharelado em Publicidade',
    subtitle: 'UNIFIEO',
    description: 'Marco inicial da trajetória publicitária. Base sólida em comunicação, criação publicitária e estratégia de marketing.',
    category: 'strong',
    icon: GraduationCap,
    year: '2015',
    order: 1
  },
  {
    id: 'ad-midia',
    title: 'AD Mídia',
    description: 'Ferramenta central no planejamento e execução OOH. Domínio avançado para criação de estratégias de mídia exterior.',
    category: 'strong',
    icon: Monitor,
    order: 2
  },
  {
    id: 'vbs',
    title: 'VBS',
    description: 'Sistema estratégico para reservas e planejamento OOH. Expertise em gestão de inventário e otimização de campanhas.',
    category: 'strong',
    icon: Calendar,
    order: 3
  },
  {
    id: 'google-maps',
    title: 'Google Maps',
    description: 'Ferramenta de geolocalização essencial no planejamento territorial. Análise estratégica de localização para OOH.',
    category: 'strong',
    icon: MapPin,
    order: 4
  },
  {
    id: 'colmeia',
    title: 'Colmeia',
    description: 'Plataforma de dados e insights para mídia OOH.',
    category: 'illustrative',
    icon: Database,
    order: 5
  },
  {
    id: 'geofusion',
    title: 'Geofusion',
    description: 'Análise de dados demográficos e geográficos com foco em clusters urbanos. Segmentação avançada de audiências.',
    category: 'strong',
    icon: Database,
    order: 6
  },
  {
    id: 'fluxooh',
    title: 'Fluxooh',
    description: 'Sistema de análise de fluxo para mídia OOH.',
    category: 'illustrative',
    icon: Zap,
    order: 7
  },
  {
    id: 'eletromidia-ads',
    title: 'Eletromidia Ads',
    description: 'Ferramenta proprietária da Eletromidia, com uso intensivo em campanhas. Especialização em mídia digital OOH.',
    category: 'strong',
    icon: Tv,
    order: 8
  },
  {
    id: 'eca-usp',
    title: 'Pós-graduação em Marketing',
    subtitle: 'ECA/USP',
    description: 'Marco acadêmico central. Especialização em estratégia de marketing e comunicação integrada.',
    category: 'strong',
    icon: GraduationCap,
    year: '2019',
    order: 9
  },
  {
    id: 'hypr',
    title: 'HYPR',
    description: 'Plataforma de análise de performance OOH.',
    category: 'illustrative',
    icon: Monitor,
    order: 10
  },
  {
    id: 'ooh-fgv',
    title: 'OOH pela FGV',
    description: 'Especialização tática focada no meio Out-of-Home. Aprofundamento em estratégias e métricas específicas do segmento.',
    category: 'strong',
    icon: BookOpen,
    order: 11
  },
  {
    id: 'infooh',
    title: 'Infooh',
    description: 'Sistema de informações para mídia exterior.',
    category: 'illustrative',
    icon: Database,
    order: 12
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    subtitle: 'Certificação de Compra e Planejamento',
    description: 'Certificação oficial em planejamento e compra de mídia digital no ecossistema Meta.',
    category: 'certification',
    icon: Shield,
    order: 13
  },
  {
    id: 'dv360',
    title: 'DV360',
    subtitle: 'Certificação de Mídia Programática',
    description: 'Certificação em mídia programática e automação de campanhas digitais.',
    category: 'certification',
    icon: Shield,
    order: 14
  },
  {
    id: 'sainsburry',
    title: 'Sainsburry',
    description: 'Plataforma de análise de dados de mídia.',
    category: 'illustrative',
    icon: Database,
    order: 15
  },
  {
    id: 'ecoss',
    title: 'Ecoss',
    description: 'Sistema de gestão e otimização de campanhas.',
    category: 'illustrative',
    icon: Monitor,
    order: 16
  },
  {
    id: 'idiomas',
    title: 'Idiomas: Inglês e Espanhol',
    description: 'Fluência em inglês e espanhol, facilitando colaborações internacionais e acesso a conteúdos especializados globais.',
    category: 'strong',
    icon: Flag,
    order: 17
  },
  {
    id: 'waze-cities',
    title: 'Waze for Cities',
    subtitle: 'Em Breve',
    description: 'Planejado para integração futura com dados de mobilidade urbana e otimização de campanhas baseadas em tráfego.',
    category: 'future',
    icon: MapPin,
    order: 18
  },
  {
    id: 'vivo-insights',
    title: 'Vivo Ads / Insights',
    subtitle: 'Em Breve',
    description: 'Planejado para análise geolocalizada no projeto OOHPlanner, integrando dados de telecomunicações.',
    category: 'future',
    icon: Smartphone,
    order: 19
  }
];
