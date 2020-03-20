const CHARACTERS_API =
  process.env.REACT_APP_CHARACTERS_API ||
  "https://my-json-server.typicode.com/neuefische/supa-maria/Characters";
const GAMES_API =
  process.env.REACT_APP_GAMES_API ||
  "https://my-json-server.typicode.com/neuefische/supa-maria/Games";

export async function getCharacters() {
  const response = await fetch(CHARACTERS_API);
  const results = await response.json();
  return results;
}
