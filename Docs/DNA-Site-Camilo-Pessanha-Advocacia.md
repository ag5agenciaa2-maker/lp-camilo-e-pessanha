# SITE DNA — CAMILO E PESSANHA ADVOCACIA

**Nicho:** Advocacia boutique de alto padrao com atuacao em Direito Criminal (plantao 24h), Previdenciario, Trabalhista, Inventario e Familia. Escritorio sediado em Campo Grande, Zona Oeste do Rio de Janeiro, atendendo pessoas fisicas e empresas em momentos de alta urgencia emocional e juridica.

**Posicionamento:** A sensacao e de abrir uma pasta de couro em uma mesa de mogno — o site transmite solidez institucional sem cair em corporativismo generico. O contraste entre o navy profundo (#0D1B2E) e o dourado envelhecido (#C9A84C) cria uma atmosfera de autoridade acolhedora, onde a tipografia serifada italiana (Cormorant Garamond) suaviza a rigidez do tom juridico. O dark mode natural da interface (hero, about, reviews, CTA em navy) nao e uma opcao de usuario, mas uma decisao arquitetonica: o site comeca escuro e alterna para secoes claras, criando ritmo visual de respiracao.

**Stack Tecnica:** HTML5 sem frameworks · CSS3 custom properties (zero Tailwind/Bootstrap) · Vanilla ES6 (IIFE) · Google Fonts: Cormorant Garamond (300-700, italic) + DM Sans (400, 500, 700) · SVG inline (zero icones de biblioteca) · Schema.org JSON-LD @graph unificado · Sem dependencias externas

**Data de criacao:** 2023-07-11 (foundedDate no Schema) · Ultima modificacao documentada: 2026-04-22

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties

| Token CSS | Light Mode | Dark Mode (secao navy) | Onde e usado especificamente |
|-----------|------------|------------------------|------------------------------|
| `--navy` | `#1A2B47` | `#1A2B47` | Fundo da coluna direita do hero, cards de retrato about, reviews, fundo do form CTA |
| `--navy-deep` | `#0D1B2E` | `#0D1B2E` | Fundo do hero, about, CTA, footer, drawer mobile, cookie banner, form inputs |
| `--navy-soft` | `#16253F` | `#16253F` | Variavel declarada mas nao utilizada diretamente no CSS entregue |
| `--navy-line` | `rgba(201, 168, 76, 0.18)` | `rgba(201, 168, 76, 0.18)` | Bordas do accordion (`.acc`), FAQ, separadores sutis |
| `--gold` | `#C9A84C` | `#C9A84C` | Cor primaria de destaque: titulos, botoes, icones, acentos tipograficos, separadores |
| `--gold-hover` | `#B8933A` | `#B8933A` | Hover dos botoes dourados |
| `--gold-soft` | `rgba(201, 168, 76, 0.14)` | `rgba(201, 168, 76, 0.14)` | Variavel declarada, nao utilizada diretamente |
| `--ivory` | `#F5F2EC` | `#F5F2EC` | Cor de texto em fundos escuros, fundo do body, secoes claras |
| `--ivory-2` | `#ECE6D8` | `#ECE6D8` | Texto secundario da topbar, subtitulos do hero |
| `--white` | `#FFFFFF` | `#FFFFFF` | Fundo dos itens abertos do accordion (`.acc__item.is-open`) |
| `--red` | `#C0392B` | `#C0392B` | Variavel declarada, nao utilizada no CSS entregue |
| `--text` | `#1d2330` | `#1d2330` | Cor base de texto em fundos claros |
| `--text-soft` | `#4e5668` | `#4e5668` | Paragrafos secundarios, descricoes, corpo do impact |
| `--text-mute` | `#8a8f9d` | `#8a8f9d` | Labels, meta informacoes, texto terciario |
| `--radius` | `2px` | `2px` | Border-radius universal: botoes, cards, inputs, imagens |
| `--serif` | `'Cormorant Garamond', 'Times New Roman', serif` | idem | Titulos editoriais, headlines, citacoes, wordmark |
| `--sans` | `'DM Sans', system-ui, -apple-system, sans-serif` | idem | Body, labels, botoes, navegacao, UI em geral |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | idem | Curva de easing global — usada em reveals, navegacao, clip-paths, accordions |
| `--dur` | `600ms` | `600ms` | Variavel de duracao declarada, usada esporadicamente |

**Curva de easing secundaria (cookie banner):** `--ck-ease-out: cubic-bezier(0.16, 1, 0.3, 1)` — mesma curva do site, replicada no escopo do banner.

**Easing terciaria (WhatsApp bubble):** `cubic-bezier(0.19, 1, 0.22, 1)` — transicao do balao de mensagem.

**Easing quaternaria (toggle cookie):** `280ms cubic-bezier(0.4, 0, 0.2, 1)` — padrao Material Design para toggles e botoes do banner.

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Familia | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|-----------------------|---------|------|---------------|-------------|----------------|-----------|-----|
| `body` | DM Sans | 400 | 16px | 1.55 | normal | none | var(--text) |
| `.hero__title` | Cormorant Garamond | 500 | clamp(38px, 5.5vw, 82px) | 0.95 | -0.02em | none | var(--ivory) |
| `.hero__title em` | Cormorant Garamond | 300 (italic) | herda | herda | herda | none | var(--ivory-2) |
| `.hero__title .gold` | Cormorant Garamond | 400 (italic) | herda | herda | herda | none | var(--gold) |
| `.hero__sub` | DM Sans | 400 | 16px | 1.6 | normal | none | rgba(245,242,236,0.72) |
| `.eyebrow` | DM Sans | 500 | 11px | normal | 0.22em | uppercase | var(--gold) |
| `.section-title` | Cormorant Garamond | 500 | clamp(34px, 4vw, 56px) | 1.05 | -0.01em | none | var(--navy-deep) |
| `.section-title.light` | Cormorant Garamond | 500 | herda | herda | herda | none | var(--ivory) |
| `.gold-italic` | Cormorant Garamond | 400 (italic) | herda | herda | herda | none | var(--gold) |
| `.section-sub` | DM Sans | 400 | 16px | normal | normal | none | var(--text-soft) |
| `.btn` | DM Sans | 500 | 13px | normal | 0.14em | uppercase | varia |
| `.nav__wordmark-top` | Cormorant Garamond | 600 | 20px | 1 | 0.01em | none | var(--navy-deep) |
| `.nav__wordmark-bot` | DM Sans | 500 | 10px | normal | 0.4em | uppercase | var(--navy) |
| `.nav__links a` | DM Sans | 500 | 13px | normal | 0.08em | none | var(--navy-deep) |
| `.topbar` | DM Sans | 400 | 12px | normal | 0.08em | none | var(--ivory) |
| `.topbar__item` | DM Sans | 400 | 12px | normal | 0.08em | none | var(--ivory-2) |
| `.impact__kicker` | Cormorant Garamond | 400 (italic) | 22px | normal | normal | none | var(--text-soft) |
| `.impact__headline` | Cormorant Garamond | 500 | clamp(30px, 3.2vw, 44px) | 1.08 | normal | none | var(--navy-deep) |
| `.impact__headline.light` | Cormorant Garamond | 500 | herda | herda | herda | none | var(--ivory) |
| `.impact__body` | DM Sans | 400 | 16px | 1.7 | normal | none | var(--text-soft) |
| `.impact__checks li` | DM Sans | 400 | 14px | normal | normal | none | rgba(245,242,236,0.88) |
| `.impact__checks li span` | Cormorant Garamond | 300 (italic) | 18px | normal | normal | none | var(--gold) |
| `.acc__num` | Cormorant Garamond | 300 (italic) | 32px -> 56px | 1 | normal | none | var(--gold) |
| `.acc__title` | Cormorant Garamond | 500 | clamp(24px, 2.4vw, 34px) | normal | normal | none | var(--navy-deep) |
| `.acc__tag` | DM Sans | 700 | 9px | normal | 0.18em | uppercase | var(--navy-deep) |
| `.acc__desc` | DM Sans | 400 | 15px | 1.7 | normal | none | var(--text-soft) |
| `.acc__list li` | DM Sans | 400 | 14px | normal | normal | none | var(--navy-deep) |
| `.marquee__track` | Cormorant Garamond | 400 | 28px | normal | 0.08em | none | var(--gold) |
| `.delight__tag` | DM Sans | 500 | 10px | normal | 0.25em | uppercase | var(--gold) |
| `.delight__card figcaption` | DM Sans | 400 | 14px | 1.4 | normal | none | var(--ivory) |
| `.about__portrait figcaption strong` | Cormorant Garamond | 500 | 20px | normal | normal | none | var(--gold) |
| `.about__portrait figcaption span` | DM Sans | 400 | 11px | normal | 0.12em | uppercase | rgba(245,242,236,0.6) |
| `.about__monogram` | Cormorant Garamond | 300 (italic) | 100px | normal | -0.03em | none | rgba(201,168,76,0.08) |
| `.about__body p` | DM Sans | 400 | 16px | 1.75 | normal | none | rgba(245,242,236,0.78) |
| `.review-card__text` | Cormorant Garamond | 400 (italic) | clamp(20px, 1.8vw, 26px) | 1.45 | normal | none | var(--ivory) |
| `.review-card__name` | DM Sans | 500 | 15px | normal | normal | none | var(--ivory) |
| `.review-card__time` | DM Sans | 400 | 12px | normal | normal | none | rgba(245,242,236,0.5) |
| `.reviews__google strong` | Cormorant Garamond | 500 | 26px | 1 | normal | none | var(--gold) |
| `.faq__head` | Cormorant Garamond | 500 | clamp(18px, 1.5vw, 22px) | normal | normal | none | var(--navy-deep) |
| `.faq__body > p` | DM Sans | 400 | 16px | 1.7 | normal | none | var(--text-soft) |
| `.location__addr` | Cormorant Garamond | 400 (italic) | 20px | 1.5 | normal | none | var(--navy-deep) |
| `.location__info dt` | DM Sans | 600 | 11px | normal | 0.18em | uppercase | var(--navy) |
| `.location__info dd` | DM Sans | 400 | 14px | 1.5 | normal | none | var(--navy-deep) |
| `.cta__body` | DM Sans | 400 | 16px | 1.7 | normal | none | rgba(245,242,236,0.75) |
| `.cta__line-lbl` | DM Sans | 500 | 11px | normal | 0.2em | uppercase | var(--gold) |
| `.cta__line-val` | Cormorant Garamond | 500 | 20px | normal | normal | none | var(--ivory) |
| `.cta__form-head h3` | Cormorant Garamond | 500 | 24px | normal | normal | none | var(--ivory) |
| `.cta__form-head span` | DM Sans | 400 | 11px | normal | 0.15em | uppercase | var(--gold) |
| `.field label` | DM Sans | 500 | 11px | normal | 0.15em | uppercase | var(--gold) |
| `.field input/textarea` | DM Sans | 400 | 14px | normal | normal | none | var(--ivory) |
| `.footer__col h4` | DM Sans | 500 | 11px | normal | 0.25em | uppercase | var(--gold) |
| `.footer__col a` | DM Sans | 400 | 14px | normal | normal | none | rgba(245,242,236,0.7) |
| `.footer__tag` | Cormorant Garamond | 400 (italic) | 18px | 1.4 | normal | none | rgba(245,242,236,0.7) |
| `.footer-copyright` | DM Sans | 400 | 0.75rem (12px) | normal | normal | none | rgba(255,255,255,0.75) |
| `.hero__meta-item strong` | Cormorant Garamond | 500 | 32px | 1 | normal | none | var(--gold) |
| `.hero__meta-item span` | DM Sans | 400 | 10px | 1.4 | 0.08em | none | rgba(245,242,236,0.6) |
| `.hero__badge strong` | DM Sans | 500 | 13px | normal | 0.08em | uppercase | var(--navy-deep) |
| `.hero__badge small` | DM Sans | 400 | 11px | normal | 0.05em | none | var(--text-soft) |
| `.hero__vmark` | DM Sans | 400 | 10px | normal | 0.4em | uppercase | rgba(245,242,236,0.45) |
| `.drawer__link` | Cormorant Garamond | 400 | 26px | normal | normal | none | var(--ivory) |
| `.drawer__contact span:first-child` | Cormorant Garamond | 400 | 20px | normal | normal | none | var(--gold) |

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor rgba() | Uso Especifico | Contexto |
|--------------|----------------|----------|
| `rgba(201, 168, 76, 0.18)` | Bordas do accordion, FAQ, separadores horizontais | `--navy-line` |
| `rgba(201, 168, 76, 0.14)` | Variavel `--gold-soft`, nao usada diretamente | — |
| `rgba(201, 168, 76, 0.15)` | Border-bottom da topbar | `.topbar` |
| `rgba(201, 168, 76, 0.25)` | Border-left do item de endereco na topbar; borda do card de review; borda do Google badge; borda do retrato about | multiplos |
| `rgba(201, 168, 76, 0.2)` | Borda do input em focus; borda do form CTA; separadores da meta do hero; borda do icone do accordion aberto; separador dos checks do impact | multiplos |
| `rgba(201, 168, 76, 0.35)` | Borda dos botoes de navegacao do carrossel de reviews | `.reviews__btn` |
| `rgba(201, 168, 76, 0.3)` | Cor dos dots inativos do carrossel de reviews | `.reviews__dots button` |
| `rgba(201, 168, 76, 0.04)` | Hover do cabecalho do accordion; hover das linhas de contato CTA | `.acc__head:hover`, `.cta__line:hover` |
| `rgba(201, 168, 76, 0.5)` | Animacao `pulse` — shadow inicial | `.dot-pulse` |
| `rgba(201, 168, 76, 0.06)` | Radial gradient no hero left; marca dagua das aspas em reviews | `.hero__left`, `.reviews::before` |
| `rgba(201, 168, 76, 0.08)` | Cor do monograma decorativo about | `.about__monogram` |
| `rgba(245, 242, 236, 0.72)` | Subtitulo do hero | `.hero__sub` |
| `rgba(245, 242, 236, 0.75)` | Corpo do CTA; corpo do impact solve | `.cta__body`, `.impact__body.light` |
| `rgba(245, 242, 236, 0.78)` | Paragrafos do about | `.about__body p` |
| `rgba(245, 242, 236, 0.88)` | Itens da lista de checks do impact | `.impact__checks li` |
| `rgba(245, 242, 236, 0.6)` | Meta text do hero; span do caption do retrato | `.hero__meta-item span` |
| `rgba(245, 242, 236, 0.45)` | Watermark vertical do hero | `.hero__vmark` |
| `rgba(245, 242, 236, 0.5)` | Texto secundario do drawer | `.drawer__contact span:last-child` |
| `rgba(245, 242, 236, 0.7)` | Links do footer; count das reviews | `.footer__col a`, `.reviews__count` |
| `rgba(245, 242, 236, 0.35)` | Borda do botao ghost hero | `.btn--ghost` |
| `rgba(13, 27, 46, 0.2)` | Sombra do logo nav; gradiente do overlay da foto hero | `.nav__mark`, `.hero__photo-overlay` |
| `rgba(13, 27, 46, 0.85)` | Overlay do drawer; gradiente do card delight | `.drawer-overlay`, `.delight__card::after` |
| `rgba(13, 27, 46, 0.4)` | Sombra do mapa | `.location__map` |
| `rgba(13, 27, 46, 0.1)` | Borda dotted da lista do accordion | `.acc__list li` |
| `rgba(13, 27, 46, 0.25)` | Borda do botao ghost-dark | `.btn--ghost-dark` |
| `rgba(255, 255, 255, 0.1)` | Border-top do footer-bottom | `.footer-bottom` |
| `rgba(255, 255, 255, 0.75)` | Texto do footer-bottom (copyright, legal links) | `.footer-copyright`, `.footer-legal-links` |
| `rgba(0, 0, 0, 0.1)` | Sombra do card delight; borda do whatsapp message | `.delight__card`, `#whatsapp-message` |
| `rgba(0, 0, 0, 0.22)` | Sombra do banner de cookies | `.ck-banner` |
| `rgba(0, 0, 0, 0.55)` | Overlay do modal de cookies | `.ck-modal__overlay` |
| `rgba(0, 0, 0, 0.35)` | Sombra do badge do hero | `.hero__badge` |
| `rgba(37, 211, 102, 0.4)` | Sombra do botao WhatsApp | `.wa-float`, `.whatsapp-float` |

### 1.4 Estilo Geral

A arquitetura visual e construida sobre uma filosofia de **contraste termico**: secoes escuras (navy-deep #0D1B2E) alternam com secoes claras (ivory #F5F2EC) em ritmo previsivel — hero (escuro) -> impact (claro) -> areas (claro) -> marquee (escuro) -> delight (claro) -> about (escuro) -> reviews (escuro) -> FAQ (claro) -> localizacao (claro, mas com ivory-2 #ECE6D8) -> CTA (escuro) -> footer (escuro). O container base e `max-width: 1360px` com padding horizontal de `36px` (desktop) e `20px` (mobile). O espacamento vertical e fluido: `clamp(80px, 10vh, 140px)` ou `clamp(100px, 12vh, 160px)`, nunca valores fixos arbitrarios. O dark mode nao existe como toggle — ele e a *condicao padrao* de metade do site, criando uma inversao filosofica onde a escuridao representa autoridade e serenidade, nao mero estilo noturno. O principio visual dominante e a **linha dourada vertical** como fio condutor: aparece no hero (`hero__gold-line`), no about (`about__gold-line`), e como bordas left/border-top em badges e cards — unificando verticalmente o scroll.


---

## 2. LAYOUT — SECAO POR SECAO

### SECAO 0 — TOPBAR

**Estrutura:**
```html
<div class="topbar">
  <div class="topbar__inner">
    <div class="topbar__left">
      <span class="topbar__item"><span class="dot-pulse"></span> Atendimento Criminal 24h / 7 dias</span>
    </div>
    <div class="topbar__right">
      <a href="https://wa.me/5521972742109" class="topbar__item" target="_blank" rel="noopener noreferrer">... (21) 97274-2109</a>
      <a href="https://maps.google.com/..." class="topbar__item topbar__item--sep" target="_blank" rel="noopener noreferrer">R. Campo Grande, 1014 · Sala 326 — RJ</a>
    </div>
  </div>
</div>
```

**Fundo:**
- Layer 0 — base: `background: var(--navy-deep)` (#0D1B2E)
- Layer 1 — separador: `border-bottom: 1px solid rgba(201, 168, 76, 0.15)`
- Layer 2 — conteudo: flex, `max-width: 1360px`, `padding: 10px 36px`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Pulsador | `.dot-pulse` | inline | 8x8px | `border-radius: 50%; background: var(--gold); box-shadow: 0 0 0 0 rgba(201,168,76,0.6); animation: pulse 1.8s infinite` |
| Separador | `.topbar__item--sep` | inline | auto | `border-left: 1px solid rgba(201,168,76,0.25); padding-left: 22px` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| `pulse` | `box-shadow: 0 0 0 0 rgba(201,168,76,0.5)` | `box-shadow: 0 0 0 10px rgba(201,168,76,0)` | 1.8s | ease | load | 0ms |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.topbar__item` | :hover | — | — | — | `color: var(--gold)` | 200ms ease |

**Diferenciador Visual:** A topbar nao e apenas informativa — o `dot-pulse` verde-dourado transforma informacao funcional em sinal de vida. A prova tecnica: `animation: pulse 1.8s infinite` com `box-shadow` expandido de 0 a 10px em rgba(201,168,76,0).

---

### SECAO 1 — NAVBAR

**Estrutura:**
```html
<header class="nav" id="nav">
  <div class="nav__inner">
    <a href="#home" class="nav__brand" aria-label="...">
      <span class="nav__mark"><img src="..." srcset="..." sizes="52px" alt="Monograma CP" width="52" height="52" /></span>
      <span class="nav__wordmark">
        <span class="nav__wordmark-top">Camilo <span class="amp">&amp;</span> Pessanha</span>
        <span class="nav__wordmark-bot">Advocacia</span>
      </span>
    </a>
    <nav class="nav__links" aria-label="Navegacao principal">...</nav>
    <a href="https://wa.me/5521972742109" class="btn btn--gold nav__cta" target="_blank" rel="noopener noreferrer">Fale conosco <svg>...</svg></a>
    <button class="nav__burger" id="navBurger" aria-label="Abrir menu"><span></span><span></span><span></span></button>
  </div>
</header>
```

**Fundo:**
- Estado default: `background: var(--ivory)` (#F5F2EC), `border-bottom: 1px solid transparent`
- Estado scrolled: `background: rgba(13, 20, 40, 0.95); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-color: rgba(201, 168, 76, 0.2)`
- Position: `sticky; top: 0; z-index: 40`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Logo marca | `.nav__mark` | inline | 52x52px | `border-radius: 2px; overflow: hidden; box-shadow: 0 4px 16px rgba(13,27,46,0.2)` |
| Wordmark top | `.nav__wordmark-top` | block | auto | `font-family: var(--serif); font-size: 20px; font-weight: 600; color: var(--navy-deep); letter-spacing: 0.01em` |
| Ampersand | `.nav__wordmark-top .amp` | inline | auto | `color: var(--gold); font-style: italic; font-weight: 400` |
| Wordmark bot | `.nav__wordmark-bot` | block | auto | `font-family: var(--sans); font-size: 10px; letter-spacing: 0.4em; text-transform: uppercase; color: var(--navy); margin-top: 4px` |
| Links | `.nav__links a` | flex | auto | `font-size: 13px; font-weight: 500; letter-spacing: 0.08em; color: var(--navy-deep); padding: 6px 0` |
| Burger | `.nav__burger` | none (desktop) / flex (mobile) | auto | `flex-direction: column; gap: 5px; padding: 10px` |
| Burger spans | `.nav__burger span` | block | 22x1.5px | `background: var(--navy-deep); transition: background 200ms ease` |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.nav__links a` | :hover | — | — | — | `color: var(--gold)` | 200ms ease |
| `.nav__links a::after` | default | `width: 0; height: 1px; background: var(--gold)` | — | — | — | — |
| `.nav__links a::after` | :hover | `width: 100%` | — | — | — | 280ms var(--ease) |
| `.nav` | scrolled | — | — | `border-color: rgba(201,168,76,0.2)` | `background: rgba(13,20,40,0.95); backdrop-filter: blur(14px)` | 300ms ease |
| `.nav__wordmark-top`, `.nav__wordmark-bot`, `.nav__links a` | scrolled | — | — | — | `color: var(--ivory)` | 300ms ease |
| `.nav__burger span` | scrolled | — | — | — | `background: var(--ivory)` | 200ms ease |
| `.btn--gold` | :hover | `translateY(-1px)` | — | — | `background: var(--gold-hover)` | 250ms ease |

**Diferenciador Visual:** A navbar nao simplesmente muda de cor no scroll — ela inverte todo o sistema cromatico de navy/ivory via `.nav.is-scrolled`, incluindo o `backdrop-filter: blur(14px)` que cria uma sensacao de vidro fume sobre o conteudo. A prova tecnica: transicoes simultaneas de `background`, `border-color`, `backdrop-filter` e `color` em 300ms.

---

### SECAO 2 — HERO (Split 55/45)

**Estrutura:**
```html
<section class="hero" id="home">
  <div class="hero__grid">
    <div class="hero__left">
      <span class="hero__gold-line" aria-hidden="true"></span>
      <div class="hero__left-inner">
        <p class="eyebrow"><span class="eyebrow__rule"></span> Advocacia estrategica · Campo Grande — RJ</p>
        <h1 class="hero__title">Defesa <em>firme.</em><br>Estrategia <em>serena.</em><br>Comprometimento <span class="gold">em cada etapa.</span></h1>
        <p class="hero__sub">...</p>
        <div class="hero__ctas">
          <a href="https://wa.me/5521972742109" class="btn btn--gold" target="_blank" rel="noopener noreferrer">Fale pelo WhatsApp 24h <svg>...</svg></a>
          <a href="#areas" class="btn btn--ghost">Ver areas de atuacao</a>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-item"><strong>★★★★★</strong><span>+30 avaliacoes<br>5 estrelas no Google</span></div>
          <div class="hero__meta-sep" aria-hidden="true"></div>
          <div class="hero__meta-item"><strong>24h</strong><span>Plantao criminal<br>todos os dias</span></div>
          <div class="hero__meta-sep" aria-hidden="true"></div>
          <div class="hero__meta-item"><strong>11+</strong><span>Servicos juridicos<br>sob um mesmo teto</span></div>
        </div>
      </div>
    </div>
    <div class="hero__right">
      <div class="hero__photo" id="heroPhoto">
        <img class="hero__photo-slide hero__photo-slide--active" src="..." alt="Dr. Rodrigo" width="800" height="1000" fetchpriority="high">
        <img class="hero__photo-slide" src="..." alt="Dr. Camilo" width="800" height="1000" loading="lazy">
        <div class="hero__photo-overlay" aria-hidden="true"></div>
      </div>
      <div class="hero__badge" data-anim="up" data-delay="800">...</div>
      <div class="hero__vmark" aria-hidden="true"><span>CP</span><span>EST. 2023</span><span>CAMPO GRANDE · RJ</span></div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base (left): `background: radial-gradient(ellipse at top left, rgba(201,168,76,0.06), transparent 60%), var(--navy-deep)`
- Layer 0 — base (right): `background: var(--navy)` (#1A2B47)
- Layer 1 — overlay foto: `.hero__photo-overlay` com `background: linear-gradient(to right, var(--navy-deep) 0%, rgba(13,27,46,0.2) 20%, rgba(13,27,46,0) 45%, rgba(13,27,46,0.1) 100%)`
- Layer 2 — conteudo: z-index natural

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.hero__grid` | relative | min-height: calc(100vh - 120px) | `display: grid; grid-template-columns: 55fr 45fr` |
| Left col | `.hero__left` | relative | auto | `padding: clamp(30px,5vh,60px) clamp(40px,6vw,110px); display: flex; align-items: center` |
| Gold line | `.hero__gold-line` | absolute | 1px x 80% vertical | `left: clamp(24px,3vw,50px); top: 10%; bottom: 10%; background: linear-gradient(to bottom, transparent, var(--gold) 15%, var(--gold) 85%, transparent); transform: scaleY(0); transform-origin: top` |
| Right col | `.hero__right` | relative | auto | `background: var(--navy); overflow: hidden` |
| Foto container | `.hero__photo` | absolute | inset: 0 | `clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%); animation: clipIn 1400ms var(--ease) forwards; opacity: 0` |
| Badge | `.hero__badge` | absolute | auto | `left: 18%; bottom: 48px; background: var(--ivory); color: var(--navy-deep); padding: 14px 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.35); border-left: 3px solid var(--gold); z-index: 2; max-width: 280px` |
| Badge dot | `.hero__badge-dot` | inline | 10x10px | `border-radius: 50%; background: #2ecc71; box-shadow: 0 0 0 4px rgba(46,204,113,0.2); animation: pulse-g 1.6s infinite` |
| Vmark | `.hero__vmark` | absolute | auto | `right: 24px; top: 50%; transform: translateY(-50%) rotate(90deg); transform-origin: right center; font-size: 10px; letter-spacing: 0.4em; color: rgba(245,242,236,0.45); z-index: 2` |
| Vmark separador | `.hero__vmark span::after` | pseudo | auto | `content: "◆"; margin-left: 20px; color: var(--gold)` |
| Meta separador | `.hero__meta-sep` | flex | 1px | `background: rgba(201,168,76,0.2)` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| `goldLineIn` | `transform: scaleY(0)` | `transform: scaleY(1)` | 900ms | ease-out | load | 200ms |
| `heroFadeIn` | `opacity: 0; transform: translateY(30px)` | `opacity: 1; transform: none` | 800ms | var(--ease) | load | 100ms (title), 200ms (sub), 300ms (ctas), 400ms (meta) |
| `clipIn` | `opacity: 0; clip-path: polygon(25% 0, 100% 0, 100% 100%, 15% 100%)` | `opacity: 1; clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%)` | 1400ms | var(--ease) | load | 0ms |
| `photoIn` | `opacity: 0; transform: scale(1.05)` | `opacity: 1; transform: scale(1)` | 1200ms | ease-out | load | 400ms |
| `pulse-g` | `box-shadow: 0 0 0 4px rgba(46,204,113,0.2)` | `box-shadow: 0 0 0 8px rgba(46,204,113,0.05)` | 1.6s | ease | load | 0ms (infinito) |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.btn--gold` | :hover | `translateY(-1px)` | — | — | `background: var(--gold-hover)` | 250ms ease |
| `.btn--ghost` | :hover | — | — | `border-color: var(--gold)` | `color: var(--gold)` | 250ms ease |
| `.hero__photo-slide` | transicao | — | — | — | `opacity: 0 -> 1` | 1500ms ease-in-out |

**Diferenciador Visual:** O hero nao e simetrico — a coluna direita usa `clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%)` para criar um corte diagonal que "morde" 10% da esquerda, unindo visualmente as duas metades. A linha dourada vertical (`hero__gold-line`) nasce do topo com `scaleY(0)` e expande para `scaleY(1)` em 900ms, funcionando como um eixo de simetria deslocado. A watermark rotacionada (`hero__vmark`) e um padrao editorial de revista de luxo raro em sites de advocacia.


---

### SECAO 3 — IMPACT (Pain + Solution)

**Estrutura:**
```html
<section class="impact">
  <div class="impact__inner">
    <div class="impact__label" data-anim="up"><span class="rule"></span> O momento em que voce nos liga</div>
    <div class="impact__grid">
      <div class="impact__pain" data-anim="up">...</div>
      <div class="impact__solve" data-anim="up" data-delay="150">...</div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--ivory)` (#F5F2EC)
- Layer 1 — separador: `border-top: 1px solid var(--navy-line)` na grid
- Layer 2 — solve: `background: var(--navy-deep)` com `::before` de 3px dourado no topo-esquerdo

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.impact__grid` | relative | auto | `display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: stretch; border-top: 1px solid var(--navy-line)` |
| Pain | `.impact__pain` | block | auto | `padding: 60px clamp(32px,5vw,80px) 60px 0` |
| Solve | `.impact__solve` | relative | auto | `background: var(--navy-deep); color: var(--ivory); padding-left: clamp(32px,5vw,80px); padding-right: clamp(32px,5vw,80px); margin-top: -1px` |
| Solve accent | `.impact__solve::before` | absolute | 3x80px | `top: 0; left: 0; background: var(--gold)` |
| Checks list | `.impact__checks` | block | auto | `border-top: 1px solid rgba(201,168,76,0.2); padding: 32px 0 0; margin: 32px 0 0; display: flex; flex-direction: column; gap: 14px` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma propria — herda `.reveal` global (`[data-anim]`) | `opacity: 0; transform: translateY(30px)` | `opacity: 1; transform: none` | 800ms | var(--ease) | scroll (IntersectionObserver) | 0ms (pain), 150ms (solve) |

**Micro-interacoes:** Nenhuma micro-interacao especifica nesta secao alem do reveal scroll.

**Diferenciador Visual:** A grid de duas colunas com `gap: 0` cria uma juncao perfeita sem espaco entre dor e solucao — a secao solve invade 1px para cima (`margin-top: -1px`) para eliminar qualquer linha branca entre as metades. O acento dourado de 3pxx80px no canto superior esquerdo do solve (`::before`) e uma assinatura arquitetonica que indica "aqui comeca a resposta".

---

### SECAO 4 — AREAS (Accordion)

**Estrutura:**
```html
<section class="areas" id="areas">
  <div class="areas__inner">
    <header class="section-head" data-anim="up">...</header>
    <ul class="acc" id="acc">
      <li class="acc__item is-open" data-area="criminal">
        <button class="acc__head">
          <span class="acc__num">01</span>
          <div class="acc__thumb"><img src="..." alt="" width="48" height="48"></div>
          <span class="acc__title">Direito Criminal <span class="acc__tag">24h</span></span>
          <span class="acc__icon" aria-hidden="true"></span>
        </button>
        <div class="acc__body">
          <div class="acc__grid">
            <div class="acc__desc">...</div>
            <ul class="acc__list">...</ul>
            <div class="acc__media"><img src="..." alt="..." width="400" height="300" loading="lazy"></div>
          </div>
        </div>
      </li>
      <!-- 4 items adicionais -->
    </ul>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--ivory)`
- Layer 1 — bordas: `border-top: 1px solid var(--navy-line)` e `border-bottom: 1px solid var(--navy-line)` em cada `.acc__item`
- Layer 2 — item aberto: `background: var(--white)` (#FFFFFF)

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Acc head | `.acc__head` | grid | auto | `display: grid; grid-template-columns: 80px 60px 1fr 60px; align-items: center; padding: 24px; gap: 20px; text-align: left` |
| Thumb | `.acc__thumb` | block | 60x40px | `border-radius: 2px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid rgba(201,168,76,0.2)` |
| Numero | `.acc__num` | block | auto | `font-family: var(--serif); font-style: italic; font-size: 32px; font-weight: 300; color: var(--gold); transition: all 300ms ease` |
| Numero aberto | `.acc__item.is-open .acc__num` | block | auto | `font-size: 56px` |
| Titulo | `.acc__title` | flex | auto | `font-family: var(--serif); font-size: clamp(24px,2.4vw,34px); font-weight: 500; color: var(--navy-deep); display: flex; align-items: center; gap: 14px` |
| Tag | `.acc__tag` | inline | auto | `background: var(--gold); color: var(--navy-deep); font-size: 9px; padding: 4px 10px; letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; border-radius: 2px` |
| Icone | `.acc__icon` | block | 32x32px | `position: relative; border: 1px solid var(--gold); border-radius: 50%; transition: all 300ms ease; justify-self: end` |
| Icone horiz | `.acc__icon::before` | pseudo | 12x1px | `background: var(--gold); left: 50%; top: 50%; transform: translate(-50%,-50%)` |
| Icone vert | `.acc__icon::after` | pseudo | 1x12px | `background: var(--gold); left: 50%; top: 50%; transform: translate(-50%,-50%)` |
| Icone aberto | `.acc__item.is-open .acc__icon` | block | 32x32px | `background: var(--gold)` |
| Icone aberto barras | `.acc__item.is-open .acc__icon::before/::after` | pseudo | — | `background: var(--navy-deep)` |
| Icone aberto vert | `.acc__item.is-open .acc__icon::after` | pseudo | — | `transform: translate(-50%,-50%) scaleY(0)` |
| Body | `.acc__body` | grid | auto | `display: grid; grid-template-rows: 0fr; transition: grid-template-rows 500ms var(--ease)` |
| Body aberto | `.acc__item.is-open .acc__body` | grid | auto | `grid-template-rows: 1fr` |
| Grid interno | `.acc__grid` | grid | auto | `display: grid; grid-template-columns: 100px 1fr 0.8fr 1fr; padding: 0 24px 40px; gap: 30px; align-items: center` |
| Grid offset | `.acc__grid > *:first-child` | grid | auto | `grid-column-start: 2` |
| Media | `.acc__media` | block | 220px height | `overflow: hidden; border-radius: var(--radius); box-shadow: 0 10px 30px rgba(0,0,0,0.1); opacity: 0; transform: scale(1.1); transition: all 800ms var(--ease) 200ms` |
| Media aberta | `.acc__item.is-open .acc__media` | block | 220px | `opacity: 1; transform: scale(1)` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Stagger entrada | `.acc__item--hidden` | removida | 500ms | ease-out | scroll (IO) | i x 120ms |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.acc__head` | :hover | — | — | — | `background: rgba(201,168,76,0.04)` | 300ms ease |
| `.acc__icon` | :hover | — | — | — | — | 300ms ease |

**Diferenciador Visual:** O accordion usa `grid-template-rows: 0fr -> 1fr` para animar a altura sem JavaScript medir conteudo — uma tecnica CSS moderna que elimina forced reflow. O numero da area expande de 32px para 56px em italico serifado quando aberto, transformando um mero indice em elemento decorativo dominante. A media scale de 1.1 para 1.0 com delay de 200ms cria um efeito de "settling" suave.

---

### SECAO 5 — MARQUEE

**Estrutura:**
```html
<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    <span>CAMILO &amp; PESSANHA</span><span class="marquee__dot">◆</span>
    <span>DIREITO CRIMINAL</span><span class="marquee__dot">◆</span>
    <!-- 14 spans duplicados para loop infinito -->
  </div>
</div>
```

**Fundo:**
- Layer 0 — base: `background: var(--navy-deep)`
- Layer 1 — bordas: `border-top: 1px solid rgba(201, 168, 76, 0.25); border-bottom: 1px solid rgba(201, 168, 76, 0.25)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Track | `.marquee__track` | flex | auto | `display: flex; gap: 40px; white-space: nowrap; animation: marquee 40s linear infinite; font-family: var(--serif); font-size: 28px; font-weight: 400; letter-spacing: 0.08em` |
| Dot | `.marquee__dot` | inline | auto | `color: var(--gold); opacity: 0.5; font-size: 14px; display: flex; align-items: center` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| `marquee` | `transform: translateX(0)` | `transform: translateX(-50%)` | 40s | linear | load | 0ms (infinito) |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.marquee` | :hover | — | — | — | `animation-play-state: paused` | — |

**Diferenciador Visual:** O marquee nao usa JavaScript — e puramente CSS com `translateX(-50%)` sobre conteudo duplicado. O pause no hover (`animation-play-state: paused`) e um detalhe de respeito ao usuario raro em tickers automaticos. A tipografia serifada (Cormorant Garamond) em 28px com tracking de 0.08em evita a sensacao de "ticker de noticias" e aproxima-se de um letreiro de loja de luxo.

---

### SECAO 6 — DELIGHT (Imagery Row)

**Estrutura:**
```html
<section class="delight">
  <div class="delight__inner">
    <header class="section-head delight__head" data-anim="up">...</header>
    <div class="delight__grid">
      <figure class="delight__card delight__card--tall">...</figure>
      <figure class="delight__card">...</figure>
      <figure class="delight__card">...</figure>
      <figure class="delight__card delight__card--wide">...</figure>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--ivory)`
- Layer 1 — overlay cards: `.delight__card::after` com `background: linear-gradient(to top, rgba(13, 27, 46, 0.85), transparent 55%)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Grid | `.delight__grid` | grid | auto | `display: grid; grid-template-columns: repeat(6, 1fr); grid-auto-rows: 220px; gap: 18px` |
| Card padrao | `.delight__card` | relative | span 2 col, span 1 row | `margin: 0; overflow: hidden; grid-column: span 2; grid-row: span 1` |
| Card tall | `.delight__card--tall` | relative | span 2 col, span 2 row | `grid-column: span 2; grid-row: span 2` |
| Card wide | `.delight__card--wide` | relative | span 4 col, span 1 row | `grid-column: span 4; grid-row: span 1` |
| Imagem | `.delight__card img` | block | 100%x100% | `object-fit: cover; transition: transform 900ms var(--ease)` |
| Overlay | `.delight__card::after` | absolute | inset: 0 | `background: linear-gradient(to top, rgba(13,27,46,0.85), transparent 55%); pointer-events: none` |
| Legenda | `.delight__card figcaption` | absolute | left/right: 20px, bottom: 18px | `color: var(--ivory); z-index: 2; font-size: 14px; line-height: 1.4` |
| Tag | `.delight__tag` | inline | auto | `font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 6px` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma propria — herda `.reveal` global | — | — | — | — | — | — |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.delight__card img` | :hover | `scale(1.05)` | — | — | — | 900ms var(--ease) |

**Diferenciador Visual:** O grid usa 6 colunas fracionarias com `grid-auto-rows: 220px`, permitindo uma composicao assimétrica de masonry controlado (tall ocupa 2x2, wide ocupa 4x1) sem masonry JavaScript. O gradiente `::after` e sempre `to top`, garantindo que o texto da legenda nunca precise de sombra adicional — a prova tecnica: `pointer-events: none` no overlay permite que o hover na imagem funcione atraves dele.

---

### SECAO 7 — SOBRE (Split 50/50 sticky)

**Estrutura:**
```html
<section class="about" id="sobre">
  <div class="about__inner">
    <div class="about__media">
      <div class="about__media-sticky">
        <div class="about__stack">
          <figure class="about__portrait about__portrait--a">...</figure>
          <figure class="about__portrait about__portrait--b">...</figure>
        </div>
        <span class="about__gold-line" aria-hidden="true"></span>
        <span class="about__monogram" aria-hidden="true">C &amp; P</span>
      </div>
    </div>
    <div class="about__text">
      <header class="section-head about__head" data-anim="up">...</header>
      <div class="about__body" data-anim="up" data-delay="150">...</div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--navy-deep)`
- Layer 1 — monograma: `color: rgba(201, 168, 76, 0.08)` — watermark tipografica
- Layer 2 — gold line: `background: linear-gradient(to bottom, transparent, var(--gold), transparent)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Inner | `.about__inner` | grid | auto | `display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px,6vw,90px); align-items: flex-start` |
| Media sticky | `.about__media-sticky` | sticky | auto | `position: sticky; top: 100px` |
| Stack | `.about__stack` | grid | auto | `display: grid; grid-template-columns: 1fr 1fr; gap: 16px` |
| Retrato A | `.about__portrait--a` | block | auto | `margin-top: 30px` |
| Retrato B | `.about__portrait--b` | block | auto | `margin-top: 0` |
| Retrato img | `.about__portrait img` | block | 100%x440px | `object-fit: cover; object-position: center 18%` |
| Caption | `.about__portrait figcaption` | block | auto | `padding: 18px 20px; background: var(--navy); border-top: 1px solid rgba(201,168,76,0.25)` |
| Gold line | `.about__gold-line` | absolute | 1px vertical | `left: -20px; top: 60px; bottom: 60px; background: linear-gradient(to bottom, transparent, var(--gold), transparent)` |
| Monograma | `.about__monogram` | absolute | auto | `right: -10px; top: -40px; font-family: var(--serif); font-style: italic; font-size: 100px; font-weight: 300; color: rgba(201,168,76,0.08); pointer-events: none; z-index: 0` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma propria — herda `.reveal` global | — | — | — | — | — | — |

