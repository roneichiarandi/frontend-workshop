import Axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character/";

export const getCharacters = () => {
  return Axios.get(`${baseUrl}`);
};
