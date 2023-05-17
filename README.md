![rm name](https://github.com/Thamireslopescz/API-ProjFinal-RM/assets/100656019/644bd4db-9d87-4417-830a-f3c4ed0cea5a)

# API de Rick and Morty - Listagem de Personagens

Esta API permite a listagem de personagens da série Rick and Morty, fornecendo informações sobre cada um deles. 

## Endpoints

### Listar todos os personagens

Retorna uma lista de todos os personagens da série Rick and Morty.

- **URL:** `/characters`
- **Método:** GET
- **Parâmetros de consulta opcionais:**
  - `page` (número da página a ser retornada, padrão é 1)
- **Resposta de exemplo:**

```json
{
  "info": {
    "count": 671,
    "pages": 34,
    "next": "https://api.example.com/characters?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    // Outros personagens...
  ]
}
```

### Obter informações de um personagem

Retorna informações detalhadas de um personagem específico.

- **URL:** `/characters/{id}`
- **Método:** GET
- **Parâmetros de URL:**
  - `id` (identificador único do personagem)
- **Resposta de exemplo:**

```json
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // Outros episódios...
  ]
}
```

## Recursos Disponíveis

A API oferece os seguintes recursos:

- `/characters` - Listagem de todos os personagens.
- `/characters/{id}` - Informações detalhadas de um personagem específico.
- `/episodes` - Listagem de todos os episódios da série.
- `/episodes/{id}` - Informações detalhadas de um episódio específico.
- `/locations` - Listagem de todas as localizações da série.
- `/locations/{id}` - Informações detalhadas de uma localização específica.

## Status de Resposta

A API retorna os seguintes códigos de status:

- 200 OK: Requisição bem-sucedida.
- 404 Not Found: Recurso não encontrado.
- 500 Internal Server Error: Erro interno do servidor.

## Autor

Esta API é mantida e disponibilizada por [Thamires Lopes]. Para mais informações, entre em contato através do email [thamiresribeirocezar@gmail.com].

