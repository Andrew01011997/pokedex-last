import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import {
    Row,
    Layout,
    Typography,
    Button,
    Input,
    Drawer,
    Checkbox,
} from 'antd';
import { Link } from 'react-router-dom';

import '../Style/header.css';

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

let Header1 = inject('Store')(observer(
    function Main(props) {
        const [isVisible, setVisibility] = useState(false);
        const [types, setTypes] = useState([]);
        const pokemonTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice',
         'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
          'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy'];


        const searcher = (text) => {
            if (text.target.value.length === 0) {
                props.Store.pagePokemons = props.pokemons === null?props.Store.allPokemons
                    .slice(0, props.Store.countShowedPokemons):props.Store.pokemons
                    .slice(0, props.Store.countShowedPokemons);
                return;
            }
            props.Store.pokemons = (props.pokemons === null ? props.Store.allPokemons : props.Store.pokemons)
                .filter(pokemon => {
                    return pokemon.name.indexOf(text.target.value) >= 0;
                });
            props.Store.pagePokemons = props.Store.pokemons.slice(0, props.Store.countShowedPokemons);
            props.Store.countPokemons = props.Store.pokemons.length;
            console.log(text.target.value);
        }
        async function sorter() {
            console.log(props.Store.allPokemons);
            let pokem = await props.Store.allPokemons;
            props.Store.pokemons = await pokem.sort((a, b) => { return a.name > b.name ? 1 : a.name === b.name ? 0 : -1; });
            props.Store.pagePokemons = props.Store.pokemons.slice(0, props.Store.countShowedPokemons);
        }

        async function clearAll() {
            let pokem = await props.Store.allPokemons;
            props.Store.pokemons = pokem;
            props.Store.pagePokemons = props.Store.pokemons.slice(0, props.Store.countShowedPokemons);
        }
        


        return (

            <Header key='header'>
                <Row type="flex" justify="space-between" align='middle'>
                    <Title><Link to='/' onClick={() => props.Store.visibilityOn = 'visible'}> Pokemonchiki </Link></Title>
                    <div className='searchField' style={{ visibility: props.Store.visibilityOn }}>
                        <Search placeholder="Input name of pokemon" onChange={searcher} />
                    </div>
                    <div style={{ visibility: props.Store.visibilityOn }}>
                        <Button type="primary" shape="circle" icon="filter" size='large' onClick={() => setVisibility(true)} />
                        <Button type="primary" shape="circle" icon="sort-ascending" size='large' onClick={sorter} />
                        <Button type="primary" shape="circle" icon="rollback" size='large' onClick={clearAll} />
                    </div>
                </Row>
                <Drawer
                    height={'50vh'}
                    key='drawer'
                    title="Filter"
                    placement="right"
                    closable={false}
                    onClose={() => setVisibility(false)}
                    visible={isVisible}
                    closable={false}
                    style={{ position: 'absolute', }}

                >
                    <p>Chose types of pokemons: </p>
                    <div className='types'>
                        <Checkbox.Group 
                        options={pokemonTypes}
                        onChange = {(value) => setTypes(value)}
                        value = {types}>
                            {/* {showCheckBoxItems()} */}
                        </Checkbox.Group>
                    </div>
                    <Button type='primary' size='large' style={{ marginRight: 30 }} onClick = { () => {
                        props.Store.getMyChose(types);
                        setVisibility(false);
                        }}>Search</Button>
                    <Button type='primary' size='large' onClick = { () => setVisibility(false)}>Cancel</Button>
                </Drawer>
            </Header>);
    }
)
)
export default Header1;
