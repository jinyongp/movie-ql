import { getMovies, getMovie } from "./db";

const resolvers = {
  Query: {
    getMovies: (_, { limit, minimumRating }) => getMovies(limit, minimumRating),
    getMovie: (_, { movie_id }) => getMovie(movie_id),
  },
};

export default resolvers;