**Micro-interacoes:** Nenhuma.

**Diferenciador Visual:** A coluna de midia usa `position: sticky; top: 100px` enquanto o texto rola, criando um efeito de "parallax light" sem JavaScript. Os retratos sao deslocados verticalmente em 30px (`about__portrait--a`) para criar ritmo visual assimétrico. O monograma "C & P" em 100px italico a 8% de opacidade e uma marca dagua tipografica pura — nao e imagem, e texto renderizado.


---

### SECAO 8 — DEPOIMENTOS (Fade Carousel)

**Estrutura:**
```html
<section class="reviews" id="depoimentos">
  <div class="reviews__inner">
    <header class="section-head center" data-anim="up">
      <p class="eyebrow center"><span class="eyebrow__rule"></span> O que dizem os clientes <span class="eyebrow__rule"></span></p>
      <h2 class="section-title light">...</h2>
      <div class="reviews__google">...</div>
    </header>
    <div class="reviews__stage" id="reviewStage" aria-live="polite"></div>
    <div class="reviews__nav">
      <button class="reviews__btn" id="revPrev" aria-label="Depoimento anterior"><svg>...</svg></button>
      <div class="reviews__dots" id="revDots" role="tablist"></div>
      <button class="reviews__btn" id="revNext" aria-label="Proximo depoimento"><svg>...</svg></button>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--navy)` (#1A2B47)
- Layer 1 — watermark: `.reviews::before` com `content: """; font-size: 500px; color: rgba(201, 168, 76, 0.06)` — aspas gigantes decorativas
- Layer 2 — conteudo: `position: relative; z-index` natural

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Watermark | `.reviews::before` | absolute | auto | `left: -30px; top: -80px; font-family: var(--serif); font-size: 500px; color: rgba(201,168,76,0.06); pointer-events: none; line-height: 1` |
| Google badge | `.reviews__google` | inline-flex | auto | `display: inline-flex; align-items: center; gap: 14px; padding: 12px 22px; background: var(--navy-deep); border: 1px solid rgba(201,168,76,0.25); border-radius: 40px; margin-top: 20px` |
| Stage | `.reviews__stage` | relative | min-height: 450px | `position: relative; min-height: 450px; margin: 60px 0 32px` |
| Card | `.review-card` | absolute | inset: 0 | `position: absolute; inset: 0; background: var(--navy-deep); border: 1px solid rgba(201,168,76,0.2); padding: 40px clamp(30px,5vw,60px); display: flex; flex-direction: column; opacity: 0; transform: translateY(10px); transition: opacity 700ms ease-in-out, transform 700ms ease-in-out; pointer-events: none` |
| Card ativo | `.review-card.is-active` | absolute | inset: 0 | `opacity: 1; transform: none; pointer-events: auto` |
| Stars | `.review-card__stars` | block | auto | `color: var(--gold); font-size: 18px; letter-spacing: 3px; margin-bottom: 20px` |
| Texto | `.review-card__text` | block | auto | `font-family: var(--serif); font-size: clamp(20px,1.8vw,26px); font-weight: 400; line-height: 1.45; color: var(--ivory); font-style: italic; max-width: 720px; text-wrap: pretty` |
| Texto ::before | `.review-card__text::before` | pseudo | auto | `content: """; color: var(--gold); font-size: 1.4em; margin-right: 4px` |
| Texto ::after | `.review-card__text::after` | pseudo | auto | `content: """; color: var(--gold); font-size: 1.4em; margin-left: 2px` |
| Meta | `.review-card__meta` | flex | auto | `margin-top: auto; display: flex; align-items: center; gap: 14px; padding-top: 24px; border-top: 1px solid rgba(201,168,76,0.18)` |
| Avatar | `.review-card__avatar` | flex | 44x44px | `border-radius: 50%; background: var(--gold); color: var(--navy-deep); display: flex; align-items: center; justify-content: center; font-family: var(--serif); font-weight: 600; font-size: 18px` |
| Google tag | `.review-card__g` | flex | auto | `margin-left: auto; display: flex; align-items: center; gap: 8px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.6)` |
| Nav btn | `.reviews__btn` | flex | 40x40px | `border: 1px solid rgba(201,168,76,0.35); border-radius: 50%; color: var(--gold); display: flex; align-items: center; justify-content: center; transition: all 250ms ease` |
| Dots | `.reviews__dots button` | block | 8x8px | `border-radius: 50%; background: rgba(201,168,76,0.3); transition: all 250ms ease; padding: 18px 10px; background-clip: content-box` |
| Dot ativo | `.reviews__dots button.is-active` | block | 24x8px | `background: var(--gold); width: 24px; border-radius: 4px` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma @keyframes — transicao CSS pura | `opacity: 0; transform: translateY(10px)` | `opacity: 1; transform: none` | 700ms | ease-in-out | JS toggle class `.is-active` | 0ms |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.reviews__btn` | :hover | — | — | — | `background: var(--gold); color: var(--navy-deep)` | 250ms ease |
| `.reviews__dots button` | :hover | — | — | — | `background: var(--gold)` | 250ms ease |

**Diferenciador Visual:** O carrossel e um sistema de fade absoluto (`position: absolute; inset: 0`) em vez de slide horizontal — evita layout shift e mantem a tipografia serifada italica estavel. A watermark de aspas em 500px a 6% de opacidade cria uma camada de profundidade tipografica que so e perceptivel em monitores grandes. O dot ativo expande de 8px para 24px de largura com `border-radius: 4px`, transformando circulo em capsula — micro-interacao de estado rara em paginadores.

---

### SECAO 9 — FAQ

**Estrutura:**
```html
<section class="faq" id="faq">
  <div class="faq__inner">
    <header class="section-head" data-anim="up">...</header>
    <ul class="faq__list" id="faqList">
      <li class="faq__item">
        <button class="faq__head"><span>Pergunta</span><span class="faq__icon" aria-hidden="true"></span></button>
        <div class="faq__body"><p>Resposta...</p></div>
      </li>
    </ul>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--ivory)`
- Layer 1 — bordas: `border-top: 1px solid var(--navy-line)` na lista; `border-bottom: 1px solid var(--navy-line)` em cada item

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Head | `.faq__head` | flex | auto | `width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 26px 4px; font-family: var(--serif); font-size: clamp(18px,1.5vw,22px); font-weight: 500; color: var(--navy-deep); text-align: left` |
| Icone | `.faq__icon` | relative | 24x24px | `flex-shrink: 0` |
| Icone barras | `.faq__icon::before/::after` | pseudo | 14x1px / 1x14px | `background: var(--gold); left: 50%; top: 50%; transform: translate(-50%,-50%)` |
| Icone aberto | `.faq__item.is-open .faq__icon::after` | pseudo | — | `transform: translate(-50%,-50%) scaleY(0)` |
| Body | `.faq__body` | grid | auto | `display: grid; grid-template-rows: 0fr; transition: grid-template-rows 400ms var(--ease)` |
| Body aberto | `.faq__item.is-open .faq__body` | grid | auto | `grid-template-rows: 1fr` |
| Body > p | `.faq__body > p` | block | auto | `overflow: hidden; margin: 0; padding: 0 4px 28px; color: var(--text-soft); line-height: 1.7; max-width: 720px` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma propria — transicao CSS | `grid-template-rows: 0fr` | `grid-template-rows: 1fr` | 400ms | var(--ease) | click em `.faq__head` | 0ms |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.faq__head` | :hover | — | — | — | `color: var(--gold)` | 200ms ease |

