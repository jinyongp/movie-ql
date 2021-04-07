import { getMovie, getMovies, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
  },
  Mutation: {
    movie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;
