const notificationEmail = "tmontanabc@gmail.com";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const message = request.body || {};
    const payload = new FormData();

    payload.append(
      "_subject",
      message.type === "signup"
        ? "Nowe zgłoszenie ze strony Żuławscy Nobliści"
        : "Nowa wiadomość ze strony Żuławscy Nobliści"
    );
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("Typ", message.type || "-");
    payload.append("Jezyk", message.lang || "-");
    payload.append("Imie", message.name || "-");
    payload.append("Kontakt", message.email || "-");
    payload.append("Temat", message.purpose || "-");
    payload.append("Dziecko", message.child || "-");
    payload.append("Wiadomosc", message.message || "-");

    const mailResponse = await fetch(
      `https://formsubmit.co/ajax/${notificationEmail}`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload
      }
    );

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
