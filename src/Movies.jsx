import React from 'react'

function Movies({ movies }) {
  return (
    <>
      {movies.map((movie, index) =>
        <div className="card" key={index}>
          <img src={movie.Poster} alt="img" />
          <div className="title">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Movies