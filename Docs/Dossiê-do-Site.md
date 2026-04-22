DOSSIÊ ESTRATÉGICO — CAMILO & PESSANHA ADVOCACIA

COMANDO PARA CRIAÇÃO DO SITE
Quero que você crie o Site institucional "Sovereign Split" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.
IDENTIDADE VISUAL BASE:
Paleta: #1A2B47 (azul naval profundo) · #C9A84C (ouro antigo) · #B8933A (ouro escuro hover) · #F5F2EC (off-white marfim) · #0D1B2E (preto naval) · #FFFFFF
Tipografia: Cormorant Garamond (títulos — peso 300/600) + DM Sans (corpo — peso 400/500) — ambas via Google Fonts
Estilo: Luxury legal branding — minimalismo editorial com tensão entre rigidez militar e elegância dourada
Sensação: Autoridade destemida. Seriedade estratégica. Confiança inabalável.
LAYOUT ESCOLHIDO:
Hero: A) Split assimétrico 55/45 — lado esquerdo: azul naval escuro #0D1B2E com título em Cormorant Garamond 7vw, subtítulo, dois CTAs e linha dourada decorativa vertical à esquerda do texto; lado direito: foto real do advogado com clip-path diagonal polygon(8% 0, 100% 0, 100% 100%, 0 100%) criando corte oblíquo; badge "24h · Criminal · Campo Grande" flutuante sobre a imagem
Serviços: B) Acordeão — cada área jurídica expande ao clicar revelando lista de sub-serviços + ícone; numeração em ouro 01–05 como elemento visual dominante
Depoimentos: E) Carrossel fade + nota Google visível — cards com fundo #0D1B2E, texto em marfim, estrelas em ouro, logo Google oficial, fade entre cards; contador de avaliações "34 avaliações · ⭐ 5,0" fixo acima
Sobre/Credenciais: D) Split 50/50 com imagem fixada — imagem dos dois sócios lado a lado fixada (sticky) enquanto o texto rola; counters animados (ano de fundação, clientes atendidos, áreas de atuação) + texto institucional
ANIMAÇÕES DO PROJETO (do breakdown Webflow):

Título hero → de opacity:0; translateY(40px) para opacity:1; translateY(0) em 800ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load, delay: 200ms
Linha dourada vertical hero → de scaleY(0) para scaleY(1) em 600ms, easing: ease-out, trigger: load, delay: 0ms, transform-origin: top
Foto hero → de opacity:0; scale(1.05) para opacity:1; scale(1) em 1000ms, easing: ease-out, trigger: load, delay: 400ms
Clip-path diagonal → de polygon(15% 0, 100% 0, 100% 100%, 7% 100%) para polygon(8% 0, 100% 0, 100% 100%, 0 100%) em 1200ms, trigger: load
Itens do acordeão → de opacity:0; translateX(-20px) para opacity:1; translateX(0) em 500ms, easing: ease-out, trigger: IntersectionObserver, stagger: 150ms por item
Counters → de 0 para valor final em 1500ms, easing: ease-out, trigger: IntersectionObserver (threshold 0.5)
Cards de depoimento → fade-in opacity:0 para opacity:1 em 600ms, easing: ease-in-out, trigger: botão/timer 5s auto
Barra marquee → animação CSS translateX(-50%) infinita, animation-duration: 25s, linear, pausa no hover
Nav → background: transparent → background: rgba(10,20,40,0.95) + backdrop-filter:blur(12px) ao scroll > 80px, transição 300ms

SEÇÕES OBRIGATÓRIAS:

