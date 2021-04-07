import { getMovie, getMovies, createMovie } from "./db";

const resolvers = {
  Query: {
    getMovies,
    getMovie: (_, { id }) => getMovie(id),
  },
  Mutation: {
    createMovie: (_, { name, score }) => createMovie(name, score),
  },
};

export default resolvers;
