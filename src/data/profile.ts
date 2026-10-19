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
  headline: 'Crédito com clareza.\nSeu próximo passo.',
  headlineEmphasis: 'próximo passo.',
  description: 'Cada objetivo pede uma conversa. Conheça Marcus Vinicius e solicite uma simulação de crédito para entender as possibilidades para o seu momento.',
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
    vision: 'Antes de decidir, vale entender o objetivo, os prazos e as condições. A conversa é o ponto de partida para solicitar uma simulação e esclarecer o próximo passo.',
    differentiators: ['Seu objetivo', 'Informações claras', 'Uma conversa direta'],
    showTrajectory: false,
    trajectory: [
      { label: 'Experiência', title: 'Uma trajetória a apresentar', text: 'Adicionar funções, setores e períodos de atuação confirmados por Marcus.' },
      { label: 'Desenvolvimento', title: 'Aprendizado em perspectiva', text: 'Adicionar formação e qualificações verificadas, sem atribuir certificações não fornecidas.' },
      { label: 'Direção', title: 'O próximo capítulo', text: 'Apresentar os objetivos profissionais e as formas de atuação após alinhamento com Marcus.' },
    ],
  },
  challenges: [
    { title: 'Por onde começar?', question: 'Comece pelo que você quer realizar.', direction: 'Compartilhe seu objetivo e o valor aproximado de que precisa. Isso ajuda a contextualizar o pedido de simulação.', topic: 'Simulação de crédito' },
    { title: 'O que observar nas condições?', question: 'Olhe além do valor da parcela.', direction: 'Peça informações sobre prazo, custo total e condições aplicáveis antes de tomar uma decisão.', topic: 'Dúvidas sobre crédito' },
    { title: 'Como dar o próximo passo?', question: 'Uma simulação ajuda a organizar a conversa.', direction: 'Entre em contato para confirmar as possibilidades disponíveis e as informações necessárias. A simulação não garante aprovação.', topic: 'Simulação de crédito' },
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
    { title: 'Diagnóstico', description: 'O ponto de partida é o seu objetivo. Contextualizar o momento ajuda a formular uma solicitação de crédito com mais clareza.', actions: ['Compartilhar o objetivo', 'Informar um valor aproximado', 'Explicar o momento da necessidade'], output: 'Uma conversa com contexto.' },
    { title: 'Planejamento', description: 'Organizar as perguntas antes de decidir. Prazo, parcela e custo total fazem parte dessa leitura.', actions: ['Conversar sobre prazos', 'Entender as condições apresentadas', 'Organizar as dúvidas'], output: 'Informações para avaliar o próximo passo.' },
    { title: 'Execução', description: 'Solicitar uma simulação pelo atendimento. Modalidades, condições e documentação devem ser confirmadas na conversa.', actions: ['Solicitar a simulação', 'Confirmar as informações necessárias', 'Esclarecer as condições aplicáveis'], output: 'Uma solicitação de simulação encaminhada.' },
    { title: 'Acompanhamento', description: 'Manter as informações alinhadas. O contato pelo WhatsApp permite retomar dúvidas e conversar sobre o andamento.', actions: ['Confirmar o recebimento da solicitação', 'Retomar dúvidas', 'Consultar o próximo passo no atendimento'], output: 'Continuidade na conversa.' },
    { title: 'Otimização', description: 'Revisitar a solicitação quando o contexto mudar. Uma nova avaliação pode ser necessária diante de outros objetivos ou condições.', actions: ['Atualizar o objetivo, se necessário', 'Reavaliar as informações recebidas', 'Confirmar a decisão com as condições em mãos'], output: 'Uma decisão informada, no seu momento.' },
  ],
  // Preencha value, period e source juntos, com dados reais autorizados.
  indicators: [
    { label: 'Conversão', description: 'Qualidade e avanço das oportunidades em cada etapa do funil.', value: null, period: '', source: '' },
    { label: 'Pipeline', description: 'Visibilidade das oportunidades e das próximas ações comerciais.', value: null, period: '', source: '' },
    { label: 'Ciclo de vendas', description: 'Tempo e fluidez entre a primeira conversa e a decisão.', value: null, period: '', source: '' },
    { label: 'Desenvolvimento', description: 'Evolução, alinhamento e aprendizado da equipe.', value: null, period: '', source: '' },
  ] satisfies CommercialMetric[],
  specialties: [
    { title: 'Seu objetivo', text: 'O que você quer realizar? A primeira conversa começa pelo seu momento e pelo que você precisa.', focus: 'CONTEXTO ANTES DA PROPOSTA' },
    { title: 'Sua simulação', text: 'Solicite informações sobre as possibilidades disponíveis. Prazos, valores e condições devem ser confirmados no atendimento.', focus: 'INFORMAÇÃO PARA AVALIAR' },
    { title: 'Seu próximo passo', text: 'Com as informações em mãos, esclareça as dúvidas e avalie a decisão. Simulação não significa aprovação garantida.', focus: 'CLAREZA ANTES DE DECIDIR' },
  ],
  cases: [
    { title: 'Uma operação com mais direção.', category: 'Processos e gestão', demo: true, image: null, text: 'Espaço para um projeto de estruturação comercial, com contexto, ações e resultados verificados.', structure: [['Contexto', 'Descrever o cenário inicial e os desafios confirmados.'], ['Atuação', 'Documentar o escopo, as responsabilidades e as ações realizadas.'], ['Evidências', 'Inserir resultados com fonte, período e autorização.']] },
    { title: 'Pessoas que evoluem juntas.', category: 'Liderança e equipes', demo: true, image: null, text: 'Espaço para uma experiência de desenvolvimento de equipe e seus aprendizados.', structure: [['Contexto', 'Apresentar a equipe e as necessidades identificadas, com autorização.'], ['Atuação', 'Descrever as iniciativas de alinhamento e desenvolvimento.'], ['Evidências', 'Adicionar aprendizados documentados e retornos autorizados.']] },
  ] satisfies PortfolioProject[],
  faqs: [
    ['Como solicito uma simulação?', 'Use o botão de simulação ou o formulário para preparar uma mensagem ao WhatsApp de Marcus. Conte seu objetivo e confirme o envio no aplicativo.'],
    ['Uma simulação garante aprovação?', 'Não. A simulação é uma etapa informativa. Disponibilidade, condições e eventual aprovação dependem de análise e devem ser confirmadas no atendimento.'],
    ['Quais modalidades de crédito estão disponíveis?', 'As modalidades, instituições e condições disponíveis precisam ser confirmadas diretamente com Marcus. O site não apresenta uma lista de produtos sem essa confirmação.'],
    ['O que devo informar no primeiro contato?', 'Compartilhe seu objetivo, o valor aproximado que procura e suas principais dúvidas. Os próximos passos e as informações necessárias serão alinhados no atendimento.'],
  ],
};
