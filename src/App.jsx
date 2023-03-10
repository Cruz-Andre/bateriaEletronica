import { Display } from './components/Display/Display'
import Footer from './components/Footer/Footer'
import { Teclado } from './components/Teclado/Teclado'
//import { TecladoUseRef } from './components/Teclado/TecladoUseRef'
import './styles/App.css'

function App() {

  return (
    <>
      <h1 className='titulo'>Bateria Eletrônica</h1>
      <div id='drum-machine' className="App">
        <Teclado />
      </div>
      <Display />
      {/* <h1 className='titulo'>Bateria Eletrônica useRef</h1>
      <div>
        <TecladoUseRef />
        <Display />
      </div> */}
      <Footer />
    </>
  )
}

export default App
