# 💗 Guia de personalização (passo a passo)

Quase tudo o que você pode mudar está em **um arquivo**: `src/lib/love-config.ts`.
Não precisa saber programar — só troque os textos entre as aspas.

## 1. Instalar e rodar

```bash
bun install     # ou: npm install
bun run dev     # ou: npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:8080).

## 2. A página do QR code (nova)

Arquivo: `public/qr.html` → abre em `http://seusite.com/qr.html`.

É uma página pronta com o QR code em rosa. Ela é o "cartãozinho" que a pessoa
escaneia para entrar no site.

Abra `public/qr.html` e edite apenas estas 3 linhas:

```js
const SITE_URL = window.location.origin + "/"; // troque por "https://seusite.lovable.app/"
const TITULO = "Escaneia o coração";
const SUBTITULO = "Aponte a câmera do celular para abrir a sua surpresa 💌";
```

- Deixando `window.location.origin + "/"`, o QR aponta automaticamente para a
  página inicial do site onde ele estiver hospedado.
- Se quiser imprimir o cartão, basta abrir `/qr.html` e usar **Ctrl+P** (o
  layout já está preparado para impressão).
- Tem também um botão "ABRIR A SURPRESA", caso ela prefira tocar em vez de escanear.

## 3. A intro do WhatsApp

Em `src/lib/love-config.ts` → `whatsapp`: mude o nome do contato, a mensagem de
aniversário, a mensagem "Open when alone" e os horários.

## 4. A pergunta "Do you love me?"

Em `question`: mude o título, os textos dos botões YES/NO e a lista `noSteps`
(cada passo tem um `text` e um `mood`).
Moods disponíveis: `shy`, `happy`, `confused`, `serious`, `heart`.

## 5. Suas fotos (GIFT 1)

1. Coloque as fotos em `src/assets/` (ex.: `photo1.jpg`).
2. No topo de `src/lib/love-config.ts` adicione: `import photo1 from "@/assets/photo1.jpg";`
3. Substitua os itens da lista `photos: [ ... ]` pelos seus imports.
   Mantenha 12 itens para o layout ficar igual ao do vídeo.

## 6. Sua música (GIFT 2)

Em `song`: mude `trackTitle`, `artist`, `vinylLabel`, `youtubeUrl` e a
`thumbnail` (importe sua imagem do mesmo jeito que as fotos).
Se tiver um arquivo mp3, coloque a URL dele em `audioUrl` e o player toca de
verdade com barra de progresso.

## 7. Sua carta de amor (GIFT 3) — com texto personalizado

Em `letter` você controla tudo:

```ts
letter: {
  title: "Dear Love",              // título da carta
  signature: "Forever yours",      // assinatura no final
  extraNote: "P.S. seu recadinho", // ✍️ SEU TEXTO PESSOAL no fim da carta
  paragraphs: [
    "primeiro parágrafo...",
    "segundo parágrafo...",
  ],
}
```

- `paragraphs`: cada texto entre aspas é um parágrafo. Pode apagar, adicionar ou
  reescrever quantos quiser (separe com vírgula).
- `extraNote`: aparece em letra cursiva, depois de uma linha divisória, no final
  da carta. É o espaço para o seu texto do jeito que você quiser.
  Para escondê-lo, deixe `extraNote: ""`.

## 8. Cores e fontes

Todas as cores são tokens em `src/styles.css` (bloco `:root`). Mude
`--primary`, `--rose`, `--blush`, `--background` para trocar a paleta inteira.
As fontes são carregadas em `src/routes/__root.tsx`.

## 9. Publicar

```bash
bun run build
```

Depois publique a saída gerada em qualquer host (Lovable, Vercel, Netlify,
Cloudflare). O QR fica disponível em `https://seusite.com/qr.html`.

## 🎞️ Animações (iguais ao vídeo)

Todas as animações estão em `src/styles.css` (no fim do arquivo). Para mudar a
velocidade, edite o valor em segundos na lista `--animate-*` dentro de `@theme inline`:

| Animação | Onde aparece | Variável |
| --- | --- | --- |
| Transição entre telas (fade + zoom + blur) | todas as telas | `--animate-screen-in` |
| Bolhas do WhatsApp entrando uma a uma | tela inicial | `--animate-bubble-in` |
| QR code “estourando” na tela | tela inicial | `--animate-qr-pop` |
| Linha verde de leitura passando pelo QR | tela inicial | `--animate-scan` |
| Frases trocando com saltinho | pergunta | `--animate-message-in` |
| Gatinho flutuando | várias telas | `--animate-float` |
| Caixinhas de presente balançando | central de presentes | `--animate-gift-idle` |
| Coração batendo dentro do presente | central de presentes | `--animate-heartbeat` |
| Polaroids caindo do alto | Presente 1 | `--animate-drop-in` |
| Vinil girando ao dar play | Presente 2 | `--animate-spin-slow` |
| Marcas de beijo aparecendo em sequência | Presente 3 | `--animate-kiss-in` |
| Carta subindo e os parágrafos aparecendo | Presente 3 | `--animate-letter-in` |
| Corações subindo ao fundo | várias telas | `--animate-heart-rise` |

Extras já inclusos: o botão **YES** cresce com efeito elástico a cada tentativa,
o **NO** encolhe, gira e foge do cursor, os presentes pulam ao passar o mouse,
as polaroids se endireitam e ampliam no hover. Quem usa “reduzir movimento” no
celular vê o site sem animações automaticamente.
