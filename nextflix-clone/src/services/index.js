const NETFLIX_KEY = import.meta.env.VITE_NETFLIX_API_KEY;

function setURL(query, offset = 0, limit_titles = 50, limit_suggestions = 20) {
  return `https://netflix-data.p.rapidapi.com/search/?query=${query}&offset=${offset}&limit_titles=${limit_titles}&limit_suggestions=${limit_suggestions}`;
}

export async function searchInNetflix(search) {
  const response = await fetch(setURL(search), {
    headers: {
      "X-RapidAPI-Key": NETFLIX_KEY,
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  });

  const data = response.json();
  return data;
}