**Diferenciador Visual:** O FAQ compartilha a mesma tecnica de `grid-template-rows: 0fr` do accordion de areas, mas com duracao mais curta (400ms vs 500ms) porque o conteudo e textual e menor. O icone usa o mesmo padrao de cruz (+) que o accordion, mantendo consistencia semantica entre elementos interativos expansiveis.

---

### SECAO 10 — LOCALIZACAO

**Estrutura:**
```html
<section class="location" id="localizacao">
  <div class="location__inner">
    <div class="location__text">...</div>
    <div class="location__map">
      <iframe src="..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="..."></iframe>
      <div class="location__map-badge">...</div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--ivory-2)` (#ECE6D8)
- Layer 1 — mapa: iframe do Google Maps com `filter: grayscale(0.1) contrast(1.02)`
- Layer 2 — badge: `background: var(--navy-deep); color: var(--ivory); padding: 12px 18px`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Inner | `.location__inner` | grid | auto | `display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center` |
| Endereco | `.location__addr` | block | auto | `font-family: var(--serif); font-style: italic; font-size: 20px; line-height: 1.5; color: var(--navy-deep); margin: 24px 0; padding-left: 20px; border-left: 2px solid var(--gold)` |
| Info grid | `.location__info` | grid | auto | `display: grid; grid-template-columns: 1fr 1fr; gap: 24px 40px; margin: 0 0 32px` |
| Mapa | `.location__map` | relative | aspect-ratio: 4/3.2 | `overflow: hidden; box-shadow: 0 30px 80px -30px rgba(13,27,46,0.4)` |
| Mapa iframe | `.location__map iframe` | block | 100%x100% | `filter: grayscale(0.1) contrast(1.02)` |
| Badge | `.location__map-badge` | absolute | auto | `left: 24px; bottom: 24px; background: var(--navy-deep); color: var(--ivory); padding: 12px 18px; display: flex; align-items: center; gap: 12px; border-left: 3px solid var(--gold)` |

**Animacao:** Nenhuma.

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.location__info a` | :hover | — | — | — | `color: var(--gold)` | 200ms ease |

**Diferenciador Visual:** O endereco usa `border-left: 2px solid var(--gold)` em vez de marcadores de lista — transformando endereco em citacao tipografica. O iframe do Google Maps recebe `filter: grayscale(0.1) contrast(1.02)` para desaturar levemente o mapa e harmoniza-lo com o ivory-2, evitando o choque cromatico dos mapas coloridos do Google.

---

### SECAO 11 — CTA + FORMULARIO

**Estrutura:**
```html
<section class="cta" id="contato">
  <div class="cta__inner">
    <div class="cta__pitch">...</div>
    <form class="cta__form" id="ctaForm" novalidate>
      <div class="cta__form-head"><h3>Envie sua mensagem</h3><span>Resposta em ate 24h uteis</span></div>
      <div class="field"><label for="f-name">Nome completo</label><input type="text" id="f-name" name="name" required placeholder="..."></div>
      <div class="field"><label for="f-email">E-mail</label><input type="email" id="f-email" name="email" required placeholder="..."></div>
      <div class="field-row">
        <div class="field"><label for="f-phone">Telefone / WhatsApp</label><input type="tel" id="f-phone" name="phone" required placeholder="..."></div>
        <div class="field"><label for="f-area">Assunto</label><select id="f-area" name="area">...</select></div>
      </div>
      <div class="field"><label for="f-msg">Descreva seu caso em poucas linhas</label><textarea id="f-msg" name="message" rows="4" placeholder="..."></textarea></div>
      <label class="field-check" for="f-lgpd"><input type="checkbox" id="f-lgpd" name="lgpd" required> <span>Concordo com o tratamento dos meus dados...</span></label>
      <button type="submit" class="btn btn--gold btn--block">Enviar mensagem <svg>...</svg></button>
      <p class="cta__form-note" id="ctaFormNote" hidden>✓ Mensagem registrada. Retornamos em breve.</p>
    </form>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `background: var(--navy-deep)`
- Layer 1 — form: `background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.2); padding: clamp(28px, 4vw, 42px)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Inner | `.cta__inner` | grid | auto | `display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px,6vw,90px); align-items: flex-start; max-width: 1260px` |
| Lines | `.cta__lines` | flex | auto | `display: flex; flex-direction: column; border-top: 1px solid rgba(201,168,76,0.2)` |
| Line item | `.cta__line` | flex | auto | `display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 20px 0; border-bottom: 1px solid rgba(201,168,76,0.2); transition: all 250ms ease` |
| Form | `.cta__form` | flex | auto | `display: flex; flex-direction: column; gap: 18px` |
| Form head | `.cta__form-head` | flex | auto | `display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 20px; margin-bottom: 4px; border-bottom: 1px solid rgba(201,168,76,0.2)` |
| Field | `.field` | flex | auto | `display: flex; flex-direction: column; gap: 6px` |
| Field row | `.field-row` | grid | auto | `display: grid; grid-template-columns: 1fr 1fr; gap: 16px` |
| Input | `.field input, .field select, .field textarea` | block | auto | `background: var(--navy-deep); border: 1px solid rgba(201,168,76,0.2); color: var(--ivory); padding: 14px 16px; font-family: var(--sans); font-size: 14px; transition: border 200ms ease` |
| Input focus | `.field input:focus` | block | auto | `outline: none; border-color: var(--gold)` |
| Placeholder | `.field input::placeholder` | — | — | `color: rgba(245,242,236,0.35)` |
| Checkbox | `.field-check` | flex | auto | `display: flex; align-items: flex-start; gap: 10px; font-size: 12px; color: rgba(245,242,236,0.65); line-height: 1.4` |
| Checkbox input | `.field-check input` | inline | auto | `accent-color: var(--gold); margin-top: 3px` |

**Animacao:** Nenhuma.

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.cta__line` | :hover | — | — | — | `padding-left: 10px; background: rgba(201,168,76,0.04)` | 250ms ease |
| `.field input` | :focus | — | — | `border-color: var(--gold)` | — | 200ms ease |
| `.btn--gold` | :hover | `translateY(-1px)` | — | — | `background: var(--gold-hover)` | 250ms ease |

