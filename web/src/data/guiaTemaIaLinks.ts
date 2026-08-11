import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'

export const guiaTemaIaDescription =
  'Ferramentas, automações e referências para explorar IA no processo de design.'

export const guiaTemaIaLinkSections: GuiaTemaLinkSection[] = [
  { title: 'IAs generativas', links: [
    { title: 'ChatGPT', description: 'Assistente para conversar, criar e analisar conteúdo.', url: 'https://chatgpt.com/pt-BR/', previewImageUrl: 'https://cdn.openai.com/chatgpt/share-og.png' },
    { title: 'Gemini', description: 'IA generativa do Google para texto, pesquisa e multimodalidade.', url: 'https://gemini.google.com/' },
    { title: 'Claude', description: 'Assistente de IA para escrita, análise e raciocínio.', url: 'https://claude.ai/login' },
    { title: 'Microsoft Copilot', description: 'Assistente de IA integrado ao ecossistema Microsoft.', url: 'https://copilot.microsoft.com/' },
    { title: 'Perplexity', description: 'Pesquisa assistida por IA com fontes e respostas citadas.', url: 'https://www.perplexity.ai/' },
    { title: 'DeepSeek', description: 'Modelos de IA para conversar, raciocinar e programar.', url: 'https://www.deepseek.com/' },
  ] },
  { title: 'Criação de sites', links: [
    { title: 'Cursor', description: 'Editor de código com IA para construir produtos.', url: 'https://cursor.com/' },
    { title: 'Claude Code', description: 'Agente de código da Anthropic para o terminal.', url: 'https://claude.com/product/claude-code', useScreenshotFallback: false },
    { title: 'v0', description: 'Gere interfaces web a partir de texto.', url: 'https://v0.app/' },
    { title: 'Lovable', description: 'Crie aplicações web conversando com IA.', url: 'https://lovable.dev/pt-br', previewImageUrl: 'https://lovable.dev/img/opengraph-image.png' },
    { title: 'Bolt', description: 'Prototipe e publique aplicações no navegador.', url: 'https://bolt.new/' },
  ] },
  { title: 'Integração e automação de processos', links: [
    { title: 'n8n', description: 'Automatize fluxos conectando ferramentas e serviços.', url: 'https://n8n.io/' },
    { title: 'Make', description: 'Crie automações visuais entre apps e APIs.', url: 'https://www.make.com/en' },
    { title: 'Zapier', description: 'Conecte ferramentas e automatize tarefas repetitivas.', url: 'https://zapier.com/' },
    { title: 'Pipedream', description: 'Automação para integrar APIs e construir workflows.', url: 'https://pipedream.com/', previewImageUrl: 'https://framerusercontent.com/images/JbIGyB2WOjX4AhHd5fuunhIwwss.svg?width=4166&height=2002' },
  ] },
  { title: 'Criação de imagens e vídeos', links: [
    { title: 'Kling AI', description: 'Gere vídeos a partir de texto e imagens.', url: 'https://kling.ai/' },
    { title: 'Hailuo AI', description: 'Criação de vídeos com IA generativa.', url: 'https://hailuoai.video/' },
    { title: 'Synthesia', description: 'Crie vídeos com avatares e narração por IA.', url: 'https://www.synthesia.io/pt-br', useScreenshotFallback: false },
    { title: 'Bing Image Creator', description: 'Gere imagens com IA diretamente no Bing.', url: 'https://www.bing.com/images/create/ai-image-generator', previewImageUrl: 'https://www.bing.com/sa/simg/facebook_sharing_5.png' },
    { title: 'Luma', description: 'Ferramentas de IA para imagens e vídeos.', url: 'https://lumalabs.ai/app', previewImageUrl: 'https://cdn.sanity.io/images/2ylxvaa2/production/b31d99c8312ed2f74080e118e9d58bf6b2b6e953-1200x630.png?w=1200&h=630&fm=jpg' },
    { title: 'Lensa', description: 'Edição e criação de imagens com IA.', url: 'https://lensa.app/' },
    { title: 'Tome', description: 'Crie apresentações narrativas com IA.', url: 'https://tomeapp.ai/', previewImageUrl: 'https://tomeapp.ai/images/og/tomeapp-home-og-v2.webp' },
  ] },
  { title: 'Recursos úteis', links: [
    { title: 'People + AI Guidebook', description: 'Boas práticas para construir produtos com IA.', url: 'https://pair.withgoogle.com/guidebook/', previewImageUrl: 'https://pair.withgoogle.com/guidebook-v2/images/gbv2-social.png' },
    { title: 'OpenUI', description: 'Toolkit open source para explorar componentes de interface.', url: 'https://www.openui.com/', previewImageUrl: 'https://www.openui.com/meta-image.png?v=20260725-1708' },
    { title: 'shadcn/ui', description: 'Biblioteca open source de componentes de UI reutilizáveis.', url: 'https://ui.shadcn.com/' },
    { title: 'Learn Prompting', description: 'Guias práticos para escrever prompts mais claros e eficazes.', url: 'https://learnprompting.org/pt/docs/introduction', useScreenshotFallback: false },
    { title: 'Future Tools', description: 'Notícias e ferramentas de IA curadas por Matt Wolfe.', url: 'https://futuretools.io/' },
    { title: 'QuillBot', description: 'Auxilia na escrita, edição e aprimoramento de textos.', url: 'https://quillbot.com/' },
    { title: 'PunkMetrics', description: 'Skills e boas práticas para trabalhar com Claude Code.', url: 'https://punkmetrics.com/skills-de-design-para-claude-code/' },
  ] },
]
