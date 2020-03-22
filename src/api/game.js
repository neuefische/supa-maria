const CHARACTERS_API =
  process.env.REACT_APP_CHARACTERS_API ||
  "https://my-json-server.typicode.com/neuefische/supa-maria/characters";

export async function getCharacters() {
  const response = await fetch(`${CHARACTERS_API}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const results = await response.json();
  return results;
}
