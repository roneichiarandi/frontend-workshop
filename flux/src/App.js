import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import HeaderContainer from './Containers/Header.container';
import CharactersContainer from './Containers/Character.container';

import store from './Store/index'

function App() {
  return (
    <Provider className="App" store={store}>
      <HeaderContainer />
      <CharactersContainer />
    </Provider>
  );
}

export default App;
