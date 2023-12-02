const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();

(async () => {
  // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
  await characterAI.authenticateAsGuest();

  // Place your character's id here
  const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw";

  const chat = await characterAI.createOrContinueChat(characterId);

  // Send a message
  const response = await chat.sendAndAwaitResponse("Hello discord mod!", true);

  console.log(response.text);
  // Use `response.text` to use it as a string
})();