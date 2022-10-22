const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('Последний фильм?', ''),
    b = prompt('его оценка?', ''),
    c = prompt('Последний фильм?', ''),
    d = prompt('его оценка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

