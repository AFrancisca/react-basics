import Home from "./home/Home"
import Navbar from "./Navbar"

function App() {
  return(
  <div className="App">
    <Navbar />
    <div className="content max-w-[600px] my-[40px] mx-auto p-[20px]">
      <Home />
    </div>
  </div>
  )
}

export default App
