import React, { useEffect, useState } from 'react'
import Movies from './Movies'

function App() {
  let [search, setSearch] = useState('')
  let [dataApi, setDataApi] = useState(false)
  let [status, setStatus] = useState(false)

  useEffect(() => {
    setStatus(false)
    fetch(`https://www.omdbapi.com/?apikey=278924d5&s=${search ? search : 'movie'}`)
      .then(res => res.json())
      .then(data => setDataApi({ ...data }))
      .finally(() => {
        console.log(dataApi);
        setStatus(true)
      })
  }, [search])


  return (
    <>
      <nav>
        <input type="text" onInput={(e) => setSearch(e.target.value)} placeholder='search...' />
      </nav>
      <div className="wrapper">
        {status ? (dataApi.Response === 'True' ? <Movies movies={dataApi.Search} /> : <h2>{dataApi.Error}</h2>) : null}
      </div>
    </>
  )
}

function NotFound() {
  return (
    <>
      <h1>Movie not found!</h1>
    </>
  )
}

export default App