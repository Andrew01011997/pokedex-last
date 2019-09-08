import React from 'react';
import { action, observable, decorate } from 'mobx';
import axios from 'axios';


class Store {
    pagePokemons = [];

    countPokemons = null;

    isPokemonsLoading = this.countPokemons == null ? true : false;

    countShowedPokemons = 10;

    clickedPage = 1;

    allPokemons = [];

    pokemons = null;

    types = [];

    clickedPokemonInfo = null;

    visibilityOn = 'visible';

    async getPokemons() {
        this.countPokemons = null;
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${((this.clickedPage - 1) * this.countShowedPokemons)}&limit=${this.countShowedPokemons}/`);
        this.pagePokemons = res.data.results;
        this.countPokemons = 807;
        this.isPokemonsLoading = false;
    }

    async getPokemonsNamesandTypes() {
        this.countPokemons = null;
        this.isPokemonsLoading = true;
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807/`);
        this.allPokemons = res.data.results;
        let resType = await axios.get(`https://pokeapi.co/api/v2/type/`);
        this.types = resType.data.results;
        // console.log(this.types);
        this.countPokemons = 807;
        this.isPokemonsLoading = false;
    }

    changePokemons() {
        this.countPokemons = null;
        let temp = (this.clickedPage - 1) * this.countShowedPokemons;
        this.pagePokemons = this.pokemons.slice(temp, temp + this.countShowedPokemons);
        this.countPokemons = this.pokemons.length;
        this.isPokemonsLoading = false;
    }

    async getPokemonByID(id) {
        this.isPokemonsLoading = true;
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        this.clickedPokemonInfo = res.data;
        this.isPokemonsLoading = false;
    }

    async getMyChose(type) {
        this.isPokemonsLoading = true;
        for (let i = 0; i < type.length; i++) {
            let res = await axios.get(`https://pokeapi.co/api/v2/type/${type[i].toLowerCase()}/`);
            console.log(res);
            if(i===0){
                this.pokemons = null;
                this.pokemons = res.data.pokemon;
            }
            else{
                this.pokemons.concat(res.data.pokemon);
            }
        }
        console.log(this.pokemons);
        this.pokemons = this.pokemons.map(pokemon =>{return {name: pokemon.pokemon.name, url: pokemon.pokemon.url}});
        console.log(this.pokemons);
        this.pagePokemons = this.pokemons.slice(0, this.countShowedPokemons);
        this.countPokemons = this.pokemons.length;
        this.isPokemonsLoading = false;
    }

}
decorate(Store, {
    pagePokemons: observable,
    isPokemonsLoading: observable,
    clickedPage: observable,
    countPokemons: observable,
    countShowedPokemons: observable,
    allPokemons: observable,
    types: observable,
    clickedPokemonInfo: observable,
    visibilityOn: observable,

    getPokemons: action,
    getPokemonsNamesandTypes: action,
})

const pok = new Store();
pok.getPokemons();
pok.getPokemonsNamesandTypes();

export default pok;
export { Store };