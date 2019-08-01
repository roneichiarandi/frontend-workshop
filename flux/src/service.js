import Axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character/";

export const getCharacters = () => {
  return Axios.get(`${baseUrl}`).then(response => {
    return {
      characters: response.data.results.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        gender: character.gender,
        origin: character.origin.name
      })),
      info: {
        count: response.data.info.count,
        pages: response.data.info.pages,
        next: response.data.info.next.replace(/\D/g, ''),
        prev: response.data.info.prev.replace(/\D/g, '')
      }
    }
  });
};

export const getFilteredCharacters = searchTerm => {
  return Axios.get(`${baseUrl}?name=${searchTerm}`).then(response => {
    return {
      characters: response.data.results.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        gender: character.gender,
        origin: character.origin.name
      })),
      info: {
        count: response.data.info.count,
        pages: response.data.info.pages,
        next: response.data.info.next.replace(/\D/g, ''),
        prev: response.data.info.prev.replace(/\D/g, '')
      }
    }
  })
}

export const getPageCharacters = page => {
  return Axios.get(`${baseUrl}?page=${page}`).then(response => {
    return {
      characters: response.data.results.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        gender: character.gender,
        origin: character.origin.name
      })),
      info: {
        count: response.data.info.count,
        pages: response.data.info.pages,
        next: response.data.info.next.replace(/\D/g, ''),
        prev: response.data.info.prev.replace(/\D/g, '')
      }
    }
  })
}
