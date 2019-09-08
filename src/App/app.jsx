import React from 'react'
import { observer, inject } from 'mobx-react';
import { Layout, Spin, Alert } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderFile from './header.jsx';
import FooterFile from './footer.jsx';
import PokemonList from './pokemonList.jsx';
import PokemonInfo from './pokemonInfo.jsx';

import '../Style/app.css'

let App = inject('Store')(observer(
    function Main(props) {

        return (
            <BrowserRouter>
                <Layout>
                    <Layout.Header className='headerElement'>
                        <HeaderFile />
                    </Layout.Header>
                    <Layout.Content>
                        {props.Store.isPokemonsLoading ?
                            (<Spin tip="Loading..." size='large' key="spinner">
                                <Alert
                                    message="Pokemons are loading"
                                    type="info"
                                />
                            </Spin>)
                            :
                            (
                                <div>
                                    <Route exact path='/' component={PokemonList} />
                                    <Route path='/pokemon/' component={PokemonInfo} />
                                </div>
                            )}
                    </Layout.Content>
                    <Layout.Footer className='pagination'>
                        <FooterFile />
                    </Layout.Footer>
                </Layout>
            </BrowserRouter>
        );
    }
)
)

export default App;