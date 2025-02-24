import { useEffect, useState } from "react";
import API from "../api/config";
import { useLocation } from "react-router-dom";
import { UseHighPoster } from "../options/useHighPoster";

function ResultPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("s");

  // searchQuery가 변경될 때마다 실행
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${API.BASE_URL}?apikey=${API.API_KEY}&s=${searchQuery}`
        );
        const data = await response.json();

        console.log(data);

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("fetchMovies Error : ", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <main className="main result-page">
      <section className="section section01">
        <div className="inner">
          <div className="movies-view">
            <ul className="grid-list movies-cardList">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <UseHighPoster poster={movie.Poster} />
                  <h2>{movie.Title}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ResultPage;
