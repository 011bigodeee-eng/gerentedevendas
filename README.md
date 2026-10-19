# Marcus Vinicius — Gerente de Vendas

Site institucional em Next.js App Router, React, TypeScript e Tailwind CSS. Animações com Motion, ícones Lucide e composição 3D em CSS; sem imagens ou fontes remotas.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

O servidor utiliza a porta 3000. Para produção: `npm run build` e `npm start`.

## Verificar

```sh
npm run lint
npm run typecheck
npm run build
```

## Personalizar

- `src/data/profile.ts`: nome, cargo, descrição, especialidades, cases, FAQ, WhatsApp (código do país + DDD + número), e-mail, LinkedIn e foto.
- `public/images/marcos/`: retrato real; configure `photo` com `/images/marcos/nome-do-arquivo.webp`.
- `public/images/portfolio/` e `public/images/backgrounds/`: recursos futuros, locais.
- `src/components/site.tsx`: seções, textos editoriais provisórios e componentes interativos.
- `src/app/globals.css`: identidade visual e responsividade.
- `src/app/layout.tsx`: SEO. A indexação está desativada nesta prévia. Habilite somente após validar o conteúdo e os contatos.

O formulário valida os campos e prepara uma mensagem no WhatsApp ou aplicativo de e-mail quando um contato está configurado. Não há backend, persistência ou afirmação de envio. Sem contatos, apresenta aviso explícito. O botão flutuante só aparece com WhatsApp configurado.

## Antes de publicar

Confirmar biografia e escopo de atuação; fornecer foto autorizada, número oficial, e-mail, LinkedIn, cases e resultados comprováveis, depoimentos com consentimento e informações legais aplicáveis. Revisar FAQ, textos provisórios e política de privacidade caso seja adicionado um serviço de coleta de dados. Definir domínio e metadados definitivos, habilitar indexação e validar os canais de contato.

## Fotografias e reconhecimento

As imagens autorizadas ficam em `public/images/marcos/`. Em `src/data/profile.ts`, `photo` controla a abertura, `aboutPhoto` a seção Sobre, `recognitionPhoto` a placa e `gallery` os quatro registros adicionais. A seção de reconhecimento reproduz o contexto da placa de abril a junho de 2026; não deve ser apresentada como faturamento ou resultado de consultoria.

## Evolução visual e interações

- `src/components/methodology.tsx`: cinco etapas selecionáveis, com navegação por setas, Home e End. Textos, ações e foco de cada etapa em `profile.methodology`.
- `src/components/photo-gallery.tsx`: ampliação em diálogo nativo, navegação anterior/próxima, setas do teclado e fechamento com Escape; restaura foco e rolagem ao fechar.
- `src/components/commercial-indicators.tsx`: indicadores configuráveis em `profile.indicators`. Um valor aparece somente quando `value`, `period` e `source` estão preenchidos. Use apenas dados reais autorizados; esses campos não constituem verificação independente da informação.
- `src/app/enhancements.css`: iluminação, profundidade em CSS, estados interativos, ajustes responsivos e de movimento reduzido, preservando os estilos existentes.
- O contato permite escolher a especialidade; os links dos cards já selecionam essa área. Continua sem backend e sem armazenamento de mensagens.
- Projetos têm estrutura expansível. Os exemplos continuam identificados como demonstrações até receber informações verificadas.

As fotografias continuam com otimização e dimensionamento responsivo pelo Next Image; apenas o retrato de abertura tem prioridade e as demais imagens são carregadas sob demanda. A pilha de fontes é local, sem requisições externas. Nenhuma dependência foi adicionada ao projeto.

Validação desta evolução: lint, build e TypeScript; Chromium em larguras 320, 390, 768, 1024 e 1440; metodologia, galeria, menu, FAQ, formulário e âncoras; conteúdo visível sem JavaScript; movimento reduzido; regras de publicação dos indicadores. Auditoria axe para WCAG A/AA 2.0 e 2.1 sem violações detectadas na página testada. A auditoria automatizada não substitui uma avaliação manual completa.

## Seções editoriais e painel demonstrativo

A primeira dobra e o cabeçalho aprovados foram preservados. Os novos estilos de `src/app/sections.css` atuam somente nas seções seguintes.

Dados editáveis em `src/data/profile.ts`:

- `about`: apresentação, visão, diferenciais e trajetória. Os textos de carreira continuam provisórios até receber dados verificados.
- `challenges`: perguntas, caminhos possíveis de atuação e especialidade selecionada ao conversar.
- `specialties`: título, descrição e foco do card.
- `cases`: projetos com categoria, estrutura, imagem opcional e `demo`. Mantenha `demo: true` enquanto o conteúdo for apenas demonstração. Use imagens locais em `public/images/portfolio/`.
- `indicatorDemo`: ciclos e séries fictícias do gráfico, sempre identificados na interface como demonstração. Essas séries não alimentam os resultados reais.
- `indicators`: resultados reais opcionais, que exigem valor, período e fonte antes de serem exibidos.
- `testimonials`: lista inicialmente vazia. Só itens com `authorized: true` aparecem. Cada item requer `quote`, `name` e `role`; adicionar somente relatos reais e autorizados.
- `whatsapp`: número oficial em formato internacional; o site gera o link `wa.me` e prepara a mensagem. Vazio mantém o aviso de canal não configurado, sem enviar ou armazenar dados.

### Roteiro de conferência

1. Sobre: revisar os três blocos editáveis de trajetória; não há datas ou cargos inventados.
2. Desafios: abrir uma pergunta e usar o link; a área correspondente fica selecionada no formulário.
3. Especialidades: clicar na seta de um card e conferir a área de interesse no contato.
4. Metodologia: selecionar etapas, usar anterior/próxima e testar setas, Home e End no teclado.
5. Portfólio: usar os filtros e expandir a estrutura de cada projeto; os exemplos mantêm o selo de demonstração.
6. Indicadores: trocar o indicador ilustrativo, expandir a tabela e conferir a identificação de dados fictícios. Os cards reais continuam sem valores até a configuração completa.
7. Galeria: abrir uma imagem, usar os controles e setas do teclado, fechar com Escape e verificar a restauração do foco.
8. Depoimentos: conferir o estado reservado sem frases ou nomes fictícios.
9. FAQ: abrir e fechar perguntas com clique ou Enter.
10. Contato: verificar validação de campos obrigatórios e o aviso explícito de não envio enquanto os canais não estiverem configurados.

Conferir também o menu móvel e a opção de movimento reduzido do sistema. As fontes continuam locais e as fotos usam o Next Image; o gráfico é SVG e não requer biblioteca adicional.
