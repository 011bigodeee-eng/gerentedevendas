# Marcus Vinicius — Gerente de Vendas

Site pessoal com foco em soluções de crédito, apresentação profissional, reconhecimento e solicitação de simulação via WhatsApp. Next.js App Router, React, TypeScript, Tailwind CSS, Motion e Lucide. Sem backend de coleta de dados e sem biblioteca de gráficos adicional.

## Executar

Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

Porta padrão 3000. Se ela estiver ocupada: `npm run dev -- --port 3001`.
Para produção: `npm run build` e `npm start`.

## Verificar

```sh
npm run lint
npm run build
npm run typecheck
```

## Conteúdo e informações reais

Edite `src/data/profile.ts`:

- Nome, cargo, headline, descrição e ênfase do título.
- `creditBio`: volume informado na bio pelo titular. O site não atribui um período ao total de mais de R$ 74,8 milhões e não o apresenta como faturamento.
- `whatsapp`: número internacional oficial, somente dígitos. O formulário prepara uma mensagem; a pessoa confirma o envio no WhatsApp. Não existe cálculo de taxas, aprovação de crédito, armazenamento ou envio automático.
- `about`: apresentação e temas da conversa. `showTrajectory` fica desativado enquanto os campos de trajetória não forem preenchidos com informações verificadas.
- `specialties` e `challenges`: etapas de conversa e perguntas iniciais, sem afirmar disponibilidade de produtos ou modalidades não confirmadas.
- `methodology`: etapas ilustrativas do atendimento. As condições e a disponibilidade precisam de confirmação; simulação não garante aprovação.
- `gallery`: fotos, legendas e posição do enquadramento.
- `testimonials`: somente relatos reais autorizados. A seção só aparece quando existe um item com `authorized: true`.
- `cases`: estruturas demonstrativas, mantidas com `demo: true`. São apresentadas dentro de um painel recolhido, sem inventar experiências de clientes.
- `indicatorDemo`: séries fictícias explicitamente identificadas, dentro de um painel recolhido. Não alimentam os resultados reais.
- `indicators`: valores reais opcionais, exibidos apenas com valor, fonte e período preenchidos. Isso não constitui verificação independente dos dados.

A placa original registra um reconhecimento referente a abril a junho de 2026. O volume dessa placa e o total informado na bio têm contextos distintos.

## Organização

- `src/components/site.tsx`: composição da página e formulário de contato.
- `site-header.tsx`: identidade MV, menu móvel, navegação e seção ativa.
- `credit-path.tsx`: três passos editoriais e fotografia de apoio.
- `recognition-feature.tsx`: composição dedicada ao reconhecimento.
- `methodology.tsx`: etapas interativas com setas, Home e End.
- `photo-gallery.tsx`: ampliação em diálogo nativo, navegação, Escape e restauração de foco.
- `portfolio.tsx` e `commercial-indicators.tsx`: materiais demonstrativos opcionais.
- `reveal.tsx`: entradas suaves, uma única vez por elemento, respeitando movimento reduzido.
- `cinematic-intro.tsx` e `src/lib/intro.ts`: abertura e proteção da primeira pintura.
- `src/app/editorial.css`: refinamento de leitura, ritmo entre seções e composições abertas.
- `src/app/theme.css`: paleta azul-marinho e contraste das ações.

## Fotografias

Arquivos locais em `public/images/marcos/`. As versões `*-alta.jpg` substituem as capturas anteriores e são servidas com Next Image. A foto principal tem carregamento prioritário; as demais são carregadas sob demanda. A seção Sobre e a ampliação da galeria preservam a fotografia inteira. As cores e os arquivos originais foram preservados; a unidade visual vem das molduras e da iluminação da interface. Fontes locais, sem requisições externas.

## Roteiro de conferência

1. Em celular, abrir o menu, navegar e fechar com Escape; arrastar a faixa de pilares.
2. Conferir o título sobre crédito, o volume da bio e o caminho para solicitar simulação.
3. Conferir a foto inteira na seção Sobre e a placa de reconhecimento com seu período.
4. Usar os links dos três passos e das perguntas para selecionar o assunto do contato.
5. Navegar na metodologia com os botões e com o teclado.
6. Ampliar fotos, usar setas e fechar com Escape; o foco deve retornar ao botão da foto.
7. Abrir os materiais demonstrativos, testar filtros e a tabela do gráfico.
8. Abrir as perguntas frequentes.
9. Preencher nome e mensagem no contato. O e-mail é opcional. Revisar a mensagem no WhatsApp antes de enviar.
10. Conferir movimento reduzido e visibilidade do conteúdo sem JavaScript.

A abertura aparece uma vez por sessão, com opção de pular e rever. O bootstrap cobre a primeira pintura antes da hidratação; movimento reduzido e sessões já marcadas pulam a abertura. Sem JavaScript, o fallback deixa o site acessível.

## Publicação

O projeto é compatível com implantação automática na Vercel a partir da branch `main`. O site está com indexação desativada nesta prévia em `src/app/layout.tsx`; revise o conteúdo definitivo e os metadados antes de habilitar. Domínio, modalidades, condições e qualquer depoimento ou case real precisam de informações confirmadas pelo titular.
