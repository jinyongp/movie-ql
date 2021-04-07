import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = async (limit, minimumRating) => {
  try {
    const response = await axios.get(API_URL, {
      params: { limit, minimum_rating: minimumRating },
    });
    return response.data.data.movies;
  } catch (error) {
    console.error(error);
  }
};
