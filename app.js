const TAPI_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1'
const UAPI_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1'
const MAPI_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1&query='
const SEARCH_SAPI = 'https://api.themoviedb.org/3/search/tv?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1&query='
const TSAPI_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1'
const USAPI_URL = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1'
const SAPI_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&page=1'

const cinema = document.getElementById('cinema')
const tvSeries = document.getElementById('tv-series')
const utvSeries = document.getElementById('utv-series')
const ltvSeries = document.getElementById('ltv-series')
const form = document.getElementById('form')
const search = document.getElementById('search')
const reloadtButton = document.querySelector("logo");
const lcinema = document.getElementById('lcinema')
const ucinema = document.getElementById('ucinema')



// Get initial movies
getMovies(MAPI_URL)

function getMovies(url) {
    axios.get(url).then((response) =>showMovies(response.data.results))
    
};

function showMovies(movies) {
    cinema.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, overview } = movie

        var summary = overview.split(' ').slice(0,10).join(' ');

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="overview">
                <h3>${title}</h3>
                ${summary}...
            </div>
        `
        cinema.appendChild(movieEl)
    })
}

// Get upcoming movies
getUMovies(UAPI_URL)

function getUMovies(url) {
    axios.get(url).then((response) =>showUMovies(response.data.results))
    
};
function showUMovies(umovies) {
    ucinema.innerHTML = ''

    umovies.forEach((lmovie) => {
        const { title, poster_path, overview } = lmovie

        var summary = overview.split(' ').slice(0,10).join(' ');

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="overview">
                <h3>${title}</h3>
                ${summary}...
            </div>
        `
        ucinema.appendChild(movieEl)
    })
}

// Get top-rated movies
getLMovies(TAPI_URL)

function getLMovies(url) {
    axios.get(url).then((response) =>showLMovies(response.data.results))
    
};

function showLMovies(lmovies) {
    lcinema.innerHTML = ''

    lmovies.forEach((lmovie) => {
        const { title, poster_path, overview } = lmovie

        var summary = overview.split(' ').slice(0,10).join(' ');

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="overview">
                <h3>${title}</h3>
                ${summary}...
            </div>
        `
        lcinema.appendChild(movieEl)
    })
}






// Get initial series
getSeries(SAPI_URL)

function getSeries(url) {
    axios.get(url).then((response) =>showSeries(response.data.results))
    
};

function showSeries(series) {
    tvSeries.innerHTML = ''

    series.forEach((tv) => {
        const { name, poster_path, overview } = tv

        var summary = overview.split(' ').slice(0,10).join(' ');

        const tvEl = document.createElement('div')
        tvEl.classList.add('tv')

        tvEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${name}">
            <div class="overview">
                <h3>${name}</h3>
                ${summary}...
            </div>
        `
        tvSeries.appendChild(tvEl)
    })
}

// Get upcoming series
getTSeries(TSAPI_URL)

function getTSeries(url) {
    axios.get(url).then((response) =>showTSeries(response.data.results))
    
};

function showTSeries(tseries) {
    ltvSeries.innerHTML = ''

    tseries.forEach((tv) => {
        const { name, poster_path, overview } = tv

        var summary = overview.split(' ').slice(0,10).join(' ');

        const tvEl = document.createElement('div')
        tvEl.classList.add('tv')

        tvEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${name}">
            <div class="overview">
                <h3>${name}</h3>
                ${summary}...
            </div>
        `
        ltvSeries.appendChild(tvEl)
    })
}

//On Air

getUSeries(USAPI_URL)

function getUSeries(url) {
    axios.get(url).then((response) =>showUSeries(response.data.results))
    
};

function showUSeries(useries) {
    utvSeries.innerHTML = ''

    useries.forEach((tv) => {
        const { name, poster_path, overview } = tv

        var summary = overview.split(' ').slice(0,10).join(' ');

        const tvEl = document.createElement('div')
        tvEl.classList.add('tv')

        tvEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${name}">
            <div class="overview">
                <h3>${name}</h3>
                ${summary}...
            </div>
        `
        utvSeries.appendChild(tvEl)
    })
}







//SUBMIT
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value
        if(searchTerm && searchTerm !== '') {
            getMovies(SEARCH_API + searchTerm)
            getSeries(SEARCH_SAPI + searchTerm)

            search.value = ''
        } else {
            window.location.reload()
        }
    
   

})
