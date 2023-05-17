
import axios from 'axios';


async function searchCharacters() {
  const searchInput = document.getElementById('searchInput');
  const cardContainer = document.getElementById('cardContainer');
  const characterCount = document.getElementById('characterCount');

  const searchQuery = searchInput.value.trim();

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?name=${searchQuery}`);

    const characters = response.data.results;
    cardContainer.innerHTML = '';

    characters.forEach(character => {
      const card = createCard(character);
      cardContainer.appendChild(card);
    });

    characterCount.textContent = `PERSONAGENS: ${characters.length}`;
  } catch (error) {
    console.error(error);
  }
}

function createCard(character) {
  const card = document.createElement('article');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  card.appendChild(image);

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  
  const name = document.createElement('h2');
  name.textContent = character.name;
  cardText.appendChild(name);

  const statusSpecies = document.createElement('h4');
  statusSpecies.textContent = `${character.status} - ${character.species}`;
  cardText.appendChild(statusSpecies);

  const lastKnownLocationTitle = document.createElement('p');
  lastKnownLocationTitle.textContent = 'Última localização conhecida:';
  lastKnownLocationTitle.id = 'grey';
  cardText.appendChild(lastKnownLocationTitle);

  const lastKnownLocation = document.createElement('p');
  lastKnownLocation.textContent = character.location.name;
  cardText.appendChild(lastKnownLocation);

  const lastSeenTitle = document.createElement('p');
  lastSeenTitle.textContent = 'Visto a última vez em:';
  lastSeenTitle.id = 'grey';
  cardText.appendChild(lastSeenTitle);

  const lastSeen = document.createElement('p');
  lastSeen.textContent = character.episode[character.episode.length - 1];
  cardText.appendChild(lastSeen);

  card.appendChild(cardText);

  return card;
}
