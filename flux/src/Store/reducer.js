import { characterActionTypes } from "./actions";

const charactersInitialState = {
  list: [],
  info: { count: 0, next: 1 },
  loading: false
};

const characterReducer = (state = charactersInitialState, action) => {
  switch (action.type) {
    case characterActionTypes.FETCH_CHARACTER_START:
      return { ...state, loading: true };
    case characterActionTypes.FETCH_CHARACTER_SUCCESS:
      return { ...state, list: action.payload.characters, info: action.payload.info, loading: false };
    case characterActionTypes.FETCH_CHARACTER_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default characterReducer;