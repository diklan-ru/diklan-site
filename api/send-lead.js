export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  try {
    const { name, phone, message } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({
        error: "Имя и телефон обязательны",
      });
    }

    const leadText = [
      "Новая заявка с сайта",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Сообщение: ${message || "Не указано"}`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: leadText,
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error("Не удалось отправить заявку в Telegram");
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Website <onboarding@resend.dev>",
        to: ["vladhoroshi25@icloud.com"],
        subject: "Новая заявка с сайта",
        text: leadText,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error("Не удалось отправить заявку на email");
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Ошибка отправки заявки",
    });
  }
}