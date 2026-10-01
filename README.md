# 💗 Site de Presente Romântico — Sim ou Não

Um site interativo e animado no estilo romântico/kawaii, feito para presentear alguém especial.

A pessoa escaneia o QR code, vê uma introdução no estilo WhatsApp, responde a uma pergunta fofa com botão **YES** que cresce e **NO** que foge, e depois abre três presentes: fotos, uma música e uma carta de amor.

---

## 📦 O que vem neste pacote

```text
romantic-love-site/
├── src/                        # Código fonte do site (React + TanStack Start)
│   ├── components/             # Telas e animações
│   ├── lib/love-config.ts      # 🎯 ARQUIVO PRINCIPAL DE PERSONALIZAÇÃO
│   ├── routes/                 # Páginas do site
│   └── styles.css              # Cores, fontes e animações
├── public/                     # Arquivos públicos
│   ├── fotos/                  # Suas 10 fotos
│   ├── capa-musica.jpg         # Capa da música
│   ├── qr.html                 # Página do QR code
│   └── favicon.ico
├── site-html/                  # 🌐 Versão completa do site em HTML puro
│   ├── index.html              # Abra direto no navegador — funciona offline
│   └── midia/                  # Fotos, gatinhos e capa da música
├── dist/                       # Build pronto para publicar (gerado com bun run build)
├── README.md                   # Este arquivo
├── CUSTOMIZE.md                # Guia rápido de personalização
└── package.json                # Dependências
```

Fora do ZIP você também recebeu:

- `qr-para-imprimir.png` — cartão pronto para imprimir e entregar.

---

## 🚀 Como usar (modo mais fácil)

A versão mais simples está em `site-html/index.html`.

1. Descompacte o ZIP.
2. Abra a pasta `site-html`.
3. Clique duas vezes em `index.html`.
4. O site abre no navegador, pronto para funcionar.

Para trocar textos e fotos na versão HTML, edite o arquivo `site-html/index.html` — no topo dele existe uma área comentada chamada `✏️ PERSONALIZE AQUI`. Lá você muda:

- nome do contato no WhatsApp;
- mensagens;
- pergunta e botões;
- fotos (substitua os arquivos na pasta `site-html/midia/foto-*.jpg`);
- título e artista da música;
- texto da carta e assinatura.

---

## 🎨 Como personalizar a versão completa (React)

A versão React fica mais bonita e tem mais animações. Para editá-la:

### 1. Instalar

Você precisa do **Node.js** instalado. Depois rode no terminal, dentro da pasta do projeto:

```bash
npm install
# ou, se tiver o bun:
bun install
```

### 2. Rodar localmente

```bash
npm run dev
# ou:
bun run dev
```

Abra o endereço que aparecer (normalmente `http://localhost:8080`).

### 3. Editar o conteúdo

Tudo que você pode mudar está em **`src/lib/love-config.ts`**. Não precisa saber programar — só troque os textos entre aspas.

#### Nome no WhatsApp

```ts
whatsapp: {
  contactName: "My Love",
  firstMessage: "Happy birthday!! 🎂❤️",
  secondMessage: "Open when alone",
}
```

#### Pergunta

```ts
question: {
  title: "Do you love me? ❤️",
  yesLabel: "YES",
  noLabel: "NO",
}
```

#### Fotos

Coloque suas fotos em `public/fotos/` com os nomes `foto-1.jpg`, `foto-2.jpg`, … `foto-10.jpg`.

Se quiser mais ou menos fotos, edite a lista `photos` em `love-config.ts`.

#### Música

```ts
song: {
  trackTitle: "MEDDLE ABOUT",
  artist: "CHASE ATLANTIC",
  youtubeUrl: "...",
  audioUrl: "", // deixe vazio ou coloque "/musica/meddle-about.mp3"
}
```

Para tocar um MP3 de verdade, veja a seção "Como colocar o MP3" abaixo.

#### Carta de amor

```ts
letter: {
  title: "Para Mariangel 💗",
  signature: "ass: Gabriel (Sukuna)",
  extraNote: "", // coloque aqui um recadinho pessoal no final
  paragraphs: [
    "primeiro parágrafo...",
    "segundo parágrafo...",
  ],
}
```

