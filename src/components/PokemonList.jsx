import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../store/reducers/pokemons';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
	const dispatch = useDispatch();
	const { list } = useSelector((state) => state.pokemons);
	useEffect(() => {
		dispatch(fetchPokemons());
	}, []);

	return (
		<Row>
			{list.map((item) => (
				<Col>
					<PokemonCard pokemon={item} />
				</Col>
			))}
		</Row>
	);
};

export default PokemonList;
