const CHARACTERS_API = "http://localhost:4000/characters";
// process.env.REACT_APP_CHARACTERS_API ||
// "https://my-json-server.typicode.com/neuefische/supa-maria/characters";
const GAMES_API = "http://localhost:4000/games";
// process.env.REACT_APP_GAMES_API ||
// "https://my-json-server.typicode.com/neuefische/supa-maria/games";

export async function getCharacters() {
  const response = await fetch(CHARACTERS_API);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const results = await response.json();
  return results;
}
