const CLIENT_ID = 'hachfDpbVDKS1AGS7dcAi30xOt0XY8TCCQINWHPDuGY';
const options = {
    headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": CLIENT_ID
    }
};

const search_input = document.querySelector('#search');
const prev_btn = document.querySelector('#prev');
const next_btn = document.querySelector('#next');
const page_el = document.querySelector('#page');

let movies = [];
let page = 1;
let search_query = "";

; (async () => {
    const movie_ids = await get_movie_list(page);
    const movie_list = await Promise.all(movie_ids.map(id => get_movie_details(id)))
    await render_movies(movie_list);
})();

search_input.addEventListener('input', (e) => {
    search_query = e.target.value.trim().toLowerCase();

    const filtered_movies = movies.filter(movie =>
        movie.Title.toLowerCase().includes(search_query)
    );

    render_movies(filtered_movies);
});

prev_btn.addEventListener('click', async () => {
    if (page <= 1) return;
    const popular_movies = document.querySelector('#movies');
    popular_movies.innerHTML = "";

    page--;
    const movie_ids = await get_movie_list(page);
    const movie_list = await Promise.all(movie_ids.map(id => get_movie_details(id)))
    await render_movies(movie_list);
    page_el.innerText = page;
});

next_btn.addEventListener('click', async () => {
    const popular_movies = document.querySelector('#movies');
    popular_movies.innerHTML = "";

    page++;
    const movie_ids = await get_movie_list(page);
    const movie_list = await Promise.all(movie_ids.map(id => get_movie_details(id)))
    await render_movies(movie_list);

    page_el.innerText = page;
});

async function get_movie_list(page) {
    try {
        const res = await fetch(`https://api.trakt.tv/movies/popular?ratings=80-100&page=${page}&limit=12`, options);
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
        console.log(data)
        return data
    } catch (err) {
        console.log(`Error: ${err.message}`);
        console.log(err);
    }
}

async function render_movie(id, title, year, geners, poster, rating) {
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

                <button class="btn">show more</button>
            </div>
        </div>
    `

    const aside_eli = document.createElement('aside');
    aside_eli.classList.add('movie-card');
    aside_eli.innerHTML = img_container + movie_info;

    const btn = aside_eli.querySelector('.btn');
    btn.addEventListener('click', () => {
        window.location.href = `./movieDetail.html?id=${id}`;
    })

    return aside_eli;
}

function render_movies(movies) {
    const popular_movies = document.querySelector('#movies');

    movies.forEach((movie, index) => {
        const { imdbID, Title, Year, Genre, Poster, imdbRating } = movie;
        
        render_movie(imdbID,Title, Year, Genre, Poster, imdbRating).then(aside_el => {
            popular_movies.appendChild(aside_el);
        })
    })

    return
}
