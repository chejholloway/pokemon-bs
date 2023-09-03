import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './reducers/pokemons';

const store = configureStore({
	reducer: {
		pokemons: pokemonsReducer
	}
});

export default store;
