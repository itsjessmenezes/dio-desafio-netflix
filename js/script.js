// minha lista
const myListCarousel = document.querySelector('.my-list-carousel')
const createItemMyList = document.createElement('div');

const createMoviesMyList = fetch(url)
  .then(res => res.json()).then(async function (data) {
    await data.results.forEach(async function (movie) {
      const imageMovie = document.createElement('div');
      console.log(movie)
      imageMovie.style.backgroundImage = `url(${movie.poster_path})`;
      imageMovie.classList = 'item';
      createItemMyList.append(imageMovie);

    });
  });


myListCarousel.append(createItemMyList);

//top 10
const topTen = document.querySelector('.top-ten')
const createItemTopTen = document.createElement('div');

const createMoviesTopTen = fetch(url)
  .then(res => res.json()).then(async function (data) {
    await data.results.forEach(async function (movie, index) {
      if (index > 9) {
        const imageMovie = document.createElement('div');
        imageMovie.style.backgroundImage = `url(${movie.poster_path})`;
        imageMovie.classList = 'item';
        createItemTopTen.append(imageMovie);
      }
    });
  });


topTen.append(createItemTopTen);

//continue assistindo
const keepWatching = document.querySelector('.keep-watching')
const createItemKeepWatching = document.createElement('div');

const createMoviesKeepWatching = fetch(url)
  .then(res => res.json()).then(async function (data) {
    await data.results.forEach(async function (movie, index) {
      if (index > 6) {
        const imageMovie = document.createElement('div');
        imageMovie.style.backgroundImage = `url(${movie.poster_path})`;
        imageMovie.classList = 'item';
        createItemKeepWatching.append(imageMovie);
      }
    });
  });


keepWatching.append(createItemKeepWatching);