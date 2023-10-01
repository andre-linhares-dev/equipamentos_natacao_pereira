
import { NavBar } from './components/NavBar'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
// import Counter from './components/Counter/Counter'
import { Provider } from './context/Provider'
import { ItemCount } from './components/ItemCount'

function App() {


  return (
    <Provider>
      <div className='App'>
        <NavBar />
        {/* <Counter /> */}
        <ItemListContainer />
        <ItemCount />
      </div>
    </Provider>

  )
}

export default App
