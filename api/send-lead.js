export default async function handler(req, res) {
    console.log("НОВЫЙ КОД SEND-LEAD ЗАПУЩЕН");
    
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

    const telegramText = await telegramResponse.text();

    if (!telegramResponse.ok) {
      console.error(
        "Telegram error:",
        telegramResponse.status,
        telegramText
      );

      return res.status(502).json({
        error: `Telegram ${telegramResponse.status}: ${telegramText}`,
      });
    }

    const telegramData = JSON.parse(telegramText);

    if (!telegramData.ok) {
      console.error("Telegram API error:", telegramData);

      return res.status(502).json({
        error: `Telegram API error: ${
          telegramData.description || "неизвестная ошибка"
        }`,
      });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Заявки с сайта <noreply@diklan.ru>",
        to: ["vladhoroshi25@icloud.com"],
        subject: "Новая заявка с сайта",
        text: leadText,
      }),
    });

    const emailText = await emailResponse.text();

    if (!emailResponse.ok) {
      console.error("Resend error:", emailResponse.status, emailText);

      return res.status(502).json({
        error: `Resend ${emailResponse.status}: ${emailText}`,
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: error.message || "Ошибка отправки заявки",
    });
  }
}