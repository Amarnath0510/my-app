import { useParams } from "react-router-dom";

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(movie);
  const styles = { color: "ratings" < 8.5 ? "crimson" : "green", fontWieght: "bold" };
  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="800"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="details">
        <h2 className="movie-name">
          {movie.name}
        </h2>
        <h3 className="movie-ratings" style={styles}>⭐{movie.ratings}</h3>
      </div>
      <p className="movie-summary">{movie.summary}</p>
    </div>
  );
}