import { getMovies } from "./db";

const resolvers = {
  Query: {
    getMovies: (_, { limit, minimumRating }) => getMovies(limit, minimumRating),
  },
};

export default resolvers;
