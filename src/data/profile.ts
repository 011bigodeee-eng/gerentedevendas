export type Testimonial = { quote: string; name: string; role: string; authorized: boolean };
export type PortfolioProject = {
  title: string;
  category: string;
  text: string;
  demo: boolean;
  image: string | null;
  structure: string[][];
};

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
  // Volume informado pelo usuário a partir da bio; período não fornecido.
  creditBio: { volume: '+ R$ 74,8 milhões', label: 'em créditos comercializados', callToAction: 'Faça sua simulação abaixo' },
  whatsapp: '5512996393742', email: '', linkedin: '',
  photoPosition: 'center 8%',
  aboutPhotoPosition: 'center 8%',
  photo: '/images/marcos/retrato-principal.jpg', // Fotografia autorizada pelo titular
  aboutPhoto: '/images/marcos/retrato-detalhe-alta.jpg',
  recognitionPhoto: '/images/marcos/reconhecimento-alta.jpg',
  gallery: [
    { src: '/images/marcos/trabalho-tablet-alta.jpg', alt: 'Marcus Vinicius utilizando um tablet', caption: 'Perspectiva e atenção', position: 'center 20%' },
    { src: '/images/marcos/retrato-externo-alta.jpg', alt: 'Marcus Vinicius de terno cinza em ambiente externo', caption: 'Presença profissional', position: 'center 22%' },
    { src: '/images/marcos/retrato-profissional-alta.jpg', alt: 'Marcus Vinicius de terno azul em ambiente externo', caption: 'Conexões e oportunidades', position: 'center 18%' },
    { src: '/images/marcos/bastidores-alta.jpg', alt: 'Marcus Vinicius em um ambiente de trabalho', caption: 'Nos bastidores', position: 'center 14%' },
  ],
  about: {
    introduction: 'Marcus Vinicius é gerente de vendas com atuação em soluções de crédito. Sua apresentação profissional reúne mais de R$ 74,8 milhões em créditos comercializados.',
    vision: 'Uma proposta de trabalho que aproxima pessoas, prioridades e decisões. Este conteúdo editorial deve ser validado com Marcus antes de ser apresentado como sua visão profissional definitiva.',
    differentiators: ['Clareza nas decisões', 'Pessoas no centro', 'Consistência na execução'],
    trajectory: [
      { label: 'Experiência', title: 'Uma trajetória a apresentar', text: 'Adicionar funções, setores e períodos de atuação confirmados por Marcus.' },
      { label: 'Desenvolvimento', title: 'Aprendizado em perspectiva', text: 'Adicionar formação e qualificações verificadas, sem atribuir certificações não fornecidas.' },
      { label: 'Direção', title: 'O próximo capítulo', text: 'Apresentar os objetivos profissionais e as formas de atuação após alinhamento com Marcus.' },
    ],
  },
  challenges: [
    { title: 'Vendas sem um processo claro', question: 'Cada negociação segue um caminho diferente?', direction: 'Mapear as etapas da venda, definir responsabilidades e construir uma rotina comercial compartilhada.', topic: 'Gestão comercial' },
    { title: 'Metas e indicadores desconectados', question: 'A equipe sabe o que acompanhar e por quê?', direction: 'Conectar objetivos a indicadores compreensíveis e criar momentos de revisão das prioridades.', topic: 'Metas e planejamento' },
    { title: 'Oportunidades que não convertem', question: 'As conversas avançam, mas as decisões não?', direction: 'Observar a qualificação, os pontos de perda e a consistência do acompanhamento das oportunidades.', topic: 'Análise de indicadores' },
    { title: 'Uma equipe sem alinhamento', question: 'As pessoas trabalham muito, mas em direções diferentes?', direction: 'Organizar rituais de comunicação, acordos de execução e desenvolvimento das pessoas.', topic: 'Liderança e equipes' },
    { title: 'Um funil difícil de acompanhar', question: 'Falta visibilidade sobre o próximo passo de cada oportunidade?', direction: 'Estruturar critérios de avanço e uma visão compartilhada do pipeline comercial.', topic: 'Estruturação de processos' },
    { title: 'Resultados sem acompanhamento', question: 'Os números aparecem só no fechamento do período?', direction: 'Construir uma cadência de análise para identificar sinais, aprender e ajustar a rota.', topic: 'Análise de indicadores' },
  ],
  indicatorDemo: {
    note: 'Dados fictícios para demonstrar a leitura do painel. Não representam resultados, clientes ou desempenho de Marcus Vinicius.',
    periods: ['Ciclo 01', 'Ciclo 02', 'Ciclo 03', 'Ciclo 04', 'Ciclo 05', 'Ciclo 06'],
    series: [
      { label: 'Conversão', unit: '%', values: [18, 24, 21, 32, 29, 38] },
      { label: 'Oportunidades', unit: 'oportunidades', values: [30, 45, 38, 56, 49, 65] },
    ],
  },
  testimonials: [] as Testimonial[], // Somente depoimentos reais e autorizados.
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
    { title: 'Gestão comercial', text: 'Uma visão integrada de pessoas, processos e oportunidades para orientar o próximo passo.', focus: 'Direção & rotina' },
    { title: 'Liderança e equipes', text: 'Alinhamento, comunicação e autonomia para construir uma equipe preparada.', focus: 'Alinhamento & desenvolvimento' },
    { title: 'Metas e planejamento', text: 'Prioridades claras e um plano de ação conectado aos objetivos do negócio.', focus: 'Objetivos & prioridades' },
    { title: 'Análise de indicadores', text: 'Leitura do que importa para apoiar decisões com mais contexto.', focus: 'Leitura & decisão' },
    { title: 'Estruturação de processos', text: 'Organização do funil e rotinas comerciais que dão consistência à operação.', focus: 'Funil & consistência' },
    { title: 'Treinamento comercial', text: 'Desenvolvimento de habilidades para conversas e negociações mais relevantes.', focus: 'Habilidades & negociação' },
  ],
  cases: [
    { title: 'Uma operação com mais direção.', category: 'Processos e gestão', demo: true, image: null, text: 'Espaço para um projeto de estruturação comercial, com contexto, ações e resultados verificados.', structure: [['Contexto', 'Descrever o cenário inicial e os desafios confirmados.'], ['Atuação', 'Documentar o escopo, as responsabilidades e as ações realizadas.'], ['Evidências', 'Inserir resultados com fonte, período e autorização.']] },
    { title: 'Pessoas que evoluem juntas.', category: 'Liderança e equipes', demo: true, image: null, text: 'Espaço para uma experiência de desenvolvimento de equipe e seus aprendizados.', structure: [['Contexto', 'Apresentar a equipe e as necessidades identificadas, com autorização.'], ['Atuação', 'Descrever as iniciativas de alinhamento e desenvolvimento.'], ['Evidências', 'Adicionar aprendizados documentados e retornos autorizados.']] },
  ] satisfies PortfolioProject[],
  faqs: [
    ['Como podemos começar uma conversa?', 'Use os canais da seção de contato quando estiverem configurados. O primeiro passo será entender o contexto, os desafios e os objetivos da sua operação.'],
    ['Quais são as formas de atuação?', 'O formato será definido com Marcus Vinicius conforme o escopo e a disponibilidade. As áreas apresentadas neste site são propostas iniciais e precisam de confirmação.'],
    ['O trabalho pode ser realizado remotamente?', 'A disponibilidade para atuação remota ou presencial ainda será confirmada. Localidade, frequência e formato serão alinhados antes de qualquer contratação.'],
    ['Como são definidos os resultados de um projeto?', 'Os objetivos, indicadores e critérios de acompanhamento devem ser acordados no diagnóstico, de acordo com a realidade de cada negócio.'],
  ],
};
