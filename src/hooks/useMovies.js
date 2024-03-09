import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies() {
    const movies = responseMovies.Search // props que se manda
    //modelizar el resultado de la api
    const mappedMovies = movies.map((movie) => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }
    })
    return { movies: mappedMovies }
}