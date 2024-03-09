import './App.css'
import { useState , useRef, useEffect} from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'


function App() {
  const { movies } = useMovies() // destructuring de la funcion useMovies
  const inputRef = useRef()
  const [ query , setQuery ] = useState('')
  const [ error, setError ] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new FormData(event.target))
   
    //const fields = new FormData(event.target) Object.fromEntries(new FormData(event.target)) --> se sacan todos los fields
    //const query = fields.get('query')

    //const inputEl = inputRef.current //siempre en el current, esto es lo que cambia
    //const value = inputEl.value
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return //controla la entrada de espacios al inicio
    setQuery(event.target.value)
  }

  useEffect(() => { 
    if( query === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    } 

    if (query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)// si no hay error, se limpia el error
   
  }, [ query ]) // se ejecuta dependiendo del valor de la query


  return (
    <div className='page'>
      <header>
      <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={ handleSubmit }>
        <input onChange={ handleChange } name='query' ref={ inputRef } placeholder='introduce nombre de pelicula'></input>
        <button type='submit'>Buscar</button>
      </form>
      { error && <p style={{color : red }}>{error}</p>}
      </header>

      <main>
        <Movies movies={ movies } />
      </main>
    </div>
  )
}

export default App
