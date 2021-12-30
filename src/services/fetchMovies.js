export async function fetchTrending() {
  return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26').then(
    response => response.json(),
  );
}

export async function fetchByName(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US&query=${query}&page=1&include_adult=true`,
  ).then(response => response.json());
}

export async function fetchById(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US`).then(
    response => response.json(),
  );
}

export async function fetchCredits(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US`,
  ).then(response => response.json());
}

export async function fetchSimilar(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US&page=1`,
  ).then(response => response.json());
}

export async function fetchVideos(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US`,
  ).then(response => response.json());
}
