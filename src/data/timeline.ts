
export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year?: string;
  category: 'academic' | 'strong' | 'certification' | 'illustrative' | 'future';
  highlighted?: boolean;
}

export const timelineData: TimelineItem[] = [
  // FORMAÇÃO ACADÊMICA - ordem alterada, FGV por último
  {
    id: 'unifieo',
    title: 'Comunicação Social',
    subtitle: 'Publicidade e Propaganda',
    description: 'Graduação em Comunicação Social com habilitação em Publicidade e Propaganda, formando a base teórica e prática para atuação estratégica em comunicação e mídia.',
    year: '2009',
    category: 'academic'
  },
  {
    id: 'eca-usp',
    title: 'Gestão da Comunicação',
    subtitle: 'ECA-USP',
    description: 'MBA em Gestão da Comunicação pela Escola de Comunicações e Artes da Universidade de São Paulo, aprofundando conhecimentos em estratégia, planejamento e gestão de comunicação corporativa.',
    year: '2018',
    category: 'academic',
    highlighted: true
  },
  {
    id: 'idiomas',
    title: 'Idiomas',
    subtitle: 'Inglês e Espanhol',
    description: 'Fluência intermediário a avançado em inglês e espanhol, essencial para atuação em mercados internacionais e projetos globais de mídia exterior.',
    category: 'academic'
  },
  {
    id: 'ooh-fgv',
    title: 'Curso Gestão de Mídia Exterior',
    subtitle: 'FGV Educação Executiva',
    description: 'Curso especializado em gestão estratégica de mídia exterior, abordando planejamento, compra, mensuração e tendências do mercado OOH nacional e internacional.',
    year: '2023',
    category: 'academic'
  },

  // DOMÍNIO FORTE - Ferramentas de uso diário
  {
    id: 'sismidia',
    title: 'Sismidia',
    description: 'Plataforma líder em planejamento de mídia OOH no Brasil, utilizada para pesquisa de pontos, planejamento de rotas e análise de audiência.',
    category: 'strong'
  },
  {
    id: 'kantar-ibope',
    title: 'Kantar IBOPE',
    description: 'Dados de audiência e perfil demográfico essenciais para planejamento estratégico de campanhas OOH e análise de efetividade.',
    category: 'strong'
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    description: 'Ferramenta de business intelligence para criação de dashboards, análise de dados de campanha e relatórios de performance em mídia OOH.',
    category: 'strong'
  },
  {
    id: 'excel-avancado',
    title: 'Excel Avançado',
    description: 'Domínio completo em Excel para análise de dados complexos, modelagem financeira e criação de ferramentas de planejamento de mídia.',
    category: 'strong'
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics',
    description: 'Análise integrada de dados digitais para mensuração cross-media e entendimento do impacto de campanhas OOH no comportamento online.',
    category: 'strong'
  },
  {
    id: 'tableau',
    title: 'Tableau',
    description: 'Visualização avançada de dados para criação de relatórios executivos e análise de performance de campanhas de mídia exterior.',
    category: 'strong'
  },
  {
    id: 'qgis',
    title: 'QGIS',
    description: 'Sistema de informação geográfica para análise espacial, mapeamento de pontos de mídia e otimização de rotas em campanhas OOH.',
    category: 'strong'
  },
  {
    id: 'nielsen',
    title: 'Nielsen',
    description: 'Dados de mercado e audiência para complementar análises de mídia OOH e criar estratégias integradas de comunicação.',
    category: 'strong'
  },

  // CERTIFICAÇÕES
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Certificação em Google Ads para integração de estratégias digitais com campanhas OOH e mensuração cross-media.',
    category: 'certification'
  },
  {
    id: 'facebook-ads',
    title: 'Meta Ads',
    description: 'Certificação em anúncios do Meta (Facebook/Instagram) para criação de estratégias integradas de mídia digital e exterior.',
    category: 'certification'
  },
  {
    id: 'dv360',
    title: 'DV360',
    description: 'Display & Video 360 para programmatic buying e integração de campanhas digitais com estratégias de mídia OOH.',
    category: 'certification'
  },

  // FERRAMENTAS ILUSTRATIVAS - Uso esporádico mas relevante
  {
    id: 'salesforce',
    title: 'Salesforce',
    description: 'CRM para gestão de relacionamento com clientes e acompanhamento de oportunidades no mercado de mídia exterior.',
    category: 'illustrative'
  },
  {
    id: 'hubspot',
    title: 'HubSpot',
    description: 'Plataforma de marketing e vendas para gestão de leads e automação de processos comerciais em mídia OOH.',
    category: 'illustrative'
  },
  {
    id: 'figma',
    title: 'Figma',
    description: 'Ferramenta de design colaborativo para criação de apresentações, mockups e materiais visuais para campanhas OOH.',
    category: 'illustrative'
  },
  {
    id: 'monday',
    title: 'Monday.com',
    description: 'Plataforma de gestão de projetos para organização de campanhas, prazos e acompanhamento de entregas em mídia exterior.',
    category: 'illustrative'
  },
  {
    id: 'mapbox',
    title: 'Mapbox',
    description: 'APIs de mapeamento para desenvolvimento de soluções customizadas de visualização geográfica em projetos OOH.',
    category: 'illustrative'
  },

  // FUTURO - Em desenvolvimento
  {
    id: 'python',
    title: 'Python',
    description: 'Linguagem de programação para análise avançada de dados, automação de processos e desenvolvimento de ferramentas de BI em mídia OOH.',
    category: 'future'
  },
  {
    id: 'r-analytics',
    title: 'R para Analytics',
    description: 'Linguagem estatística para análise preditiva, modelagem de audiência e otimização de campanhas de mídia exterior.',
    category: 'future'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Algoritmos de aprendizado de máquina para otimização automática de campanhas OOH e predição de performance.',
    category: 'future'
  }
];
