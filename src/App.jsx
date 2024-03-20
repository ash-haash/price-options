
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <Phones></Phones>
      <LineChart></LineChart>

    </>
  )
}

export default App
