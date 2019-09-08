import React from 'react'
import { observer, inject } from 'mobx-react';
import { Row, Col } from 'antd';

import Pokemon from './pokemon.jsx';


let List = inject('Store')(observer(
    function Main(props) {
        return (

            <Row type="flex" justify="center" align="middle">
                {props.Store.pagePokemons.map((pokemon) => (
                    <Col key={pokemon.name}><Pokemon pokemon={pokemon} /></Col>
                ))}
            </Row>
            );
    }
)
)
export default List;