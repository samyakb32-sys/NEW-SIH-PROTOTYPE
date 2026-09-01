// Server-side proxy to Google Gemini — keeps the API key out of client JS.
// Requires a GEMINI_API_KEY environment variable set in the Vercel project.
// Get a key at https://aistudio.google.com/apikey (starts with "AIzaSy...").

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "The server has no Gemini API key configured yet." });
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
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: String(m.content || "").slice(0, 4000) }]
    };
  });

  const systemInstruction = {
    parts: [{
      text:
        "You are the AgriConnect AI Advisor, a friendly assistant inside a market-linkage app for Indian farmers (built for SIH26132). " +
        "You help with: comparing mandi (market) prices, deciding whether to sell now or hold, understanding a buyer's offer, " +
        "estimating net return after transport/storage/mandi cess, and general crop-selling strategy. " +
        "Keep answers short and practical. Match the farmer's language — reply in Hindi/Hinglish if they write in Hindi/Hinglish, otherwise English. " +
        "If asked something unrelated to farming, selling produce, or the platform, gently steer back to how you can help with their harvest and sales."
    }]
  };

  const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + apiKey;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: trimmed,
        systemInstruction: systemInstruction,
        generationConfig: { temperature: 0.6, maxOutputTokens: 500 }
      })
    });

    const data = await upstream.json();
    if (!upstream.ok) {
      var msg = (data && data.error && data.error.message) || "Gemini request failed.";
      res.status(upstream.status).json({ error: msg });
      return;
    }
    var candidate = data && data.candidates && data.candidates[0];
    var reply = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0] && candidate.content.parts[0].text;
    res.status(200).json({ reply: reply || "Sorry, I couldn't generate a response just now." });
  } catch (err) {
    res.status(500).json({ error: "Could not reach Gemini: " + err.message });
  }
};
