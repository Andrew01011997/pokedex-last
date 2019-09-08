import React from 'react';
import { observer, inject } from 'mobx-react';
import { Pagination, Layout } from 'antd';

import '../Style/footer.css';

const { Footer } = Layout;

let Footer1 = inject('Store')(observer(
    function Main(props) {

        const changePage = (value) => {
            props.Store.clickedPage = value;
            if (props.Store.pokemons === null) {
                props.Store.getPokemons();
            }
            else {
                props.Store.changePokemons();
            }
        }

        const changeSize = (current, value) => {
            props.Store.countShowedPokemons = value;
            if (props.Store.pokemons === null) {
                props.Store.getPokemons();
            }
            else {
                props.Store.changePokemons();
            }
        }

        return (
            <Footer key='pagination'>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={changeSize}
                    pageSizeOptions={['10', '20', '50']}
                    defaultCurrent={props.Store.clickedPage}
                    total={props.Store.countPokemons}
                    onChange={changePage}
                    style = {{visibility: props.Store.visibilityOn}}
                />
            </Footer>
        );
    }
)
)

export default Footer1;