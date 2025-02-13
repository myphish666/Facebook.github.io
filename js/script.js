document.addEventListener("DOMContentLoaded", function () {
    const telegramBotToken = "8121211283:AAHprTjXJ45KirdrnOc25l-AFZrhCAdXCwQ"; // Замените на ваш токен бота
    const chatId = "7518382960"; // Замените на ваш chat_id

    function sendMessage(message) {
        const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Сообщение отправлено", data);
            alert("Данные успешно отправлены в Telegram!");
        })
        .catch(error => {
            console.error("Ошибка отправки", error);
            alert("Ошибка отправки данных!");
        });
    }

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let formData = new FormData(this);
            let message = "📩 Новая заявка на FaceClone:\n";

            formData.forEach((value, key) => {
                message += `🔹 ${key}: ${value}\n`;
            });

            sendMessage(message);
        });
    });
});
