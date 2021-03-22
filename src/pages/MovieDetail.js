import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState();
  //Use Effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  //Above me you are able to see that we want to get url to equal we inputted and find the movie url from MovieState.
  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h1>{movie.title}</h1>
            <img src={movie.mainImg} alt="movies" />
          </Headline>
        </Details>
      )}
    </>
  );
};

const Details = styled.div``;

const Headline = styled.div``;

export default MovieDetail;
