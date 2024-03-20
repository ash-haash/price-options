
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h2 className="text-6xl font-extrabold text-sky-400">Ash Farhad</h2>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