**Diferenciador Visual:** O formulario nao usa fundo branco sobre escuro — usa `background: var(--navy)` (#1A2B47), criando uma caixa de dialogo flutuante dentro do navy-deep. O checkbox usa `accent-color: var(--gold)` para customizar o nativo do browser sem reinventar o controle. O placeholder em `rgba(245,242,236,0.35)` e deliberadamente baixo para nao competir com labels em 11px uppercase dourado.

---

### SECAO 12 — FOOTER

**Estrutura:**
```html
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__col footer__col--brand">...</div>
    <div class="footer__col"><h4>Areas</h4><ul>...</ul></div>
    <div class="footer__col"><h4>Escritorio</h4><ul>...</ul></div>
    <div class="footer__col footer__col--contact"><h4>Contato</h4><ul class="footer__contact">...</ul></div>
  </div>
  <div class="footer-bottom">
    <div class="footer-credits-left">
      <div class="footer-copyright">© 2026 Camilo &amp; Pessanha Advocacia</div>
      <div class="footer-legal-links">
        <a href="#" id="ck-prefs-link"><span id="cookie-toggle" class="cookie-toggle">...</span> Cookies</a>
        <span class="legal-sep">|</span>
        <a href="termos-e-condicoes.html">Termos e Condicoes</a>
        <span class="legal-sep">|</span>
        <a href="politica-de-privacidade.html">Politica de Privacidade</a>
      </div>
    </div>
    <div class="footer-credits-right">Desenvolvido por <a href="https://www.ag5agencia.com.br" target="_blank" rel="noopener noreferrer">AG5 Agencia</a></div>
  </div>
</footer>
```

**Fundo:**
- Layer 0 — footer: `background: #08121f`
- Layer 1 — footer-bottom: `background: var(--navy-deep); border-top: 1px solid rgba(255, 255, 255, 0.1)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Inner | `.footer__inner` | grid | auto | `display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.4fr; gap: 48px; padding-bottom: 40px` |
| Col h4 | `.footer__col h4` | block | auto | `font-family: var(--sans); font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin: 0 0 20px` |
| Links | `.footer__col a` | inline | auto | `font-size: 14px; color: rgba(245,242,236,0.7); transition: color 200ms ease` |
| Brand | `.footer__brand` | block | 130px width | `display: block; width: 130px; margin-bottom: 12px; border-radius: 2px; overflow: hidden` |
| Tagline | `.footer__tag` | block | auto | `font-family: var(--serif); font-style: italic; font-size: 18px; color: rgba(245,242,236,0.7); line-height: 1.4; margin: 0` |
| Bottom | `.footer-bottom` | flex | auto | `display: flex; justify-content: space-between; align-items: center; max-width: 1360px; margin: 0 auto; padding: 20px 36px` |
| Copyright | `.footer-copyright` | block | auto | `font-size: 0.75rem; color: rgba(255,255,255,0.75)` |
| Legal links | `.footer-legal-links` | flex | auto | `display: flex; flex-wrap: wrap; align-items: center; font-size: 11px; color: rgba(255,255,255,0.75)` |
| Legal a | `.footer-legal-links a` | inline | auto | `color: inherit; text-decoration: none; transition: color 0.2s ease; padding: 8px 0; display: inline-block` |
| Separator | `.legal-sep` | inline | auto | `margin: 0 10px; opacity: 0.3` |
| Credits right | `.footer-credits-right` | block | auto | `font-size: 0.75rem; color: rgba(255,255,255,0.75); white-space: nowrap` |
| Credits right a | `.footer-credits-right a` | inline | auto | `color: var(--gold); font-weight: 600; text-decoration: none; transition: color 0.2s ease` |

**Animacao:** Nenhuma.

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.footer__col a` | :hover | — | — | — | `color: var(--gold)` | 200ms ease |
| `.footer-legal-links a` | :hover | — | — | — | `color: var(--gold)` | 0.2s ease |
| `.footer-credits-right a` | :hover | — | — | — | `color: var(--gold-hover)` | 0.2s ease |

**Diferenciador Visual:** O footer-bottom e separado do footer principal por `background: var(--navy-deep)` em vez de `#08121f`, criando uma leve hierarquia de profundidade. O toggle de cookies no rodape e um componente iOS minimalista customizado com `.cookie-toggle` (28x14px, border-radius: 10px) que reflete o estado de consentimento via classes `.active`/`.inactive`.


---

### SECAO 13 — DRAWER (MENU MOBILE)

**Estrutura:**
```html
<div class="drawer-overlay" id="drawerOverlay" aria-hidden="true"></div>
<aside class="drawer" id="drawer" aria-label="Menu de navegacao mobile">
  <div class="drawer__header">...</div>
  <nav class="drawer__nav" aria-label="Navegacao mobile">...</nav>
  <div class="drawer__footer">...</div>
</aside>
```

**Fundo:**
- Layer 0 — overlay: `background: rgba(13, 27, 46, 0.85); backdrop-filter: blur(8px)`
- Layer 1 — drawer: `background: var(--navy-deep); box-shadow: -10px 0 50px rgba(0,0,0,0.5)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Overlay | `.drawer-overlay` | fixed | inset: 0 | `z-index: 9998; opacity: 0; pointer-events: none; transition: opacity 500ms var(--ease)` |
| Overlay ativo | `.drawer-overlay.is-active` | fixed | inset: 0 | `opacity: 1; pointer-events: auto` |
| Drawer | `.drawer` | fixed | width: 100%, max-width: 380px, height: 100% | `top: 0; right: -100%; background: var(--navy-deep); z-index: 9999; transition: right 600ms var(--ease); padding: 40px 30px` |
| Drawer ativo | `.drawer.is-active` | fixed | — | `right: 0` |
| Close | `.drawer__close` | flex | 44x44px | `border: 1px solid rgba(201,168,76,0.2); border-radius: 50%; color: var(--gold); transition: all 300ms ease` |
| Links | `.drawer__link` | block | auto | `font-family: var(--serif); font-size: 26px; font-weight: 400; color: var(--ivory); opacity: 0.7; transition: all 300ms var(--ease); display: block` |
| Links hover | `.drawer__link:hover` | block | auto | `opacity: 1; color: var(--gold); transform: translateX(10px)` |
| Footer | `.drawer__footer` | block | auto | `margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(201,168,76,0.2)` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma — transicao CSS | `right: -100%` | `right: 0` | 600ms | var(--ease) | click no burger | 0ms |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.drawer__close` | :hover | — | — | — | `background: var(--gold); color: var(--navy-deep)` | 300ms ease |
| `.drawer__link` | :hover | `translateX(10px)` | — | — | `opacity: 1; color: var(--gold)` | 300ms var(--ease) |

**Diferenciador Visual:** O drawer desliza da direita (`right: -100% -> 0`) em 600ms com a mesma curva de easing do site inteiro. O overlay usa `backdrop-filter: blur(8px)` para desfocar o conteudo atras, um padrao de apps nativos raro em sites estaticos. Links com `transform: translateX(10px)` no hover criam sensacao de "empurrar" o menu para a direita, reforcando a direcao do drawer.

---

### SECAO 14 — WHATSAPP FLOATING BUBBLE (Premium)

**Estrutura:**
```html
<div class="whatsapp-container">
  <div id="whatsapp-message">...</div>
  <a href="https://wa.me/5521972742109" class="whatsapp-float" target="_blank" rel="noopener noreferrer" id="whatsapp-btn" aria-label="...">
    <svg>...</svg>
  </a>
</div>
```

**Fundo:**
- Layer 0 — balao: `background: #ffffff; color: #1a1a1b; border-radius: 14px; border: 1px solid rgba(0,0,0,0.1)`
- Layer 1 — botao: `background-color: #25d366; color: #FFF; border-radius: 50%`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Container | `.whatsapp-container` | fixed | auto | `bottom: 30px; right: 30px; z-index: 9999` |
| Balao | `#whatsapp-message` | absolute | 280px width | `bottom: 75px; right: 0; padding: 16px 24px 16px 16px; background: #ffffff; border-radius: 14px; opacity: 0; visibility: hidden; transform: translateY(12px) scale(0.96); transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1); box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3)` |
| Balao ativo | `#whatsapp-message.show` | absolute | — | `opacity: 1; visibility: visible; transform: translateY(0) scale(1)` |
| Balao ::after | `#whatsapp-message::after` | absolute | 12x12px | `bottom: -6px; right: 25px; background: inherit; transform: rotate(45deg); border-right: 1px solid rgba(0,0,0,0.1); border-bottom: 1px solid rgba(0,0,0,0.1)` |
| Close | `.close-whatsapp-bubble` | absolute | auto | `top: 8px; right: 10px; color: #bbb; transition: all 0.2s ease; padding: 4px` |
| Logo | `.whatsapp-logo-bubble` | inline | 44x44px | `border-radius: 50%; border: 2px solid #25d366; background-color: #fff; padding: 2px; object-fit: contain` |
| Botao | `.whatsapp-float` | relative | 60x60px | `background-color: #25d366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(37,211,102,0.4); transition: all 0.3s ease` |
| Botao hover | `.whatsapp-float:hover` | relative | — | `transform: scale(1.1) rotate(5deg); background-color: #128c7e` |
| Botao ::after | `.whatsapp-float::after` | absolute | 100%x100% | `border-radius: 50%; background-color: #25d366; z-index: -1; animation: whatsapp-pulse 2s infinite` |
| Notificacao | `.whatsapp-notify` | absolute | 20x20px | `top: -2px; right: -2px; background-color: #ff3b30; color: white; border-radius: 50%; border: 2px solid #fff; opacity: 0; transform: scale(0); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| Notificacao show | `.whatsapp-notify.show` | absolute | — | `opacity: 1; transform: scale(1)` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| `whatsapp-pulse` | `transform: scale(1); opacity: 0.5` | `transform: scale(1.6); opacity: 0` | 2s | ease | load | 0ms (infinito) |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.close-whatsapp-bubble` | :hover | `scale(1.1)` | — | — | `color: #666` | 0.2s ease |
| `.whatsapp-float` | :hover | `scale(1.1) rotate(5deg)` | — | — | `background-color: #128c7e` | 0.3s ease |

**Diferenciador Visual:** O balao de mensagem nao e um simples tooltip — e um card completo com seta CSS (`::after` com `rotate(45deg)`), logo do escritorio circular com borda verde, e texto formatado. O botao possui um anel de pulso infinito (`::after` com `animation: whatsapp-pulse 2s infinite`) que expande de scale(1) para scale(1.6) enquanto desaparece, criando um halo de atividade constante. O balao aparece apos 10 segundos (`setTimeout(..., 10000)`) e desaparece automaticamente apos 20 segundos de exibicao.

---

### SECAO 15 — COOKIE BANNER (Skill Universal AG5 v2.1.0)

**Estrutura:** (presente no HTML, estilizado em cookie-banner.css, controlado por cookie-banner.js)

**Fundo:**
- Layer 0 — banner: `background: var(--ck-bg)` (#0D1B2E); `backdrop-filter: blur(10px)`
- Layer 1 — modal: `background: var(--ck-modal-bg)` (#ffffff); `border-top: 2px solid var(--ck-accent)`
- Layer 2 — overlay: `background: rgba(0, 0, 0, 0.55)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posicao | Dimensoes | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Banner | `.ck-banner` | fixed | bottom: 0, left: 0, right: 0 | `z-index: var(--ck-z-banner) [9000]; transform: translateY(100%); transition: transform 0.42s var(--ck-ease-out)` |
| Banner visivel | `.ck-banner--visible` | fixed | — | `transform: translateY(0)` |
| Modal | `.ck-modal` | fixed | inset: 0 | `z-index: var(--ck-z-modal) [9100]; opacity: 0; pointer-events: none; transition: opacity var(--ck-transition)` |
| Modal visivel | `.ck-modal--visible` | fixed | — | `opacity: 1; pointer-events: all` |
| Modal box | `.ck-modal__box` | relative | max-width: 520px | `transform: translateY(14px) scale(0.98); transition: transform var(--ck-transition); border-top: 2px solid var(--ck-accent)` |
| Modal box visivel | `.ck-modal--visible .ck-modal__box` | relative | — | `transform: translateY(0) scale(1)` |
| Toggle | `.ck-toggle__slider` | absolute | 34x19px | `border-radius: 20px; background: var(--ck-toggle-off); transition: background var(--ck-transition)` |
| Toggle on | `.ck-toggle input:checked+.ck-toggle__slider` | absolute | — | `background: var(--ck-toggle-on)` |
| Toast | `.ck-toast` | fixed | bottom: 20px, left: 50% | `transform: translateX(-50%) translateY(16px); opacity: 0; transition: all 300ms ease` |
| Toast visivel | `.ck-toast--visible` | fixed | — | `transform: translateX(-50%) translateY(0); opacity: 1` |

**Animacao:**

| Nome @keyframes | Estado inicial | Estado final | Duracao | Easing | Trigger | Delay |
|-------------------|----------------|--------------|---------|--------|---------|-------|
| Nenhuma — transicoes CSS | — | — | — | — | — | — |

**Micro-interacoes:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duracao / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.ck-btn--primary` | :hover | `translateY(-1px)` | — | — | `background: var(--ck-accent-dark)` | var(--ck-transition) |
| `.ck-btn--outline` | :hover | — | — | `border-color: rgba(255,255,255,0.55)` | `color: rgba(255,255,255,0.95)` | var(--ck-transition) |
| `.ck-modal__close` | :hover | — | — | — | `background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.85)` | var(--transition-fast) |

**Diferenciador Visual:** O cookie banner e um sistema completo de consentimento LGPD/GDPR com toggles customizados (width: 34px, height: 19px, slider circular de 13px), modal de preferencias com 5 categorias, e toast de feedback. O toggle do rodape (`.cookie-toggle`) e um componente iOS minimalista de 28x14px que reflete o estado de consentimento via posicao da bolinha (left: 15px = ativo, left: 2px = inativo).


---

## 3. COMPONENTES REUTILIZAVEIS

### Botoes

```css
/* --- BOTAO BASE --- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: var(--radius); /* 2px */
  transition: all 250ms ease;
  border: 1px solid transparent;
  font-family: var(--sans);
}

/* --- BOTAO GOLD (primario) --- */
.btn--gold {
  background: var(--gold);
  color: var(--navy-deep);
}
.btn--gold:hover {
  background: var(--gold-hover);
  transform: translateY(-1px);
}

/* --- BOTAO GHOST (sobre escuro) --- */
.btn--ghost {
  background: transparent;
  color: var(--ivory);
  border-color: rgba(245, 242, 236, 0.35);
}
.btn--ghost:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* --- BOTAO GHOST-DARK (sobre claro) --- */
.btn--ghost-dark {
  background: transparent;
  color: var(--navy-deep);
  border-color: rgba(13, 27, 46, 0.25);
}
.btn--ghost-dark:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* --- BOTAO BLOCK --- */
.btn--block {
  width: 100%;
  justify-content: center;
  padding: 16px;
}
```

### Eyebrow

```css
/* --- EYEBROW --- */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-family: var(--sans);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 11px;
  color: var(--gold);
  margin: 0 0 24px;
}
.eyebrow.light { color: var(--gold); }
.eyebrow.center { color: var(--gold); justify-content: center; }
.eyebrow__rule {
  width: 32px;
  height: 1px;
  background: var(--gold);
  display: inline-block;
}
```

### Section Head

```css
/* --- SECTION HEAD --- */
.section-head {
  max-width: 780px;
  margin: 0 0 56px;
}
.section-head.center {
  margin: 0 auto 56px;
  text-align: center;
}
.section-title {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
  color: var(--navy-deep);
  text-wrap: balance;
}
.section-title.light { color: var(--ivory); }
.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 620px;
  margin: 0;
}
```

### Sistema de Reveal (Scroll Animation)

```css
/* --- REVEAL ON SCROLL --- */
[data-anim] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 800ms var(--ease), transform 800ms var(--ease);
}
[data-anim].is-in {
  opacity: 1;
  transform: none;
}
```

**Variacao de stagger (Accordion):**
```css
.acc__item--hidden {
  opacity: 0;
  transform: translateX(-20px);
}
/* Removido via JS com delay de i x 120ms */
```

### Accordion

```css
/* --- ACCORDION --- */
.acc { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--navy-line); }
.acc__item {
  border-bottom: 1px solid var(--navy-line);
  transition: background 300ms ease, opacity 500ms ease-out, transform 500ms ease-out;
}
.acc__item--hidden { opacity: 0; transform: translateX(-20px); }
.acc__item.is-open { background: var(--white); }
.acc__head {
  width: 100%;
  display: grid;
  grid-template-columns: 80px 60px 1fr 60px;
  align-items: center;
  padding: 24px;
  text-align: left;
  transition: all 300ms ease;
  gap: 20px;
}
.acc__head:hover { background: rgba(201, 168, 76, 0.04); }
.acc__icon {
  width: 32px; height: 32px;
  position: relative;
  border: 1px solid var(--gold);
  border-radius: 50%;
  transition: all 300ms ease;
  justify-self: end;
}
.acc__icon::before, .acc__icon::after {
  content: "";
  position: absolute;
  background: var(--gold);
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 300ms ease;
}
.acc__icon::before { width: 12px; height: 1px; }
.acc__icon::after { width: 1px; height: 12px; }
.acc__item.is-open .acc__icon { background: var(--gold); }
.acc__item.is-open .acc__icon::before,
.acc__item.is-open .acc__icon::after { background: var(--navy-deep); }
.acc__item.is-open .acc__icon::after { transform: translate(-50%, -50%) scaleY(0); }
.acc__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms var(--ease);
}
.acc__item.is-open .acc__body { grid-template-rows: 1fr; }
.acc__body > div { overflow: hidden; }
```

### FAQ Accordion

```css
/* --- FAQ --- */
.faq__list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--navy-line); }
.faq__item { border-bottom: 1px solid var(--navy-line); }
.faq__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 26px 4px;
  font-family: var(--serif);
  font-size: clamp(18px, 1.5vw, 22px);
  font-weight: 500;
  color: var(--navy-deep);
  text-align: left;
  transition: color 200ms ease;
}
.faq__head:hover { color: var(--gold); }
.faq__icon {
  width: 24px; height: 24px;
  position: relative;
  flex-shrink: 0;
}
.faq__icon::before, .faq__icon::after {
  content: "";
  position: absolute;
  background: var(--gold);
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 300ms ease;
}
.faq__icon::before { width: 14px; height: 1px; }
.faq__icon::after { width: 1px; height: 14px; }
.faq__item.is-open .faq__icon::after { transform: translate(-50%, -50%) scaleY(0); }
.faq__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 400ms var(--ease);
}
.faq__item.is-open .faq__body { grid-template-rows: 1fr; }
.faq__body > p {
  overflow: hidden;
  margin: 0;
  padding: 0 4px 28px;
  color: var(--text-soft);
  line-height: 1.7;
  max-width: 720px;
}
```

### Review Card

```css
/* --- REVIEW CARD --- */
.review-card {
  position: absolute;
  inset: 0;
  background: var(--navy-deep);
  border: 1px solid rgba(201, 168, 76, 0.2);
  padding: 40px clamp(30px, 5vw, 60px);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 700ms ease-in-out, transform 700ms ease-in-out;
  pointer-events: none;
}
.review-card.is-active {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}
.review-card__stars {
  color: var(--gold);
  font-size: 18px;
  letter-spacing: 3px;
  margin-bottom: 20px;
}
.review-card__text {
  font-family: var(--serif);
  font-size: clamp(20px, 1.8vw, 26px);
  font-weight: 400;
  line-height: 1.45;
  color: var(--ivory);
  margin: 0 0 32px;
  font-style: italic;
  max-width: 720px;
  text-wrap: pretty;
}
.review-card__text::before {
  content: "\"";
  color: var(--gold);
  font-size: 1.4em;
  margin-right: 4px;
}
.review-card__text::after {
  content: "\"";
  color: var(--gold);
  font-size: 1.4em;
  margin-left: 2px;
}
.review-card__meta {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 24px;
  border-top: 1px solid rgba(201, 168, 76, 0.18);
}
.review-card__avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--navy-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-weight: 600;
  font-size: 18px;
}
.review-card__g {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 242, 236, 0.6);
}
```

### Formulario

```css
/* --- FORM FIELD --- */
.field, .field-row { display: flex; flex-direction: column; gap: 6px; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.field label {
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
}
.field input, .field select, .field textarea {
  background: var(--navy-deep);
  border: 1px solid rgba(201, 168, 76, 0.2);
  color: var(--ivory);
  padding: 14px 16px;
  font-family: var(--sans);
  font-size: 14px;
  transition: border 200ms ease;
}
.field input:focus, .field select:focus, .field textarea:focus {
  outline: none;
  border-color: var(--gold);
}
.field input::placeholder, .field textarea::placeholder {
  color: rgba(245, 242, 236, 0.35);
}
.field textarea { resize: vertical; min-height: 96px; }
.field-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  color: rgba(245, 242, 236, 0.65);
  line-height: 1.4;
}
.field-check input { accent-color: var(--gold); margin-top: 3px; }
```

### Drawer Mobile

```css
/* --- DRAWER OVERLAY --- */
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(13, 27, 46, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 500ms var(--ease);
}
.drawer-overlay.is-active { opacity: 1; pointer-events: auto; }

/* --- DRAWER --- */
.drawer {
  position: fixed;
  top: 0; right: -100%;
  width: 100%; max-width: 380px;
  height: 100%;
  background: var(--navy-deep);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transition: right 600ms var(--ease);
  box-shadow: -10px 0 50px rgba(0,0,0,0.5);
  padding: 40px 30px;
}
.drawer.is-active { right: 0; }
.drawer__close {
  width: 44px; height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 50%;
  transition: all 300ms ease;
}
.drawer__close:hover { background: var(--gold); color: var(--navy-deep); }
.drawer__link {
  font-family: var(--serif);
  font-size: 26px;
  font-weight: 400;
  color: var(--ivory);
  opacity: 0.7;
  transition: all 300ms var(--ease);
  display: block;
}
.drawer__link:hover { opacity: 1; color: var(--gold); transform: translateX(10px); }
body.no-scroll { overflow: hidden; }
```

### WhatsApp Premium Bubble

```css
/* --- WHATSAPP CONTAINER --- */
.whatsapp-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
}
#whatsapp-message {
  width: 280px;
  position: absolute;
  bottom: 75px;
  right: 0px;
  padding: 16px 24px 16px 16px;
  background: #ffffff;
  color: #1a1a1b;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px) scale(0.96);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 10002;
}
#whatsapp-message.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}
#whatsapp-message::after {
  content: '';
  position: absolute;
  bottom: -6px;
  right: 25px;
  width: 12px;
  height: 12px;
  background: inherit;
  transform: rotate(45deg);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: -1;
}
.close-whatsapp-bubble {
  position: absolute;
  top: 8px;
  right: 10px;
  background: transparent;
  border: none;
  color: #bbb;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  transition: all 0.2s ease;
  padding: 4px;
}
.close-whatsapp-bubble:hover { color: #666; transform: scale(1.1); }
.whatsapp-logo-bubble {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #25d366;
  background-color: #fff;
  padding: 2px;
  object-fit: contain;
}
.whatsapp-float {
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
  text-decoration: none !important;
  position: relative;
  z-index: 10001;
  transition: all 0.3s ease;
}
.whatsapp-float:hover {
  transform: scale(1.1) rotate(5deg);
  background-color: #128c7e;
}
.whatsapp-float::after {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  border-radius: 50%;
  background-color: #25d366;
  z-index: -1;
  animation: whatsapp-pulse 2s infinite;
}
@keyframes whatsapp-pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.6); opacity: 0; }
}
```

### Cookie Banner (Skill AG5)

```css
/* --- COOKIE BANNER --- */
.ck-banner {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: var(--ck-z-banner);
  background: var(--ck-bg);
  border-top: 1px solid rgba(var(--ck-accent-rgb), 0.12);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.22);
  transform: translateY(100%);
  transition: transform 0.42s var(--ck-ease-out);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.ck-banner.ck-banner--visible { transform: translateY(0); }
.ck-banner.ck-banner--hidden { transform: translateY(100%); pointer-events: none; }

.ck-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.38rem 0.9rem;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: var(--ck-radius-sm);
  border: none;
  cursor: pointer;
  transition: all var(--ck-transition);
  white-space: nowrap;
  line-height: 1;
  min-height: 30px;
  letter-spacing: 0.1px;
}
.ck-btn--primary {
  background: var(--ck-accent);
  color: #fff;
  font-weight: 600;
}
.ck-btn--primary:hover {
  background: var(--ck-accent-dark);
  transform: translateY(-1px);
}
.ck-btn--outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: rgba(255, 255, 255, 0.78);
}
.ck-btn--outline:hover {
  border-color: rgba(255, 255, 255, 0.55);
  color: rgba(255, 255, 255, 0.95);
}
.ck-btn--ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  border: none;
  padding: 0.38rem 0.4rem;
  text-decoration: underline;
  text-underline-offset: 2px;
  font-size: 0.72rem;
}
```


---

## 4. SISTEMA GLOBAL DE ANIMACOES

| Nome @keyframes | 0% | 50% | 100% | Duracao padrao | Easing | Onde e usado |
|-------------------|-----|-----|------|----------------|--------|--------------|
| `pulse` | `box-shadow: 0 0 0 0 rgba(201,168,76,0.5)` | — | `box-shadow: 0 0 0 0 rgba(201,168,76,0)` | 1.8s | ease | `.dot-pulse` na topbar |
| `goldLineIn` | `transform: scaleY(0)` | — | `transform: scaleY(1)` | 900ms | ease-out | `.hero__gold-line` |
| `heroFadeIn` | `opacity: 0; transform: translateY(30px)` | — | `opacity: 1; transform: none` | 800ms | var(--ease) | `.hero__title`, `.hero__sub`, `.hero__ctas`, `.hero__meta` |
| `clipIn` | `opacity: 0; clip-path: polygon(25% 0, 100% 0, 100% 100%, 15% 100%)` | — | `opacity: 1; clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%)` | 1400ms | var(--ease) | `.hero__photo` |
| `photoIn` | `opacity: 0; transform: scale(1.05)` | — | `opacity: 1; transform: scale(1)` | 1200ms | ease-out | `.hero__photo-slide--active` |
| `pulse-g` | `box-shadow: 0 0 0 4px rgba(46,204,113,0.2)` | `box-shadow: 0 0 0 8px rgba(46,204,113,0.05)` | `box-shadow: 0 0 0 4px rgba(46,204,113,0.2)` | 1.6s | ease | `.hero__badge-dot` |
| `marquee` | `transform: translateX(0)` | — | `transform: translateX(-50%)` | 40s | linear | `.marquee__track` |
| `whatsapp-pulse` | `transform: scale(1); opacity: 0.5` | — | `transform: scale(1.6); opacity: 0` | 2s | ease | `.whatsapp-float::after` |

**Animacao declarativa global (IntersectionObserver):**
- Seletor: `[data-anim]`
- Estado inicial: `opacity: 0; transform: translateY(30px)`
- Estado final (`.is-in`): `opacity: 1; transform: none`
- Duracao: `800ms`
- Easing: `var(--ease)` [cubic-bezier(0.16, 1, 0.3, 1)]
- Trigger: `IntersectionObserver` com `{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }`
- Delay: `data-delay` em ms (ex: `data-delay="150"`)

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Funcao / Comportamento | Trigger | Acao executada | Classes add/remove | Elementos afetados |
|------------------------|---------|----------------|--------------------|--------------------|
| Nav scroll state | `window.scroll` (passivo, com rAF batching) | Adiciona/remove classe baseado em scrollY > 80 | `is-scrolled` add/remove | `#nav` |
| Mobile drawer toggle | `click` em `#navBurger`, `#drawerClose`, `#drawerOverlay`, `.drawer__link` | Abre/fecha drawer e bloqueia scroll | `is-active` toggle em drawer e overlay; `no-scroll` toggle no body | `#drawer`, `#drawerOverlay`, `body` |
| Scroll reveal (IO) | IntersectionObserver `{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }` | Adiciona `.is-in` com delay de `data-delay` | `is-in` add | `[data-anim]` |
| Hero reveal especial | `DOMContentLoaded` | Aplica `.is-in` imediatamente nos elementos do hero (LCP fix) | `is-in` add | `.hero [data-anim]` |
| Accordion (areas) | `click` em `.acc__head` | Fecha todos os itens; abre o clicado (toggle) | `is-open` toggle no `.acc__item` | `#acc .acc__item` |
| Accordion stagger | IntersectionObserver no `#acc` | Remove `.acc__item--hidden` em sequencia | `acc__item--hidden` remove | `.acc__item` com delay `i x 120ms` |
| FAQ toggle | `click` em `.faq__head` | Toggle do item clicado (independente) | `is-open` toggle | `.faq__item` |
| Reviews carousel | `click` em `#revPrev`, `#revNext`, dots; auto `setInterval` | Troca card ativo e dot ativo; wrap-around circular | `is-active` toggle | `.review-card`, `.reviews__dots button` |
| Reviews auto-play | `mouseenter`/`mouseleave` no stage | Pausa/retoma rotacao automatica | — | `autoTimer` (5000ms interval) |
| Form submit | `submit` em `#ctaForm` | Valida campos; monta mensagem WhatsApp; abre wa.me | — | Redireciona para `https://wa.me/5521972742109?text=...` |
| Smooth anchor | `click` em `a[href^="#"]` | Calcula offset de 70px para sticky nav; scroll suave | — | `window.scrollTo({ top: y, behavior: 'smooth' })` |
| Hero photo slider | `setInterval` (5000ms) | Alterna `.hero__photo-slide--active` entre slides | `hero__photo-slide--active` toggle | `.hero__photo-slide` |
| WhatsApp bubble timer | `setTimeout` (10000ms) | Exibe balao; esconde apos 20000ms | `show` add/remove | `#whatsapp-message` |
| WhatsApp bubble close | `click` em `#close-bubble` | Esconde balao | `show` remove | `#whatsapp-message` |
| Cookie banner init | `DOMContentLoaded` | Verifica localStorage; exibe banner apos 600ms | `ck-banner--visible` add | `#ck-banner` |
| Cookie accept all | `click` em `#ck-accept-all`, `#ck-modal-accept-all` | Salva todas as categorias; dispara evento customizado; fecha banner e modal | — | `localStorage.setItem('site_cookie_consent', JSON.stringify(prefs))` |
| Cookie reject all | `click` em `#ck-reject`, `#ck-modal-reject` | Salva apenas necessarios; dispara evento; fecha | — | localStorage + toast |
| Cookie save custom | `click` em `#ck-modal-save` | Le toggles; salva preferencias customizadas | — | localStorage + toast |
| Cookie modal open | `click` em `#ck-customize`, `#ck-prefs-link` | Abre modal; sincroniza toggles; bloqueia scroll | `ck-modal--visible` add; `no-scroll` add | `#ck-modal`, `body` |
| Cookie modal close | `click` em `#ck-modal-close`, `#ck-modal-overlay`, `ESC` key | Fecha modal; libera scroll | `ck-modal--visible` remove; `no-scroll` remove | `#ck-modal`, `body` |
| Cookie footer toggle update | `init` e apos acoes | Atualiza visual do toggle no rodape | `.active` / `.inactive` | `#cookie-toggle` |

---

## 6. RESPONSIVIDADE

| Breakpoint (max-width) | Elemento | Propriedade | Valor padrao | Valor no breakpoint |
|------------------------|----------|-------------|--------------|---------------------|
| 960px | `.topbar__inner` | `flex-direction` | `row` | `column` |
| 960px | `.topbar__inner` | `padding` | `10px 36px` | `10px 20px` |
| 960px | `.topbar__item--sep` | `border-left` | `1px solid rgba(201,168,76,0.25)` | `0` |
| 960px | `.nav__inner` | `padding` | `18px 36px` | `14px 20px` |
| 960px | `.nav__links`, `.nav__cta` | `display` | `flex` | `none` |
| 960px | `.nav__burger` | `display` | `none` | `flex` |
| 960px | `.hero__grid` | `grid-template-columns` | `55fr 45fr` | `1fr` |
| 960px | `.hero__grid` | `min-height` | `calc(100vh - 120px)` | `auto` |
| 960px | `.hero__left` | `padding` | `clamp(30px,5vh,60px) clamp(40px,6vw,110px)` | `60px 24px 40px` |
| 960px | `.hero__right` | `min-height` | `auto` | `420px` |
| 960px | `.hero__photo` | `clip-path` | `polygon(10% 0, 100% 0, 100% 100%, 0 100%)` | `polygon(0 10%, 100% 0, 100% 100%, 0 100%)` |
| 960px | `.hero__photo` | `animation` | `clipIn 1400ms var(--ease) forwards` | `none` |
| 960px | `.hero__photo` | `opacity` | `0` | `1` |
| 960px | `.hero__vmark` | `display` | `flex` | `none` |
| 960px | `.hero__badge` | `bottom` | `48px` | `20px` |
| 960px | `.hero__badge` | `left` | `18%` | `20px` |
| 960px | `.hero__meta` | `flex-wrap` | `nowrap` | `wrap` |
| 960px | `.hero__meta` | `gap` | `28px` | `16px` |
| 960px | `.hero__meta-sep` | `display` | `block` | `none` |
| 960px | `.impact__grid` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 960px | `.about__inner` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 960px | `.cta__inner` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 960px | `.location__inner` | `grid-template-columns` | `1fr 1.2fr` | `1fr` |
| 960px | `.impact__pain`, `.impact__solve` | `padding` | `60px clamp(32px,5vw,80px) 60px 0` / `padding-left: clamp(32px,5vw,80px)` | `40px 20px` |
| 960px | `.impact__solve::before` | `display` | `block` | `none` |
| 960px | `.about__media-sticky` | `position` | `sticky` | `static` |
| 960px | `.about__portrait img` | `height` | `440px` | `320px` |
| 960px | `.acc__head` | `grid-template-columns` | `80px 60px 1fr 60px` | `50px 1fr 40px` |
| 960px | `.acc__head` | `padding` | `24px` | `18px 12px` |
| 960px | `.acc__head` | `gap` | `20px` | `10px` |
| 960px | `.acc__thumb` | `display` | `block` | `none` |
| 960px | `.acc__item.is-open .acc__num` | `font-size` | `56px` | `32px` |
| 960px | `.acc__grid` | `grid-template-columns` | `100px 1fr 0.8fr 1fr` | `1fr` |
| 960px | `.acc__grid` | `padding` | `0 24px 40px` | `0 14px 28px` |
| 960px | `.acc__grid > *:first-child` | `grid-column-start` | `2` | `1` |
| 960px | `.acc__media` | `height` | `220px` | `180px` |
| 960px | `.delight__grid` | `grid-template-columns` | `repeat(6, 1fr)` | `1fr 1fr` |
| 960px | `.delight__grid` | `grid-auto-rows` | `220px` | `180px` |
| 960px | `.delight__card`, `.delight__card--tall`, `.delight__card--wide` | `grid-column` | `span 2` / `span 2` / `span 4` | `span 2` |
| 960px | `.delight__card--tall` | `grid-row` | `span 2` | `span 1` |
| 960px | `.footer__inner` | `grid-template-columns` | `1.4fr 1fr 1fr 1.4fr` | `1fr 1fr` |
| 960px | `.footer-bottom` | `flex-direction` | `row` | `column` |
| 960px | `.footer-bottom` | `align-items` | `center` | `flex-start` |
| 960px | `.footer-bottom` | `gap` | `0` | `1rem` |
| 960px | `.marquee__track` | `font-size` | `28px` | `20px` |
| 960px | `.field-row` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 1024px | `.reviews__stage` | `min-height` | `450px` | `480px` |
| 768px | `.reviews__stage` | `min-height` | `450px` | `540px` |
| 768px | `.review-card` | `padding` | `40px clamp(30px,5vw,60px)` | `32px 24px` |
| 640px | `.whatsapp-container` | `bottom` | `30px` | `20px` |
| 640px | `.whatsapp-container` | `right` | `30px` | `20px` |
| 640px | `.whatsapp-float` | `width` | `60px` | `54px` |
| 640px | `.whatsapp-float` | `height` | `60px` | `54px` |
| 640px | `.whatsapp-float` | `font-size` | `32px` | `28px` |
| 640px | `#whatsapp-message` | `width` | `280px` | `240px` |
| 640px | `#whatsapp-message` | `font-size` | `14px` | `13px` |
| 640px | `#whatsapp-message` | `bottom` | `75px` | `70px` |
| 520px | `.footer__inner` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 520px | `.location__info` | `grid-template-columns` | `1fr 1fr` | `1fr` |
| 520px | `.section-head` | `margin-bottom` | `56px` | `32px` |
| 480px | `.reviews__stage` | `min-height` | `450px` | `620px` |

---

## 7. PERFORMANCE & SEO TECNICO

| Tecnica | Elemento/Recurso | Detalhe |
|---------|------------------|---------|
| `rel="preload"` | Hero image (`assets/camilo-pessanha-dr-rodrigo-advogado-foto-perfil.webp`) | `as="image" fetchpriority="high"` — LCP optimization |
| `rel="preconnect"` | `https://fonts.googleapis.com` e `https://fonts.gstatic.com` | Preconnect antes de requisicoes de fonte |
| `rel="preload"` | CSS principal (`style.css`) | `as="style"` para evitar FOUC |
| `rel="preload"` | Google Fonts CSS | `as="style" onload="this.onload=null;this.rel='stylesheet'"` — carregamento assincrono com fallback noscript |
| `rel="preload"` | Cookie banner CSS | `as="style" onload="..."` — nao bloqueia renderizacao critica |
| CSS critico inline | `.hero__title` + `[data-anim]` | Garante LCP imediato sem esperar fonte carregar |
| `fetchpriority="high"` | Hero image | Sinaliza prioridade de carregamento para LCP |
| `loading="lazy"` | Todas as imagens abaixo do fold | Inclui segunda foto do hero, imagens do accordion, delight, about |
| `srcset` + `sizes` | Logo nav, hero image, accordion images | Imagens responsivas para DPR e viewport |
| Schema.org | `@type: LegalService` | Campos: name, alternateName, url, logo, image, description, foundingDate, priceRange, currenciesAccepted, telephone, address, geo, openingHoursSpecification, areaServed, hasOfferCatalog, founder, aggregateRating, sameAs |
| Schema.org | `@type: WebSite` | Campos: url, name, publisher, inLanguage |
| Schema.org | `@type: WebPage` | Campos: url, name, description, isPartOf, about, inLanguage, datePublished, dateModified |
| Schema.org | `@type: FAQPage` | 6 perguntas com acceptedAnswer |
| Meta geo | Canonical + geo.region + geo.placename + geo.position + ICBM | SEO local para Campo Grande, RJ |
| Open Graph | og:title, og:description, og:url, og:image, og:image:width, og:image:height, og:type, og:locale, og:site_name | Compartilhamento social |
| Twitter Cards | twitter:card, twitter:title, twitter:description, twitter:image | Compartilhamento Twitter |
| rAF batching no scroll | `window.addEventListener('scroll', onScroll, { passive: true })` | Evita forced reflow no listener de scroll |
| IntersectionObserver | Reveal animations + Accordion stagger | Evita listeners de scroll manuais; threshold: 0.15, rootMargin: '0px 0px -40px 0px' |
| `grid-template-rows: 0fr` | Accordion e FAQ | Animacao de altura sem medicao JS (evita forced reflow) |
| SVG inline | Todos os icones | Elimina requisicoes de CDN de icones (Font Awesome); economia de ~269KB |
| Vanilla ES6 IIFE | `script.js` | Zero dependencias externas; bundle size minimo |
| `text-wrap: balance` | `.hero__title`, `.section-title` | Tipografia refinada sem JS |
| `text-wrap: pretty` | `.review-card__text` | Evita orphans em citacoes |

---

## 8. ANTI-PADOES REGISTRADOS

❌ **CARROSSEL DE SLIDE HORIZONTAL** → Generico seria: Carrossel com transform translateX e overflow hidden, criando layout shift e quebrando tipografia serifada em italico. → Aqui foi feito: Sistema de fade absoluto (`position: absolute; inset: 0`) com `opacity` e `transform: translateY(10px)` — cards sobrepostos no mesmo espaco, sem movimento horizontal. → Prova tecnica: `.review-card { position: absolute; inset: 0; opacity: 0; transform: translateY(10px); transition: opacity 700ms ease-in-out, transform 700ms ease-in-out; pointer-events: none; } .review-card.is-active { opacity: 1; transform: none; pointer-events: auto; }`

❌ **ACCORDION COM HEIGHT AUTO E TRANSITION** → Generico seria: Medir altura do conteudo com JS e aplicar style.height para animar, causando forced reflow e jank. → Aqui foi feito: `grid-template-rows: 0fr -> 1fr` com `overflow: hidden` no filho — animacao puramente CSS que funciona com qualquer conteudo sem medicao. → Prova tecnica: `.acc__body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 500ms var(--ease); } .acc__item.is-open .acc__body { grid-template-rows: 1fr; } .acc__body > div { overflow: hidden; }`

❌ **MARQUEE JS COM REQUESTANIMATIONFRAME** → Generico seria: Script de ticker que manipula transform via rAF, consumindo CPU mesmo em abas inativas. → Aqui foi feito: `@keyframes marquee` com `translateX(-50%)` em conteudo duplicado, puro CSS com `animation-play-state: paused` no hover. → Prova tecnica: `.marquee__track { animation: marquee 40s linear infinite; } .marquee:hover .marquee__track { animation-play-state: paused; } @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`

❌ **HERO COM BACKGROUND-IMAGE E OVERLAY** → Generico seria: `background-image: url(...)` com `::after` para escurecer, dificultando controle de posicionamento e acessibilidade. → Aqui foi feito: Imagem `<img>` real com `clip-path`, `object-fit: cover`, `fetchpriority="high"` e overlay como div separada — permite LCP otimizado e alt text semantico. → Prova tecnica: `<img class="hero__photo-slide hero__photo-slide--active" src="..." alt="Dr. Rodrigo — socio fundador" width="800" height="1000" fetchpriority="high" />` + `.hero__photo { clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%); }`

❌ **DARK MODE TOGGLE MANUAL** → Generico seria: Um botao de sol/lua que troca classes no body para inverter cores, adicionando complexidade de estado. → Aqui foi feito: Dark mode como decisao arquitetonica fixa — secoes escuras (`hero`, `about`, `reviews`, `CTA`, `footer`) usam navy-deep nativamente, sem toggle. A inversao acontece apenas na navbar scroll. → Prova tecnica: `.nav.is-scrolled { background: rgba(13, 20, 40, 0.95); backdrop-filter: blur(14px); } .nav.is-scrolled .nav__links a, .nav.is-scrolled .nav__wordmark-top, .nav.is-scrolled .nav__wordmark-bot { color: var(--ivory); }`

❌ **FORMULARIO COM SUBMIT AJAX E TOAST** → Generico seria: Formulario que envia dados para backend, mostra spinner, toast de sucesso/erro — complexo e requer infraestrutura. → Aqui foi feito: Formulario simples que valida campos e redireciona para WhatsApp com mensagem pre-formatada. Sem backend, sem spinner, sem estado complexo. → Prova tecnica: `form.addEventListener('submit', (e) => { e.preventDefault(); ... const url = \`https://wa.me/5521972742109?text=${encodeURIComponent(text)}\`; window.open(url, '_blank', 'noopener'); ... })`

❌ **STICKY NAVBAR COM BOX-SHADOW GENERICO** → Generico seria: `box-shadow: 0 2px 10px rgba(0,0,0,0.1)` ao fazer scroll, criando flutuacao barata. → Aqui foi feito: Transicao para `backdrop-filter: blur(14px)` com borda dourada sutil (`rgba(201,168,76,0.2)`), transformando a navbar em vidro fume sobre o conteudo sem sombra. → Prova tecnica: `.nav.is-scrolled { background: rgba(13, 20, 40, 0.95); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-color: rgba(201, 168, 76, 0.2); }`

❌ **WHATSAPP BOTAO GENERICO VERDE FIXO** → Generico seria: Botao flutuante de WhatsApp com icone Font Awesome e nada mais. → Aqui foi feito: Botao com halo de pulso infinito (`::after` com `animation: whatsapp-pulse 2s infinite`), balao de mensagem estilo chat com seta CSS, logo do escritorio circular, e timer de auto-exibicao. → Prova tecnica: `.whatsapp-float::after { content: ''; position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: #25d366; z-index: -1; animation: whatsapp-pulse 2s infinite; } @keyframes whatsapp-pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }`

❌ **SECOES SEPARADAS POR ESPACAMENTO BRUTO** → Generico seria: `padding: 80px 0` em todas as secoes, criando monotonia ritmica. → Aqui foi feito: Espacamento fluido `clamp(80px, 10vh, 140px)` ou `clamp(100px, 12vh, 160px)` que respira com a altura da viewport, alternando secoes escuras e claras em ritmo termico previsivel. → Prova tecnica: `.impact { background: var(--ivory); padding: clamp(80px, 10vh, 140px) 0; } .about { background: var(--navy-deep); padding: clamp(100px, 12vh, 160px) 0; }`

❌ **BADGE DE DISPONIBILIDADE COM COR VERDE PADRAO** → Generico seria: `background: #00ff00` ou `#28a745` com texto branco, choque cromatico brutal. → Aqui foi feito: Badge sobreposto na foto com `background: var(--ivory)`, texto `var(--navy-deep)`, borda-left dourada de 3px, e dot verde (`#2ecc71`) com sombra sutil `rgba(46,204,113,0.2)` — verde so aparece no indicador de status, nao no fundo. → Prova tecnica: `.hero__badge { background: var(--ivory); color: var(--navy-deep); padding: 14px 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.35); border-left: 3px solid var(--gold); } .hero__badge-dot { background: #2ecc71; box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.2); }`

---

*Documento gerado por engenharia reversa completa do codigo-fonte. Todos os valores extraidos diretamente dos arquivos HTML, CSS e JS entregues.*
