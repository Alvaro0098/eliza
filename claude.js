const axios = require("axios");
require("dotenv").config();

async function getClaudeResponse(prompt) {
    try {
        const response = await axios.post(
            "https://api.anthropic.com/v1/messages",
            {
                model:
                    process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-20241022",
                max_tokens: 300,
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    "x-api-key": process.env.ANTHROPIC_API_KEY,
                    "anthropic-version": "2023-06-01",
                    "content-type": "application/json",
                },
            }
        );

        return response.data.content[0].text.trim();
    } catch (error) {
        console.error(
            "Error al llamar a Claude:",
            error.response?.data || error.message
        );
        return null;
    }
}

module.exports = { getClaudeResponse };
