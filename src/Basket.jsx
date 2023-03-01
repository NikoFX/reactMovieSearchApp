import React from 'react'

function Basket({ movieList, removeFromList }) {
  return (
    <div className="basket-window">
      <div className="basket">
        {movieList.map((movie, index) =>
          <div className="card" key={index}>
            <img src={movie.Poster} alt="img" />
            <div className="title">
              <h3>{movie.Title.length < 18 ? movie.Title : movie.Title.slice(0, 17) + '...'}</h3>
              <button className='button' onClick={()=>removeFromList(index)}>Remove from list</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Basket