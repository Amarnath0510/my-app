import { Movie } from "./Movie";

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, ratings, summary, poster }) => (
        <Movie
          name={name}
          ratings={ratings}
          summary={summary}
          poster={poster} />
      ))}

    </section>
  );
}
