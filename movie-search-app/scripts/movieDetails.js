const CLIENT_ID = 'hachfDpbVDKS1AGS7dcAi30xOt0XY8TCCQINWHPDuGY';
const options = {
    headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": CLIENT_ID
    }
};

; (() => {
    const params = new URLSearchParams(window.location.search);
    const movie_id = params.get("id");

    get_movie_details(movie_id).then(data => {
        const movie_detail_content = document.querySelector('.movie-detail-content');
        movie_detail_content.innerHTML = show_movie_details(data);
    })
})();

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

function show_movie_details(data) {
    const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        imdbRating,
        imdbVotes,
        Metascore
    } = data;

    return `
        <div class="movie-poster">
            <img src="${Poster}" alt="${Title} poster">
        </div>

        <div class="movie-info">
            <span class="movie-label">MOVIE PROFILE</span>

            <h1 class="movie-title">${Title}</h1>

            <div class="movie-meta">
                <span>${Year}</span>
                <span>${Rated}</span>
                <span>${Runtime}</span>
                <span>${Genre}</span>
            </div>

            <div class="movie-rating">
                <i class="ri-star-fill"></i>
                <strong>${imdbRating}</strong>
                <span>/ 10 IMDb</span>
            </div>

            <p class="movie-plot">
                ${Plot}
            </p>

            <div class="movie-credits">
                <div>
                    <span>DIRECTOR</span>
                    <p>${Director}</p>
                </div>

                <div>
                    <span>WRITER</span>
                    <p>${Writer}</p>
                </div>

                <div>
                    <span>CAST</span>
                    <p>${Actors}</p>
                </div>
            </div>

            <div class="movie-extra">
                <div>
                    <span>RELEASED</span>
                    <p>${Released}</p>
                </div>

                <div>
                    <span>LANGUAGE</span>
                    <p>${Language}</p>
                </div>

                <div>
                    <span>COUNTRY</span>
                    <p>${Country}</p>
                </div>

                <div>
                    <span>AWARDS</span>
                    <p>${Awards}</p>
                </div>
            </div>
        </div>
    `;
}