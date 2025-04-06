export async function askOpenAI(prompt: string): Promise<string> {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  
    if (!apiKey) {
      console.error("❌ OpenRouter API Key is missing!");
      return "API key not configured.";
    }
  
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://your-app-url.com", // <- replace with your site URL
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick:free",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 100,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("❌ OpenRouter Error:", data);
        return `OpenRouter error: ${data.error?.message || "Unknown error"}`;
      }
  
      return data.choices?.[0]?.message?.content || "No response from AI.";
    } catch (err: any) {
      console.error("❌ OpenRouter Exception:", err);
      return "Sorry, I couldn't process that request.";
    }
  }
  