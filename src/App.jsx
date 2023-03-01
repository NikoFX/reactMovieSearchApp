import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import Basket from './Basket'

function App() {
  const [search, setSearch] = useState('')
  const [dataApi, setDataApi] = useState(false)
  const [status, setStatus] = useState(false)
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    setStatus(false)
    fetch(`https://www.omdbapi.com/?apikey=278924d5&s=${search ? search : 'movie'}`)
      .then(res => res.json())
      .then(data => setDataApi({ ...data }))
      .finally(() => {
        setStatus(true)
      })
  }, [search])

  const addToList = (movie) => {
    if (movieList.find(item => item.Title === movie.Title)) {
      return null
    } else {
      setMovieList(movieList => {
        let arr = [...movieList]
        arr.push(movie)
        return arr
      })
    }
  }

  const removeFromList = (movieIndex) => {
    setMovieList(movieList => {
      let arr = [...movieList]
      arr.splice(movieIndex, 1)
      return arr
    })
  }

  return (
    <>
      {movieList.length > 0 ? <Basket movieList={movieList} removeFromList={removeFromList} /> : null}
      <nav>
        <input type="text" onInput={(e) => setSearch(e.target.value)} placeholder='search...' />
      </nav>
      <div className="wrapper">
        {status ? (dataApi.Response === 'True' ? <Movies movies={dataApi.Search} addToList={addToList} /> : <h2>{dataApi.Error}</h2>) : null}
      </div>
    </>
  )
}

export default App