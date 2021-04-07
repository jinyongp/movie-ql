const movies = [
  {
    id: 0,
    name: "Avengers",
    score: 4,
  },
  {
    id: 1,
    name: "Harry Potter",
    score: 5,
  },
  {
    id: 2,
    name: "Star Wars",
    score: 3,
  },
  {
    id: 3,
    name: "X man",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getMovie = (pid) => movies.filter(({ id }) => pid === id)[0];

export const addMovie = (name, score) => {
  const newMovie = { id: movies[movies.length - 1].id + 1, name, score };
  movies.push(newMovie);
  return newMovie;
};
