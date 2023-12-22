"use server";

import React, { useContext } from "react";
import Movie from "./Movie";

import { AppContext } from "@/app/ContextProvider";
import { fetchMovieTitles } from "@/app/actions";

const MovieList = async () => {
  const contextData = useContext(AppContext);

  const data = await fetchMovieTitles(contextData.searchOptions.title);

  return (
    <span>{data}</span>

    // {data.results.map((movie: any, index: string) =>
    //     <Movie info={movie} index={index} />
    // )}
  );
};

export default MovieList;
