import axios from "axios";

const MOVIE_LIST_API = "https://yts.mx/api/v2/list_movies.json";
const MOVIE_DETAILS_API = "https://yts.mx/api/v2/movie_details.json";
const MOVIE_SUGGESTIONS_API = "https://yts.mx/api/v2/movie_suggestions.json";

export const getMovies = async (limit, minimumRating) => {
  try {
    const response = await axios.get(MOVIE_LIST_API, {
      params: { limit, minimum_rating: minimumRating },
    });
    return response.data.data.movies;
  } catch (error) {
    console.error(error);
  }
};

export const getMovie = async (movie_id) => {
  try {
    const response = await axios.get(MOVIE_DETAILS_API, {
      params: { movie_id },
    });
    return response.data.data.movie;
  } catch (error) {
    console.error(error);
  }
};

export const suggestMovies = async (movie_id) => {
  try {
    const response = await axios.get(MOVIE_SUGGESTIONS_API, {
      params: { movie_id },
    });
    return response.data.data.movies;
  } catch (error) {
    console.error(error);
  }
};
