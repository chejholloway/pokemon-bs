import { createSlice } from '@reduxjs/toolkit';

// import { baseURL } from '../../../config';

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: {
		list: [],
		loading: false,
		hasErrors: false
	},
	reducers: {
		getPokemons: (state) => {
			state.loading = true;
		},
		getPokemonsSuccess: (state, { payload }) => {
			state.list = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getPokemonsFailure: (state) => {
			state.loading = false;
			state.hasErrors = true;
		}
	}
});

export const { getPokemons, getPokemonsSuccess, getPokemonsFailed } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

export const fetchPokemons = () => async (dispatch, getState) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25`);
		const pokemons = await response.json();
		console.log(pokemons);
		dispatch(fetchPokemonsSuccess(pokemons.results));
	} catch (error) {
		dispatch(fetchPokemonsFailed(error));
	}
};
