export function ListOfMovies ({movies}) {
    return (
        <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.poster} alt={movie.title}></img></li>
              ))}
        </ul>
    )
}


const NoMoviesResults = () => {
    return (
        <p>No se han encontrado resultados</p>
    )
}

export function Movies ({ movies }) { //pasa por props el array de movies
    //randerizado condicional
    const hasMovies = movies?.length > 0
    return (
        hasMovies ? (
            <ListOfMovies movies={movies} />
        ) : <NoMoviesResults />

        )
}