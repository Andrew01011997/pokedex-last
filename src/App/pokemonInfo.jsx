import React from 'react'
import { observer, inject } from 'mobx-react';
import { Spin, Card, Progress, Button } from 'antd';
import Img from 'react-image';
import { Link } from 'react-router-dom';

// Max HP: 255
// Max Attack: 180
// Max deffense: 230
// Max speed: 180
// Max sp attack: 180
// Max sp deffense: 230
// Max total: 720




let Info = inject('Store')(observer(
    function Main(props) {
        console.log(props.Store.clickedPokemonInfo);
        const back = '<<-- Back';
        return (
            <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Link to='/'>
                    <Button 
                    type='primary' 
                    size='large'
                    style={{ margin: 'auto', marginBottom: 20 }}
                    onClick = {() => props.Store.visibilityOn = 'visible'}
                    >
                    {back}
                    </Button>
                </Link>
                {props.Store.clickedPokemonInfo ?
                    <div style = {{width: '90%'}}>
                        <Card
                            key={props.Store.clickedPokemonInfo.forms[0].name}
                            title={props.Store.clickedPokemonInfo.forms[0].name.charAt(0).toUpperCase()
                                + props.Store.clickedPokemonInfo.forms[0].name.slice(1)}
                            style={{ marginRight: '10vw', marginLeft: '10vw', fontFamily: 'Comic Sans MS' }}
                        >
                            {/* {props.Store.clickedPokemonInfo.id} */}
                            <Img
                                alt=''
                                src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${props.Store.clickedPokemonInfo.id}.png?raw=true`}
                                loader={<Spin size='large' style={{ width: 180, height: 180 }} />}
                                unloader={<Spin size='large' style={{ width: 180, height: 180 }} />}
                                style={{ width: '30%', marginLeft: '35%' }}
                            />
                            <div>
                                <p>Height: {props.Store.clickedPokemonInfo.height}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.height / 55 * 100} showInfo={false} />
                                <p>Base experience: {props.Store.clickedPokemonInfo.base_experience}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.base_experience / 281 * 100} showInfo={false} />
                                <p>Speed: {props.Store.clickedPokemonInfo.stats[0].base_stat}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.stats[0].base_stat / 180 * 100} showInfo={false} />
                                <p>Special deffence: {props.Store.clickedPokemonInfo.stats[1].base_stat}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.stats[1].base_stat / 230 * 100} showInfo={false} />
                                <p>Special attack: {props.Store.clickedPokemonInfo.stats[2].base_stat}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.stats[2].base_stat / 180 * 100} showInfo={false} />
                                <p>Deffence: {props.Store.clickedPokemonInfo.stats[3].base_stat}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.stats[3].base_stat / 230 * 100} showInfo={false} />
                                <p>Attack: {props.Store.clickedPokemonInfo.stats[4].base_stat}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.stats[4].base_stat / 181 * 100} showInfo={false} />
                                <p>HP: {props.Store.clickedPokemonInfo.stats[5].base_stat}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.stats[5].base_stat / 255 * 100} showInfo={false} />
                                <p>Weight: {props.Store.clickedPokemonInfo.weight}</p>
                                <Progress percent={props.Store.clickedPokemonInfo.weight / 9999 * 100} showInfo={false} />
                            </div>
                        </Card>
                    </div>
                    :
                    <Spin
                        size='large'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    ></Spin>
                }

            </div>
        );
    }
)
)
export default Info;