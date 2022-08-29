import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement, incrementBy} from './store/slices/counter/counterSlice'

function App() {

  const {counter} = useSelector(state => state.counter) //selecciona algo del store en este caso el couter, en el {} pongo el nombre que puse en el slice del inital
  const dispatch = useDispatch(); //para disparar la accion 
  return (

    <div className="App">
      <header className="App-header">
        <p>count is: { counter }</p>
        <p>
          <button type="button" onClick={ () => dispatch( increment() ) }>
            Increment
          </button>
          <button type="button" onClick={ () => dispatch( decrement() ) }>
            Decrement
          </button>
          <button type="button" onClick={ () => dispatch( incrementBy(2) ) }>
            Increment by 2
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
