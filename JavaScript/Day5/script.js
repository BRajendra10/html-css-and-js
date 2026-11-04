const users_list = document.querySelector(".users-list");

let users = null;

; (async () => {
    try {
        users = await getUsers();
        renderUsers(users)
    } catch (err) {
        console.log("Error: ", err);
    }
})();


async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json();
    } catch (err) {
        console.log("Error: ", err)
    }
}

function renderUsers(users) {
    // console.log("Render users function", users);
    users.forEach((user, index) => {
        // console.log("loop running")
        const user_container = document.createElement("div");
        user_container.classList.add("user");
        user_container.innerHTML = `
            <span>Name: ${user?.name}</span>
            <span>Email: ${user?.email}</span>
        `

        users_list.appendChild(user_container);
    })
}