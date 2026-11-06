const status_flag = document.querySelector("#status-flag");
const aside = document.querySelector("aside");

const search_input = document.querySelector("input");
const search_btn = document.querySelector(".search-btn");

const cityes = JSON.parse(localStorage.getItem("cityes")) || [];
const city = cityes[cityes.length - 1]

; (() => {
    handle_status("loading", `${city} weather loading...`);
    show_last_searched_cities(cityes);
    get_city_info(city).then(data => {
        show_weather_info(data)
        handle_status("success");
    });
})();

search_btn.addEventListener("click", () => {
    handle_status("loading", `${search_input.value} weather loading...`);
    get_city_info(search_input.value).then(data => {
        show_weather_info(data)
        handle_status("success");
    });

    if (cityes.length >= 5 ) {
        cityes.shift();
    }
    cityes.push(search_input.value);
    localStorage.setItem("cityes", JSON.stringify(cityes));
    search_input.value = "";
})

async function get_city_info(city) {
    try {
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        let data = await res.json();

        data = data.results[0];
        return get_weather_info(data.latitude, data.longitude, data.name);
    } catch (err) {
        handle_status("error", err.message);
        console.log("Error: ", err.message);
    }
}

async function get_weather_info(latitude, longitude, city) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await res.json();
        return { ...data, city };
    } catch (err) {
        handle_status("error", err.message);
        console.log("Error: ", err.message);
    }
}

function show_weather_info(data) {
    const location = document.querySelector("#location");
    const temprature = document.querySelector("#temprature");
    const windspeed = document.querySelector("#windspeed");
    const winddirection = document.querySelector("#winddirection");
    const elevation = document.querySelector("#elevation");

    try {
        handle_status("loading", `${data.city} weather info loading...`);

        location.innerText = data.city;
        temprature.innerText = `${data.current_weather.temperature} ${data.current_weather_units.temperature}`;
        windspeed.innerText = `${data.current_weather.windspeed} ${data.current_weather_units.windspeed}`;
        winddirection.innerText = `${data.current_weather_units.winddirection} ${data.current_weather.winddirection}`;
        elevation.innerText = `${data.elevation} m`;
    } catch (err) {
        handle_status("error", err.message);
        console.log("Error: ", err.message);
    }
}

function show_last_searched_cities(cityes) {
    const cityes_list = document.querySelector("#cityes");
    const first_option = document.createElement("option"); 

    first_option.innerText = "Select Last Searched City";
    first_option.setAttribute("value", "");
    cityes_list.appendChild(first_option);

    cityes.forEach(city => {
        const option = document.createElement("option");
        option.innerText = city;
        option.setAttribute("value", city);
        cityes_list.appendChild(option);
    })
}

function handle_status(status, msg) {
    switch (status) {
        case "loading":
            status_flag.style.display = "block";
            aside.style.display = "none";
            status_flag.innerText = msg || "Loading...";
            break;
        case "success":
            status_flag.style.display = "none";
            aside.style.display = "grid";
            break;
        case "error":
            status_flag.innerText = msg || "Error";
            break;
    }
}