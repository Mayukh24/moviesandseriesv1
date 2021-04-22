const TAPI_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a3d1d37e68ef5b6e3c68f6fa5f9ba613&language=en-US&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const lcinema = document.getElementById('lcinema')



// Get initial movies
getLMovies(TAPI_URL)

async function getLMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showLMovies(data.results)
}

function showLMovies(lmovies) {
    lcinema.innerHTML = ''

    lmovies.forEach((lmovie) => {
        const { title, poster_path, overview } = lmovie

        var summary = overview.split(' ').slice(0,10).join(' ');

        const lmovieEl = document.createElement('div')
        lmovieEl.classList.add('lmovie')

        lmovieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="overview">
                <h3>${title}</h3>
                ${summary}...
            </div>
        `
        lcinema.appendChild(lmovieEl)
    })
}



