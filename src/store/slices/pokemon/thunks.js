import { pokemonApi } from "../../apis/todosApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) =>{
    return async (dispatch, getState) => { //argumento dispach , el getstate 
        //dispara la accion que esta cargando 
        dispatch(startLoadingPokemons()); //la funcion ya dispara un dispatch

        //TODO: accion http
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch(setPokemons({pokemons: data.results, page: page + 1}))//disparo la accion enviando el payload
    }
}