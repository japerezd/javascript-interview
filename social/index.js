
const container = document.querySelector('.container');

// Version 1
// async function getUsers() {
//     const response  = await fetch('https://randomuser.me/api/?results=10');
//     const {results} = await response.json();
//     const profileDiv = results.map(result => (
//         `<div class="profile">
//             <img src="${result.picture.thumbnail}" alt="${result.name.first}"/>
//             <h2 class="profile__username">${result.name.first} ${result.name.last}</h2>
//         </div>`
//     ));

//     profileDiv.forEach(item => {
//         container.innerHTML += item;
//     });
// }

// Version 2
async function getUsers() {
    const response  = await fetch('https://randomuser.me/api/?results=10');
    const {results} = await response.json();
    results.forEach(result => {
        const profile = document.createElement('div');
        profile.classList.add('profile');

        const img = document.createElement('img');
        img.setAttribute('src', result.picture.thumbnail);
        img.setAttribute('alt', result.name.first);

        const h2 = document.createElement('h2');
        h2.classList.add('profile__username');
        h2.innerHTML = `${result.name.first} ${result.name.last}`;

        profile.appendChild(img);
        profile.appendChild(h2);
        container.appendChild(profile);
    });
}

getUsers();