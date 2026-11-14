const CLIENT_ID = 'hachfDpbVDKS1AGS7dcAi30xOt0XY8TCCQINWHPDuGY';
const options = {
    headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": CLIENT_ID
    }
};

let movies = [];

; (async () => {
    const movie_ids = await get_movie_list();
    const movie_list = await Promise.all(movie_ids.map(id => get_movie_details(id)))
    await render_movies(movie_list);
})();

async function get_movie_list() {
    try {
        const res = await fetch(`https://api.trakt.tv/movies/popular?ratings=80-100&page=1&limit=6`, options);
        const data = await res.json();

        return data.map(movie => movie.ids.imdb);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err);
    }
}

async function get_movie_details(id) {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=5416736c&i=${id}&plot=full`);
        const data = await res.json();
        return data
    } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err);
    }
}

async function render_movie(title, year, geners, poster, rating) {
    const img_container = `
    <div class="img-container">
        <img src="${poster}" alt="${title} poster" />
    </div>
    `
    const movie_info = `
        <div class="movie-info">
            <div>
                <span class="rating">
                    <i class="ri-star-fill"></i> ${Number(rating).toFixed(1)}
                </span>
                <button><i class="ri-heart-line"></i></button>
            </div>
            <div class="info">
                <h5 class="title">${title}</h5>
                <p>
                    <span>${year}</span> 
                    <span class="geners">${geners}</span> 
                </p>
            </div>
        </div>
    `

    const aside_eli = document.createElement('aside');
    aside_eli.classList.add('movie-card');
    aside_eli.innerHTML = img_container + movie_info;

    return aside_eli;
}


function render_movies(movies) {
    const popular_movies = document.querySelector('#popular-movies');

    movies.forEach(movie => {
        const { Title, Year, Genre, Poster, imdbRating } = movie;
        console.log(movie);
        render_movie(Title, Year, Genre, Poster, imdbRating).then(aside_el => {
            popular_movies.appendChild(aside_el);
        })
    })

    return
}
