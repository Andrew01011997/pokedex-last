import React from 'react';
import { observer, inject } from 'mobx-react';
import {Link} from 'react-router-dom';
import {
    Card,
    Spin
} from 'antd';
import Img from 'react-image';


let Pokemon = inject('Store')(observer(
    function Main(props) {
        // console.log(props.pokemon);
        let index = props.pokemon.url.slice(34, -1);
        return (<div>
            {!(index)? '' :
            <Link to = '/pokemon'>
                    <Card
                        onClick = {() => {
                            props.Store.getPokemonByID(index);
                            props.Store.visibilityOn = 'hidden';
                        }}
                        key={props.pokemon.name}
                        title={('#' + index + ' ' + (props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)))}
                        style={{ width: 250, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Img
                            alt=''
                            key={props.pokemon.name}
                            src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`}
                            loader={<Spin size='large' style={{ width: 180, height: 180 }} />}
                            unloader={<img src = '../images/noimageavailable.png' alt = '' style={{ width: 180, height: 180 }}/>}
                            style={{ width: 180, height: 180 }}
                        />
                    </Card>
                    </Link>
                }
        </div>
        );
    }
)
)
export default Pokemon;