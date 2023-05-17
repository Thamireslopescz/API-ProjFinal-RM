// Função para fazer uma requisição HTTP GET usando o Axios
function fazerRequisicao(url, callback) {
    axios.get(url)
      .then(function(response) {
        callback(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  
  // Função para listar os personagens na página HTML
  function listarPersonagens(personagens) {
    var cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';
  
    personagens.forEach(function(personagem) {
      var card = document.createElement('article');
      card.className = 'card';
  
      var img = document.createElement('img');
      img.src = personagem.image;
      img.alt = 'Imagem ' + personagem.name;
      card.appendChild(img);
  
      var cardText = document.createElement('div');
      cardText.className = 'card-text';
  
      var h2 = document.createElement('h2');
      h2.textContent = personagem.name;
      cardText.appendChild(h2);
  
      var h4 = document.createElement('h4');
      h4.textContent = personagem.status + ' - ' + personagem.species;
      cardText.appendChild(h4);
  
      var ultimaLocalizacao = document.createElement('p');
      ultimaLocalizacao.textContent = 'Última localização conhecida:';
      ultimaLocalizacao.id = 'grey';
      cardText.appendChild(ultimaLocalizacao);
  
      var localizacao = document.createElement('p');
      localizacao.textContent = personagem.location.name;
      cardText.appendChild(localizacao);
  
      var vistoUltimaVez = document.createElement('p');
      vistoUltimaVez.textContent = 'Visto a última vez em:';
      vistoUltimaVez.id = 'grey';
      cardText.appendChild(vistoUltimaVez);
  
      var ultimaVez = document.createElement('p');
      ultimaVez.textContent = personagem.episode[personagem.episode.length - 1];
      cardText.appendChild(ultimaVez);
  
      card.appendChild(cardText);
      cardContainer.appendChild(card);
    });
  }
  
  // Função para buscar personagens com base no termo de pesquisa
  function buscarPersonagens() {
    var inputSearch = document.querySelector('.search input');
    var searchTerm = inputSearch.value.trim();
  
    if (searchTerm === '') {
      var url = 'https://rickandmortyapi.com/api/character/';
      fazerRequisicao(url, listarPersonagens);
    } else {
      var url = 'https://rickandmortyapi.com/api/character/?name=' + searchTerm;
      fazerRequisicao(url, listarPersonagens);
    }
  }
  
  // Função principal que será chamada ao carregar a página
  function main() {
    var inputSearch = document.querySelector('.search input');
    var buttonSearch = document.querySelector('.search button');
  
    inputSearch.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        buscarPersonagens();
      }
    });
  
    buttonSearch.addEventListener('click', buscarPersonagens);
  
    var url = 'https://rickandmortyapi.com/api/character/';
    fazerRequisicao(url, listarPersonagens);
  }
  
  // Chama a função principal ao carregar a página
  window.onload = main;
  