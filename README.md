# Onboarding — Cartão de TODOS e VMK (manual digital)

Manual de onboarding interativo construído a partir de **“1 Onboarding (Cartão de TODOS e VMK).pptx”**.
Stack igual à do Lovable: **Vite + React 18 + TypeScript + Tailwind CSS 3**, com `lucide-react` e `@floating-ui/react`.
Não usa API externa, banco de dados nem serviço pago. Todo o conteúdo é carregado localmente.

## Como levar para o Lovable

1. Crie um repositório no GitHub e envie o conteúdo desta pasta.
2. No Lovable, importe o projeto a partir do repositório (integração com GitHub).
3. O Lovable instala as dependências do `package.json` e executa `npm run dev`.

Para rodar localmente: `npm install` e depois `npm run dev`.

## Onde editar

| O que mudar | Arquivo |
|---|---|
| Textos, ordem dos tópicos, imagens de cada seção | `src/data/content.ts` |
| Siglas e definições do glossário | `src/data/glossary.ts` |
| Imagens (arquivos e textos alternativos) | `src/assets/` e `src/data/images.ts` |
| Cores institucionais | `tailwind.config.ts` |

Marcação aceita nos textos: `**negrito**`, `*itálico*` e `[texto](https://link)`.
Os termos do glossário são reconhecidos automaticamente; não é preciso marcá-los no texto.

## Componentes

| Componente | Função |
|---|---|
| `Header` | Logo, título, pesquisa, botão do sumário e indicador da seção atual |
| `TableOfContents` | Sumário com os 13 tópicos (barra lateral recolhível no desktop, gaveta no celular) |
| `ContentSection` / `Blocks` | Seções e tipos de conteúdo (texto, listas, pessoas, MVV, diagramas, links, vídeo) |
| `GlossaryTooltip` | Balão de definição por mouse, teclado (Tab/Esc) e toque |
| `ImageMagnifier` | Lupa que acompanha o cursor, com zoom ajustável (−/+) |
| `ImageLightbox` | Visualização ampliada (toque, botão “Ampliar”, zoom, arrastar, Esc) |
| `SearchBar` | Pesquisa local com trecho de contexto e destaque temporário (atalho: tecla `/`) |
| `Footer` | Encerramento “Obrigado! Equipe VMK Holding.” |

Detalhes da auditoria, correções aplicadas e pendências: veja `CORRECOES.md`.
