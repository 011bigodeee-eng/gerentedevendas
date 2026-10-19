export type CommercialMetric = {
  label: string;
  description: string;
  value: string | null;
  period: string;
  source: string;
};

// Um valor só é publicável com período e origem identificados.
export function verifiedMetricValue(metric: CommercialMetric): string | null {
  return metric.value?.trim() && metric.period.trim() && metric.source.trim() ? metric.value.trim() : null;
}

// Substitua os campos vazios por informações verificadas antes de publicar.
export const profile = {
  name: 'Marcus Vinicius', role: 'Gerente de Vendas',
  headline: 'Transformando\nestratégia comercial\nem resultados.',
  description: 'Clareza para decidir. Direção para liderar. Estratégia para transformar o potencial da sua operação comercial em crescimento consistente.',
  whatsapp: '', email: '', linkedin: '',
  photo: '/images/marcos/retrato.jpg', // Fotografia autorizada pelo titular
  aboutPhoto: '/images/marcos/retrato-detalhe.png',
  recognitionPhoto: '/images/marcos/reconhecimento.png',
  gallery: [
    { src: '/images/marcos/trabalho-tablet.png', alt: 'Marcus Vinicius utilizando um tablet', caption: 'Perspectiva e atenção' },
    { src: '/images/marcos/retrato-externo.png', alt: 'Marcus Vinicius de terno cinza em ambiente externo', caption: 'Presença profissional' },
    { src: '/images/marcos/retrato-profissional.png', alt: 'Marcus Vinicius de terno azul em ambiente externo', caption: 'Conexões e oportunidades' },
    { src: '/images/marcos/bastidores.png', alt: 'Marcus Vinicius em um ambiente de trabalho', caption: 'Nos bastidores' },
  ],
  methodology: [
    { title: 'Diagnóstico', description: 'Antes de propor uma direção, entender o terreno. Uma leitura conjunta do cenário comercial, dos processos e das pessoas.', actions: ['Ouvir o contexto e os objetivos', 'Mapear o funil e a rotina comercial', 'Identificar obstáculos e oportunidades'], output: 'Um cenário mais claro para decidir.' },
    { title: 'Planejamento', description: 'Transformar o diagnóstico em prioridades. Definir um caminho possível, conectado ao momento e aos recursos da operação.', actions: ['Alinhar prioridades e responsabilidades', 'Definir objetivos e indicadores', 'Organizar o plano de ação'], output: 'Prioridades traduzidas em próximos passos.' },
    { title: 'Execução', description: 'Aproximar estratégia e rotina. Mobilizar a equipe e colocar o plano em movimento com comunicação e acompanhamento.', actions: ['Conectar pessoas às responsabilidades', 'Estruturar rotinas de execução', 'Apoiar o desenvolvimento da equipe'], output: 'Ação organizada e responsabilidades claras.' },
    { title: 'Acompanhamento', description: 'Olhar para o que acontece na prática. Acompanhar sinais do processo e conversar sobre avanços e dificuldades.', actions: ['Revisar indicadores e oportunidades', 'Manter conversas de alinhamento', 'Registrar aprendizados da operação'], output: 'Visibilidade para agir com contexto.' },
    { title: 'Otimização', description: 'Evoluir a partir do que foi aprendido. Ajustar prioridades e processos sem perder de vista o objetivo acordado.', actions: ['Avaliar o que precisa de ajuste', 'Refinar processos e abordagens', 'Definir o próximo ciclo de evolução'], output: 'Uma operação em melhoria contínua.' },
  ],
  // Preencha value, period e source juntos, com dados reais autorizados.
  indicators: [
    { label: 'Conversão', description: 'Qualidade e avanço das oportunidades em cada etapa do funil.', value: null, period: '', source: '' },
    { label: 'Pipeline', description: 'Visibilidade das oportunidades e das próximas ações comerciais.', value: null, period: '', source: '' },
    { label: 'Ciclo de vendas', description: 'Tempo e fluidez entre a primeira conversa e a decisão.', value: null, period: '', source: '' },
    { label: 'Desenvolvimento', description: 'Evolução, alinhamento e aprendizado da equipe.', value: null, period: '', source: '' },
  ] satisfies CommercialMetric[],
  specialties: [
    { title: 'Gestão comercial', text: 'Uma visão integrada de pessoas, processos e oportunidades para orientar o próximo passo.' },
    { title: 'Desenvolvimento de equipes', text: 'Alinhamento, comunicação e autonomia para construir uma equipe preparada.' },
    { title: 'Planejamento de vendas', text: 'Prioridades claras e um plano de ação conectado aos objetivos do negócio.' },
    { title: 'Análise de indicadores', text: 'Leitura do que importa para apoiar decisões com mais contexto.' },
    { title: 'Estruturação de processos', text: 'Organização do funil e rotinas comerciais que dão consistência à operação.' },
    { title: 'Treinamento comercial', text: 'Desenvolvimento de habilidades para conversas e negociações mais relevantes.' },
  ],
  cases: [
    { title: 'Uma operação com mais direção.', category: 'PROCESSOS & GESTÃO', text: 'Espaço para um projeto de estruturação comercial, com contexto, ações e resultados verificados.', structure: [['Contexto', 'Descrever o cenário inicial e os desafios confirmados.'], ['Atuação', 'Documentar o escopo, as responsabilidades e as ações realizadas.'], ['Evidências', 'Inserir resultados com fonte, período e autorização.']] },
    { title: 'Pessoas que evoluem juntas.', category: 'LIDERANÇA & DESENVOLVIMENTO', text: 'Espaço para uma experiência de desenvolvimento de equipe e seus aprendizados.', structure: [['Contexto', 'Apresentar a equipe e as necessidades identificadas, com autorização.'], ['Atuação', 'Descrever as iniciativas de alinhamento e desenvolvimento.'], ['Evidências', 'Adicionar aprendizados documentados e retornos autorizados.']] },
  ],
  faqs: [
    ['Como podemos começar uma conversa?', 'Use os canais da seção de contato quando estiverem configurados. O primeiro passo será entender o contexto, os desafios e os objetivos da sua operação.'],
    ['Quais são as formas de atuação?', 'O formato será definido com Marcus Vinicius conforme o escopo e a disponibilidade. As áreas apresentadas neste site são propostas iniciais e precisam de confirmação.'],
    ['O trabalho pode ser realizado remotamente?', 'A disponibilidade para atuação remota ou presencial ainda será confirmada. Localidade, frequência e formato serão alinhados antes de qualquer contratação.'],
    ['Como são definidos os resultados de um projeto?', 'Os objetivos, indicadores e critérios de acompanhamento devem ser acordados no diagnóstico, de acordo com a realidade de cada negócio.'],
  ],
};