Navbar
Hero [Split assimétrico 55/45]
Seção de alto impacto: dor e solução do público-alvo
[Serviços/Áreas de Atuação — Acordeão com numeração dourada]
Barra animada horizontal: CAMILO & PESSANHA · DIREITO CRIMINAL · PREVIDENCIÁRIO · TRABALHISTA · INVENTÁRIO · ATENDIMENTO 24H · CAMPO GRANDE - RJ
Seção de encantamento com imagens de resultado/segurança/pessoas
[Sobre/Credenciais — Split 50/50 com imagem fixada]
[Depoimentos — Carrossel fade + nota Google]
FAQ
Localização: endereço + mapa iframe + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):
Nome → link Google Business: https://share.google/ftbJvimRiAIhSMimZ
Endereço → link Google Maps rota: https://maps.google.com/?q=R.+Campo+Grande,+1014+sala+326+Campo+Grande+Rio+de+Janeiro
Telefone/WhatsApp: (21) 97274-2109 → https://wa.me/5521972742109
Instagram: @camiloepessanhaadvogados → https://www.instagram.com/camiloepessanhaadvogados
CRÉDITOS:
Esquerda: © Camilo & Pessanha Advocacia 2026
Direita: Desenvolvido por AG5 Agência (#C9A84C em destaque), link para https://www.ag5agencia.com.br
MAPA IFRAME:
html<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.322888916761!2d-43.56219492468979!3d-22.90145837925886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be3b8f2ba7ebf%3A0x63bc5f36aef54348!2sCAMILO%20E%20PESSANHA%20ADVOCACIA%20-%20CAMPO%20GRANDE%20-%20RJ%20-%2024H!5e0!3m2!1spt-BR!2sbr!4v1776878588821!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

1 — MÍDIAS PRINCIPAIS
MídiaStatusObservaçãoFoto fachada/exterior❌ AusenteNenhuma foto do edifício Passeio EmpresarialFotos internas❌ AusenteNenhuma foto do escritório sala 326Foto equipe (juntos)❌ AusenteApenas fotos individuais separadasFoto Dr. Rodrigo✅ DisponívelTraje azul-marinho + gravata vermelha, fundo azul profissionalFoto Dr. Camilo✅ DisponívelTraje preto + gravata vermelha, fundo azul profissionalLogo completa (CP + texto)✅ DisponívelFundo azul naval, monograma dourado gradienteÍcone/símbolo CP✅ DisponívelVersão sem texto, fundo azul degradêVídeos❌ Ausente0 vídeos informados

2 — INFORMAÇÕES DA EMPRESA
Nome: Camilo & Pessanha Advocacia
Sigla/Marca alternativa: CP Advocacia
Nicho: Advocacia — Direito Criminal, Previdenciário, Trabalhista e Inventário
Fundação: 11 de julho de 2023
CNPJ: Não informado
Registro OAB: Não informado
Descrição institucional:
Escritório de advocacia com atuação estratégica e personalizada, oferecendo soluções jurídicas seguras e eficientes. Destaque para atendimento criminal 24h/7d, assessoria trabalhista e previdenciária, e inventários judiciais e extrajudiciais. Atende pessoas físicas e empresas com comunicação clara e uso de tecnologia para acompanhamento de processos.
Proposta de valor: Atuação firme, estratégica e orientada a resultados — com background militar que confere disciplina e visão diferenciada. Atendimento 24 horas na área criminal.
Público-alvo: Pessoas físicas (presas em flagrante, audiências de custódia, trabalhadores com direitos violados, beneficiários INSS, famílias em processo de inventário) e empresas (assessoria trabalhista).
Sócios fundadores: Dr. Rodrigo e Dr. Camilo (nomes obtidos das avaliações — verificar nomes completos). Background: mais de uma década no serviço público com atuação de natureza militar.
Serviços principais (5):

Audiência de Custódia
Flagrante Delito
BPC-LOAS / Aposentadoria (Previdenciário)
Reclamação Trabalhista
Inventário Judicial e Extrajudicial

Todos os serviços oferecidos:
Audiência de Custódia · Flagrante Delito · Delegacia · Processo Criminal · Acordo de Não Persecução Penal (ANPP) · Tribunal do Júri · BPC-LOAS · Aposentadoria · Trabalhista · Inventário Judicial e Extrajudicial · Pensão Alimentícia
Área de abrangência: Campo Grande · Recreio · Barra da Tijuca · Bangu · Realengo · Vila Valqueire · Marechal Hermes
Contato:

Telefone/WhatsApp: (21) 97274-2109
Endereço: Passeio Empresarial — R. Campo Grande, 1014, sala 326 — Campo Grande, Rio de Janeiro — RJ, CEP 23080-000
Horário: Segunda a Sexta, 10h às 17h (Criminal: 24h/7d)
Email: Não informado

Links digitais:

Google Business: https://share.google/ftbJvimRiAIhSMimZ
Place ID Google: ChIJv3668rjjmwARSEP1rjZfvGM
Instagram: https://www.instagram.com/camiloepessanhaadvogados
Facebook: Não informado
LinkedIn: Não informado
Site atual: Não possui


3 — AVALIAÇÕES GOOGLE
Plataforma: Google Maps
Total de avaliações: 34
Nota média: ⭐ 5,0
NomeTempoEstrelasTextoThais Silva4 meses atrás⭐⭐⭐⭐⭐Advocacia humanizada, os Drs Rodrigo e Camilo são muito atenciosos e falam com linguagem clara sobre todos os detalhes do processo. São acessíveis e honestos. Já é quarta vez que utilizo os serviços sempre com êxito, recomendo fortementeAndre Silva1 ano atrás⭐⭐⭐⭐⭐Dr. Camilo é um ótimo profissional! Sempre muito solicito e competente. Ele me orientou de forma clara e objetiva, tirando todas as minhas dúvidas desde o início até o fim. Com certeza, recomendo seus serviços.Monique nike3 meses atrás⭐⭐⭐⭐⭐São profissionais extremamente competentes e atenciosos.Deivison Azevedo1 ano atrás⭐⭐⭐⭐⭐Ótimo profissional, fui muito bem atendido. O melhor de tudo competente resolveu meu problema, indico para qualquer causa.Roderico B. Santos1 ano atrás⭐⭐⭐⭐⭐O escritório de advocacia é totalmente humanizado, há compreensão dentro dos fatos e muito bem relacionado com a LEI. RECORRI ALGUMAS VEZES, PORQUE NECESSITAVA QUE OS MEUS INTERESSES FOSSEM…Carlos Henrique Lemos de Oliveira1 ano atrás⭐⭐⭐⭐⭐Excelentes advogados! Recomendo a todos que buscam seus direitos perante a justiça. Profissionais experientes, atendimento Excelente. CP é 1000!Breno Lopes1 ano atrás⭐⭐⭐⭐⭐Advogados sempre disponíveis para tirar dúvidas e atualizar sobre os processos. Muito competentes!! Excelentes profissionais.Giovanna Flores1 ano atrás⭐⭐⭐⭐⭐Excelente equipe, recomendo muito! Podem contratar sem medo, resolveram meus problemas ❤️Antônio Vieira1 ano atrás⭐⭐⭐⭐⭐Ótimo atendimento, profissionais de alta confiança. Eu indico muito.Inglid Avallone1 ano atrás⭐⭐⭐⭐⭐Super profissionais e atenciosos. Possuem amplo conhecimento. Escritório muito bem localizado e de fácil acesso. Recomendo muito.

4 — ANÁLISE DE BRANDING
Nicho: Advocacia Criminal, Previdenciária, Trabalhista e Inventário
Posicionamento: Médio-Premium com projeção Premium — escritório boutique de zona oeste do Rio com identidade visual acima da média do nicho local
Estilo visual predominante: Luxury Legal Branding + Minimalismo Editorial Militar
Análise da identidade existente:
A marca já possui uma identidade visual de alto nível: o monograma CP em degradê dourado sobre fundo azul naval é elegante, sofisticado e incomum para escritórios de zona oeste carioca. As fotos dos sócios têm qualidade profissional com fundo de estúdio em tom de azul que casa perfeitamente com a paleta da logo. A gravata vermelha de ambos cria um terceiro elemento de cor que pode ser usado pontualmente no site como acento de urgência/energia (especialmente em CTAs de atendimento 24h criminal).
Paleta de cores recomendada:
CorHexUsoAzul Naval Profundo#1A2B47Fundo principal, navbarPreto Naval#0D1B2EHero, seções escurasOuro Antigo#C9A84CDestaques, títulos, linhas decorativas, íconesOuro Escuro (hover)#B8933AEstados hover, sombras douradasMarfim Off-White#F5F2ECFundos claros, texto em fundo escuroVermelho Acento#C0392BCTA urgência 24h, badge criminal — uso esparsoBranco Puro#FFFFFFTexto em fundos muito escuros
Tipografia recomendada:

Títulos: Cormorant Garamond (Google Fonts) — peso 300 Light para sub e 600 SemiBold para títulos principais — comunica autoridade jurídica + elegância editorial
Corpo/UI: DM Sans — peso 400 e 500 — leiturabilidade moderna, não-corporativa
Números/destaques: Cormorant Garamond Italic para counters e citações

Direção estética: Palácio de Justiça encontra consultório premium. Fundo escuro com ouro como único ornamento. Espaçamento generoso. Fotografia como elemento estrutural, não decorativo. Ausência proposital de elementos excessivos — deixar o peso da expertise falar.
Sensação de marca: "Quando você mais precisa, eles estão prontos." — Firmeza sem frieza. Precisão sem distância.
Referências premium do mesmo nicho:

Trench, Rossi e Watanabe (Brasil) — minimalismo premium em tipografia
Gibson Dunn (EUA) — azul naval + ouro, hero editorial
Sérvulo & Associados (Portugal) — fotografia de sócios como ancoragem visual


5 — CHECKLIST DE PENDÊNCIAS
🔴 CRÍTICO — necessário antes da publicação:

 Nomes completos dos sócios — apenas "Dr. Rodrigo" e "Dr. Camilo" foram mencionados nas avaliações; verificar sobrenomes para o site
 Número OAB de cada sócio (obrigatório no site de advocacia por regulamentação da OAB)
 Email profissional do escritório
 CNPJ da sociedade de advogados

🟡 IMPORTANTE — enriquece o site:

 Fotos internas do escritório (sala de reunião, recepção, ambiente de trabalho)
 Foto da fachada / placa do Passeio Empresarial
 Foto dos dois sócios juntos (para seção "Sobre")
 Vídeo institucional de 30–60s (depoimento ou apresentação dos sócios)
 Foto de ambiente (tribunal, sala de audiência — banco de imagens próprio ou Unsplash)

🟢 DESEJÁVEL — diferenciação:

 Facebook — criar ou informar link
 LinkedIn do escritório e/ou dos sócios
 Logo em PNG com fundo transparente (para uso web)
 Logotipo em vetor SVG/AI
 Postagens no Instagram para galeria no site
 Texto de bio completa de cada sócio (formação, OAB, especialidades)
 Fotos de resultados / conquistas (quando possível/permitido pela OAB)


6 — ANÁLISE DE REFERÊNCIAS WEBFLOW

TEMPLATE 3 ESCOLHIDO — LegalFlow X Home V1 (legalflowtemplate.webflow.io/home-pages/home-v1)
URL verificada e acessada
HERO: Split 50/50 estrito — esquerda: fundo claro/branco com título grande em serif ("I'm John Carter, Corporate Lawyer"), dois CTAs; direita: foto do advogado em moldura com background sutilmente colorido. Proporção exata 50/50, sem clip-path. Entrada: título da esquerda slide-in da esquerda, foto da direita fade-in.
NAV: Topbar escura com email e telefone (contatos imediatos antes mesmo do scroll). Navbar logo centralizada com links simétricos dos dois lados. Ao scroll: fundo branco + sombra. CTA "Free Consultation" em destaque.
TIPOGRAFIA: Títulos em serif elegante ~3.5rem, corpo DM Sans ~1rem. Peso do título: 400-500 para look editorial refinado. Sub-títulos das seções em ALL CAPS com espaçamento de letras amplo (letter-spacing: 0.2em).
CORES ORIGINAIS: Azul #2C3E6E, dourado #D4A843, branco, cinza claro. Altamente compatível com paleta CP.
SERVIÇOS/CARDS: 3 colunas desktop com cards de áreas de prática. Cada card tem ícone, título, texto, link com ícone seta. Hover: elevação + borda esquerda colorida aparece. Diferencial: versão com grid 2x3 para mais áreas.
ANIMAÇÕES: Case results: cards com imagem de thumbnail + valor em dólar grande + título + texto curto. Scroll reveal com translateY(40px)→0 em 600ms. Stagger de 150ms entre cards da grid. Seção "About": imagem fixa (position sticky) enquanto texto ao lado rola — excelente para seção Sobre da CP.
MICRO-INTERAÇÕES: Links da nav: after::pseudo-element cresce horizontalmente no hover (underline animado). Botões: outline→filled no hover com transition 250ms. Cards de case result: overlay escuro com opacity 0→0.7 no hover + ícone de seta aparece.
ELEMENTOS DECORATIVOS: Linha horizontal dourada fina de 2px como divisor entre seções. Aspas decorativas oversized (" ") em dourado por trás de depoimentos. Padrão de pontos em canto de seção específica.
RESUMO CONSTRUTIVO: Esta é a referência mais diretamente aplicável para a CP. A seção "About" com imagem sticky dos dois advogados (Dr. Rodrigo e Dr. Camilo lado a lado) enquanto texto rola à direita cria o efeito de autoridade desejado. Usar as aspas oversized em #C9A84C nos depoimentos. A topbar escura com contatos imediatos é essencial para um escritório 24h que precisa converter visitantes em ligações.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT
Escolhas registradas para o site Camilo & Pessanha Advocacia:
HERO:
✅ A) Split assimétrico 55/45 — texto esquerda em fundo azul naval #0D1B2E, foto real Dr. Rodrigo com clip-path diagonal direita. Badge flutuante "⚖️ Atendimento Criminal 24h". Linha dourada vertical decorativa à esquerda do bloco de texto.
SERVIÇOS:
✅ B) Acordeão — cada área jurídica (Criminal · Previdenciário · Trabalhista · Inventário · Família) expande ao clicar; numeração 01–05 em #C9A84C como dominante visual; dentro de cada item: lista dos sub-serviços com bullet dourado.
DEPOIMENTOS:
✅ E) Carrossel fade + nota Google visível — fundo #0D1B2E, cards em azul um tom mais claro, estrelas douradas, logo Google oficial, 10 depoimentos em rotação automática de 5s com pausa no hover; contador fixo "⭐ 5,0 · 34 avaliações no Google" permanente acima do carrossel.
SOBRE / CREDENCIAIS:
✅ D) Split 50/50 com imagem fixada — imagem dos dois sócios (Dr. Rodrigo + Dr. Camilo juntos, ou lado a lado das duas fotos individuais com composição) na coluna esquerda em sticky; coluna direita com texto da história CP, counters animados (2023 · Fundação · +34 clientes avaliadores · 11 serviços), e os valores do escritório.

ENTREGA COMPLETA ✅
Dossiê estruturado e pronto para o agente construtor. Todas as informações reais preservadas. Nenhum dado inventado. Pendências sinalizadas. Templates Webflow reais verificados e analisados. Sistema de variação definido.