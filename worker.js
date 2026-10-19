/** Apna AI Cloudflare Worker backend. Keep this file's secrets in Worker settings, never in GitHub. */
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // For production, replace * with your exact GitHub Pages origin.
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8'
};
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
    if (request.method !== 'POST') return new Response(JSON.stringify({ error: 'Use POST.' }), { status: 405, headers: corsHeaders });
    try {
      const body = await request.json();
      const message = String(body.message || '').trim().slice(0, 6000);
      if (!message) return new Response(JSON.stringify({ error: 'Please enter a message.' }), { status: 400, headers: corsHeaders });
      const history = Array.isArray(body.history) ? body.history.slice(-10).map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 3000) })) : [];
      const messages = [
        { role: 'system', content: 'You are Apna AI, a helpful, safe assistant. Reply in the language used by the user, especially Hindi/Hinglish when appropriate. Be clear and honest. Do not claim you generated images, videos, or performed actions you did not perform.' },
        ...history,
        { role: 'user', content: message }
      ];
      const result = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages, max_tokens: 900 });
      const reply = result?.response || result?.result?.response || 'Maaf kijiye, abhi jawab nahi mil saka.';
      return new Response(JSON.stringify({ reply }), { headers: corsHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'AI request failed. Check Worker AI binding and usage limits.' }), { status: 500, headers: corsHeaders });
    }
  }
};
