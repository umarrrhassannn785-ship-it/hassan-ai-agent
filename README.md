# AI Agent — Multi-Model Chat

A production-ready ChatGPT-style AI chat interface built with **Next.js 14**, **Tailwind CSS**, and **OpenRouter API**. Features a distinctive terminal-meets-modern aesthetic with electric cyan accents.

## Features

- 🤖 **7+ AI Models** — GPT-4o, Claude 3.5, Gemini 1.5 Pro, Llama 3.1, Mistral & more
- ⚡ **Streaming responses** — Real-time token streaming via SSE
- 💾 **Persistent chat history** — Stored in localStorage, survives refreshes
- 🌑 **Dark mode first** — Sleek terminal-inspired aesthetic
- 📱 **Fully responsive** — Works on mobile, tablet, and desktop
- 📝 **Markdown rendering** — Code blocks with syntax highlighting
- 🔑 **Client-side API key** — Keys never leave the browser
- 🚀 **Vercel-ready** — Deploy in one click

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment

```bash
cp .env.example .env.local
# Edit .env.local if needed (optional)
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Add your API key

Click the **⚙️ Settings** button in the top right and paste your [OpenRouter API key](https://openrouter.ai/keys).

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

**Environment variables** (optional):
- `NEXT_PUBLIC_APP_URL` — Your deployed URL (used for OpenRouter referrer header)

## Project Structure

```
├── app/
│   ├── api/chat/route.ts   # Streaming API proxy → OpenRouter
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + custom CSS
├── components/
│   ├── ChatInterface.tsx   # Main layout & state orchestration
│   ├── ChatInput.tsx       # Textarea input with send/stop
│   ├── MessageBubble.tsx   # Markdown message renderer
│   ├── ModelSelector.tsx   # Dropdown model picker
│   ├── Sidebar.tsx         # Conversation history sidebar
│   ├── SettingsModal.tsx   # API key management modal
│   └── WelcomeScreen.tsx   # Empty state with starter prompts
├── hooks/
│   └── useChat.ts          # All chat state, streaming, persistence
├── lib/
│   └── openrouter.ts       # OpenRouter API client
├── types/
│   └── index.ts            # TypeScript types + model list
└── ...config files
```

## Customization

### Adding models
Edit `types/index.ts` → `AVAILABLE_MODELS` array.

### Changing the system prompt
In `hooks/useChat.ts`, add a system message at the start of the `messages` array:
```ts
{ role: "system", content: "You are a helpful assistant..." }
```

### Theming
Edit `tailwind.config.js` color tokens and `app/globals.css`.

## Tech Stack

- **Next.js 14** (App Router + Edge Runtime)
- **TypeScript**
- **Tailwind CSS**
- **react-markdown** + **react-syntax-highlighter**
- **lucide-react** icons
- **OpenRouter API** (200+ models)
