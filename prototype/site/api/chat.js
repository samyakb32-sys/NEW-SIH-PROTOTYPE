// Server-side proxy to OpenRouter — keeps the API key out of client JS.
// Requires an OPENROUTER_API_KEY environment variable set in the Vercel project.

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "The server has no OpenRouter API key configured yet." });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const messages = Array.isArray(body && body.messages) ? body.messages : [];
  if (!messages.length) {
    res.status(400).json({ error: "No messages provided." });
    return;
  }
  if (messages.length > 30) {
    res.status(400).json({ error: "Conversation is too long — start a new chat." });
    return;
  }

  const trimmed = messages.slice(-20).map(function (m) {
    return {
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 4000)
    };
  });

  const systemPrompt = {
    role: "system",
    content:
      "You are the AgriConnect AI Advisor, a friendly assistant inside a market-linkage app for Indian farmers (built for SIH26132). " +
      "You help with: comparing mandi (market) prices, deciding whether to sell now or hold, understanding a buyer's offer, " +
      "estimating net return after transport/storage/mandi cess, and general crop-selling strategy. " +
      "Keep answers short and practical. Match the farmer's language — reply in Hindi/Hinglish if they write in Hindi/Hinglish, otherwise English. " +
      "If asked something unrelated to farming, selling produce, or the platform, gently steer back to how you can help with their harvest and sales."
  };

  try {
    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://agriconnect-sih26132-site.vercel.app",
        "X-Title": "AgriConnect AI Advisor"
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct:free",
        messages: [systemPrompt].concat(trimmed),
        temperature: 0.6,
        max_tokens: 500
      })
    });

    const data = await upstream.json();
    if (!upstream.ok) {
      var msg = (data && data.error && data.error.message) || "OpenRouter request failed.";
      res.status(upstream.status).json({ error: msg });
      return;
    }
    var reply = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    res.status(200).json({ reply: reply || "Sorry, I couldn't generate a response just now." });
  } catch (err) {
    res.status(500).json({ error: "Could not reach OpenRouter: " + err.message });
  }
};
