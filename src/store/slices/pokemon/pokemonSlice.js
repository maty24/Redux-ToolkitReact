import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemons',//este es el nombre del state
  initialState,
  reducers: {
    startLoadingPokemons: (state,) =>{
        state.isLoading = true;
    },
    //le pongo el action es la informacion que estoy esperando
    setPokemons: (state, action) =>{ //aca estoy llenndo la info
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});

export const {startLoadingPokemons, setPokemons} = pokemonSlice.actions//esto es un generador de acciones, esto le dice al store este es reducer
