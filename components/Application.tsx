import React from "react";

import Menu from "./Menu";
import MovieList from "./MovieList";

const Application = () => {
  return (
    <div className="application">
      <MovieList />
      <Menu />
    </div>
  );
};

export default Application;
