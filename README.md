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
