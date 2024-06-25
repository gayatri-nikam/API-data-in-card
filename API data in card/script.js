
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const cardContainer = document.getElementById('card-container');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";

            const name = document.createElement('h2')
            name.textContent = user.name;

            const email = document.createElement('p');
            email.textContent = `Email: ${user.email}`;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${user.phone}`;

            card.appendChild(name);
            card.appendChild(email);
            card.appendChild(phone);

            cardContainer.appendChild(card);

        });
        console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));
