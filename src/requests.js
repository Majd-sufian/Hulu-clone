const API_KEY = "ffbf77264f014990fb7b418335986e13";

const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Mystey: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  SciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  Western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  Animation: `/discover/movie?api_key=${API_KEY}&with_genres=19`,
  Movies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default requests;
