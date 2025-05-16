const { getClaudeResponse } = require("./claude");

(async () => {
    const prompt = "Decime una curiosidad sobre el espacio";
    const respuesta = await getClaudeResponse(prompt);
    console.log("Respuesta de Claude:\n", respuesta);
})();
