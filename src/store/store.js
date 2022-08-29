import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import {pokemonSlice} from './slices/pokemon/pokemonSlice'

//estoy poniendole nombre al store para despues llamarlo
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, //estoy poniendo el slice
    pokemons: pokemonSlice.reducer
  },
})