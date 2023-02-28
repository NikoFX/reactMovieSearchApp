import React from 'react'

function Movies({ movies }) {
  return (
    <>
      {movies.map((movie, index) =>
        <div className="card" key={index}>
          <img src={movie.Poster} alt="img" />
          <div className="title">
            <h3>{movie.Title.length<18?movie.Title:movie.Title.slice(0,17)+'...'}</h3>
            <button className='button'>Want To Watch</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Movies