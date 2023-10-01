
import { NavBar } from './components/NavBar'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
// import Counter from './components/Counter/Counter'

function App() {


  return (
    <div className='App'>
     <NavBar/>
        {/* <Counter/> */}
     <ItemListContainer/>
    </div>
  )
}

export default App
