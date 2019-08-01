import { getCharacters, getFilteredCharacters } from "../service";

export const characterActionTypes = {
  FETCH_CHARACTER_START: "FETCH_CHARACTER_START",
  FETCH_CHARACTER_SUCCESS: "FETCH_CHARACTER_SUCCESS",
  FETCH_CHARACTER_ERROR: "FETCH_CHARACTER_ERROR"
};

// Action Creators

export const createFetchCharactersStartAction = () => ({
  type: characterActionTypes.FETCH_CHARACTER_START
});

export const createFetchCharactersSuccessAction = payload => ({
  type: characterActionTypes.FETCH_CHARACTER_SUCCESS,
  payload
});

export const createFetchCharactersErrorAction = payload => ({
  type: characterActionTypes.FETCH_CHARACTER_ERROR,
  payload
});

// Async Actions

export const fetchCharacters = () => {
  return dispatch => {
    dispatch(createFetchCharactersStartAction());
    return getCharacters()
      .then(fetchedCharacters => {
        dispatch(createFetchCharactersSuccessAction(fetchedCharacters));
      })
      .catch(err => dispatch(createFetchCharactersErrorAction(err.message)));
  };
};

export const filterCharacters = payload => {
  return dispatch => {
    dispatch(createFetchCharactersStartAction());
    return getFilteredCharacters(payload)
      .then(fetchedCharacters => {
        dispatch(createFetchCharactersSuccessAction(fetchedCharacters));
      })
      .catch(err => dispatch(createFetchCharactersErrorAction(err.message)));
  };
};

export const getPageCharacters = payload => {
  return dispatch => {
    dispatch(createFetchCharactersStartAction());
    return getPageCharacters(payload)
      .then(fetchedCharacters => {
        dispatch(createFetchCharactersSuccessAction(fetchedCharacters));
      })
      .catch(err => dispatch(createFetchCharactersErrorAction(err.message)));
  };
};