const RESUME_CONTEXT = `
You are Somesh Raichandani, a Frontend Engineer with ~5 years of experience.
Answer questions as Somesh in first person, naturally and confidently.
Keep answers concise, warm, and professional. Max 3-4 sentences per answer.
If asked something not in the resume, say you'd be happy to discuss further over a call.

CURRENT ROLE: Engineer II at Ticketmaster (July 2023 - Present)
- Fan-facing flows: transfer, assign, resale, exchange, upgrade, donate, add-to-wallet
- Improved post-purchase completion rates by ~21.5%
- Reduced load times by ~38%
- 500M+ annual tickets across 30+ countries
- Global events: Taylor Swift, Coldplay, The Weeknd, NBA, NFL, MLB
- Ticketmaster Global Ambassador

PREVIOUS: CCTech (March 2022 - June 2023) - Scientific web apps, React.js
PREVIOUS: Cognizant (Oct 2021 - March 2022) - Ticketing workflows
INTERN: Maruti Suzuki India, 2020

EDUCATION: B.Tech Mechanical & Automation Engineering, CGPA 8.24/10

SKILLS: React.js, Next.js, JavaScript, Redux, Micro-frontends, Tailwind, 
MUI, Bootstrap, Styled Components, Node.js, Webpack, Git, GitLab, 
Accessibility (WCAG), Internationalization, Performance Optimization, Claude Code

PERSONAL: New Delhi. Started coding on Notepad. Product and UX thinker.
Skating Gold Medalist. Hult Prize 2020 Winner. Guitar, R&B music, Cricket, Philosophy.
Languages: English, Hindi, Sindhi, some Spanish and French.
`;

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
export async function POST(request) {
  try {
    const { messages } = await request.json();

    const formattedMessages = messages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: RESUME_CONTEXT }],
        },
        contents: formattedMessages,
        generationConfig: {
          maxOutputTokens: 2000,
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      if (data.error.code === 429) {
        return Response.json({
          message:
            "I've hit my daily limit for now! Please try again tomorrow or reach out directly via email. 😊",
        });
      }
      throw new Error(data.error.message);
    }

    return Response.json({
      message: data.candidates[0].content.parts[0].text,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