Cada texto entre aspas é um parágrafo. Pode apagar, adicionar ou reescrever quantos quiser.

---

## 🎵 Como colocar o MP3 da música

1. Pegue o arquivo `meddle-about.mp3` que você já tem.
2. Cole ele em `public/musica/meddle-about.mp3`.
3. Em `src/lib/love-config.ts`, na parte `song`, mude:

```ts
audioUrl: "/musica/meddle-about.mp3",
```

4. Pronto — o player vai tocar a música de verdade com barra de progresso.

> ⚠️ Não posso incluir o arquivo MP3 no ZIP porque a música é protegida por direitos autorais. Você precisa adicionar o seu próprio arquivo.

---

## 📱 Como usar o QR code

Dentro do ZIP existe `public/qr.html`. Quando o site estiver publicado, essa página gera um QR code que aponta automaticamente para o site.

Para usar:

1. Publique o site (veja abaixo).
2. Abra `https://seusite.com/qr.html`.
3. Imprima a página com **Ctrl + P**.
4. Ou use a imagem `qr-para-imprimir.png` que já está pronta.

Se quiser mudar o texto do cartão, edite as 3 linhas no topo de `public/qr.html`:

```js
const SITE_URL = "https://seusite.com/";
const TITULO = "Escaneia o coração";
const SUBTITULO = "Aponte a câmera do celular para abrir a sua surpresa 💌";
```

---

## 🌐 Como publicar no GitHub + Vercel (grátis)

### Publicar no GitHub

1. Crie um repositório novo em [github.com/new](https://github.com/new).
2. No terminal, dentro da pasta do projeto, rode:

```bash
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

> Se você nunca usou o git nesse computador, primeiro configure:
> ```bash
> git config --global user.name "Seu Nome"
> git config --global user.email "seu@email.com"
> ```

### Publicar no Vercel

1. Vá em [vercel.com/new](https://vercel.com/new).
2. Escolha importar o repositório do GitHub.
3. O Vercel detecta o framework automaticamente.
4. Clique em **Deploy**.
5. Pronto — o site fica no ar em alguns segundos.

### Publicar na Netlify

1. Vá em [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste a pasta `dist/` para a área indicada.
3. O Netlify gera um link pronto.

---

## 🎞️ Animações inclusas

Todas as animações do vídeo estão presentes:

- Mensagens do WhatsApp aparecem uma a uma.
- QR code "salta" na tela com linha de leitura passando.
- Gatinho flutua e troca de expressão.
- Botão **YES** cresce com efeito elástico.
- Botão **NO** encolhe, gira e foge do cursor.
- Caixinhas de presente balançam e o coração bate.
- Fotos caem do alto como polaroids.
- Disco de vinil gira ao tocar a música.
- Carta sobe e os beijos aparecem em sequência.
- Corações sobem ao fundo.

Para deixar mais rápido ou mais lento, edite as variáveis `--animate-*` no final de `src/styles.css`.

---

## ❓ Problemas comuns

### O site não mostra minhas fotos

Verifique se os nomes dos arquivos batem exatamente com o que está em `love-config.ts` (ou no topo do `site-html/index.html`). Use `.jpg` ou `.png` conforme o arquivo.

### A música não toca

O MP3 precisa estar em `public/musica/meddle-about.mp3` e o `audioUrl` precisa ser `/musica/meddle-about.mp3`. Navegadores bloqueam áudio automático em alguns celulares — a pessoa precisa tocar no play.

### O QR code não abre no celular

Verifique se o `SITE_URL` em `qr.html` está com o endereço correto do site publicado, começando com `https://`.

### Quero mudar as cores

No arquivo `src/styles.css`, no bloco `:root`, altere `--primary`, `--rose`, `--blush` e `--background`. Isso muda a paleta inteira.

---

## 📄 Licença

Este projeto foi feito para uso pessoal. As fotos, textos e música são seus. O código pode ser usado e modificado livremente para presentes pessoais.

Feito com 💗 para Mariangel.
