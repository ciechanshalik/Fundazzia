const notificationEmail = "tmontanabc@gmail.com";
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail =
  process.env.RESEND_FROM_EMAIL ||
  "Fundacja Żuławscy Nobliści <onboarding@resend.dev>";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  if (!resendApiKey) {
    return response.status(500).json({
      error: "Missing RESEND_API_KEY environment variable"
    });
  }

  try {
    const message = request.body || {};
    const subject =
      message.type === "signup"
        ? "Nowe zgłoszenie ze strony Żuławscy Nobliści"
        : "Nowa wiadomość ze strony Żuławscy Nobliści";
    const rows = [
      ["Typ", message.type || "-"],
      ["Język", message.lang || "-"],
      ["Imię", message.name || "-"],
      ["Kontakt", message.email || "-"],
      ["Telefon", message.phone || "-"],
      ["Temat", message.purpose || "-"],
      ["Dziecko", message.child || "-"],
      ["Zgoda na kontakt", message.consent || "-"],
      ["Wiadomość", message.message || "-"]
    ];
    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#17231f">
        <h2>${subject}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border:1px solid #e6e1d5;padding:10px;font-weight:700;width:160px">${label}</td>
                  <td style="border:1px solid #e6e1d5;padding:10px">${String(value).replaceAll("\n", "<br />")}</td>
                </tr>
              `
            )
            .join("")}
        </table>
      </div>
    `;

    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: message.email || undefined,
        subject,
        html
      })
    });

    const text = await mailResponse.text();

    if (!mailResponse.ok) {
      return response.status(mailResponse.status).json({
        error: text || mailResponse.statusText
      });
    }

    return response.status(200).json(text ? JSON.parse(text) : { ok: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
