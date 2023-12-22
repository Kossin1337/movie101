import React from "react";
import Image from "next/image";
import "./Movie.scss";

interface IMovie {
  info: any;
  index: String;
}

const Movie = ({ info, index }: IMovie) => {
  if (!info) return;
  console.log("INFO: ", info);

  return (
    <div className="movie-container">
      <span className="movie-title">{info.originalTitleText.text}</span>
      <span className="release">{info.releaseDate.year}</span>
      {/* GENERES */}
      {info.genres ? (
        <div className="genere-list">
          {info.genres.genres.map((genere: any) => {
            return <span>{genere.text}</span>;
          })}
        </div>
      ) : (
        <></>
      )}

      {/* IMAGE */}
      {info?.primaryImage?.url ? (
        <Image
          src={`${info.primaryImage.url}`}
          alt={`${info.originalTitleText.text}`}
          width={`${info.originalTitleText.width || 240}`}
          height={`${info.originalTitleText.height || 360}`}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movie;
