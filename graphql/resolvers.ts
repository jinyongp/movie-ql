import { getMovies, getMovie, suggestMovies } from "./db";

const resolvers = {
  Query: {
    getMovies: (_, { limit, minimumRating }) => getMovies(limit, minimumRating),
    getMovie: (_, { movie_id }) => getMovie(movie_id),
    suggestMovies: (_, { movie_id }) => suggestMovies(movie_id),
  },
};

export default resolvers;
