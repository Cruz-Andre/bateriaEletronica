import { useRef } from 'react'
import Heater1 from '../../assets/audio/Heater-1.mp3'
import Heater2 from '../../assets/audio/Heater-2.mp3'
import Heater3 from '../../assets/audio/Heater-3.mp3'
import Heater4 from '../../assets/audio/Heater-4_1.mp3'
import Heater6 from '../../assets/audio/Heater-6.mp3'
import Dsc_Oh from '../../assets/audio/Dsc_Oh.mp3'
import Kick_n_Hat from '../../assets/audio/Kick_n_Hat.mp3'
import RP4_KICK_1 from '../../assets/audio/RP4_KICK_1.mp3'
import Cev_H2 from '../../assets/audio/Cev_H2.mp3'

import './Teclado.css'
//import { useDispatch } from 'react-redux'
//import { mostrarTextoNoDisplay } from '../Display/DisplaySlice'

export const TecladoUseRef = () => {

  //const dispatch = useDispatch();

  const Heater1Ref = useRef(null)
  const Heater2Ref = useRef(null)
  const Heater3Ref = useRef(null)
  const Heater4Ref = useRef(null)
  const Heater6Ref = useRef(null)
  const Dsc_OhRef = useRef(null)
  const Kick_n_HatRef = useRef(null)
  const RP4_KICK_1Ref = useRef(null)
  const Cev_H2Ref = useRef(null)
  
  const tocaSom = (audioRef) => {
    console.log(audioRef)
    //dispatch(mostrarTextoNoDisplay(audioRef.current.parentElement.id));
    audioRef.current.play()
  }

  return (
    <div id='' className='tecladoContainer'>
      <div id='heater1' className='drum-pad' onClick={() => tocaSom(Heater1Ref)}>
        <audio ref={Heater1Ref} className='clip' id="Q" src={Heater1}></audio>
        Q
      </div>
      <div id='heater2' className='drum-pad' onClick={() => tocaSom(Heater2Ref)}>
        <audio ref={Heater2Ref} className='clip' id="W" src={Heater2}></audio>
        W
      </div>
      <div id='heater3' className='drum-pad' onClick={() => tocaSom(Heater3Ref)}>
        <audio ref={Heater3Ref} className='clip' id="E" src={Heater3}></audio>
        E
      </div>
      <div id='hit' className='drum-pad' onClick={() => tocaSom(Heater4Ref)}>
        <audio ref={Heater4Ref} className='clip' id="A" src={Heater4}></audio>
        A
      </div>
      <div id='hit' className='drum-pad' onClick={() => tocaSom(Heater6Ref)}>
        <audio ref={Heater6Ref} className='clip' id="S" src={Heater6}></audio>
        S
      </div>
      <div id='hit' className='drum-pad' onClick={() => tocaSom(Dsc_OhRef)}>
        <audio ref={Dsc_OhRef} className='clip' id="D" src={Dsc_Oh}></audio>
        D
      </div>
      <div id='hit' className='drum-pad' onClick={() => tocaSom(Kick_n_HatRef)}>
        <audio ref={Kick_n_HatRef} className='clip' id="Z" src={Kick_n_Hat}></audio>
        Z
      </div>
      <div id='hit' className='drum-pad' onClick={() => tocaSom(RP4_KICK_1Ref)}>
        <audio ref={RP4_KICK_1Ref} className='clip' id="X" src={RP4_KICK_1}></audio>
        X
      </div>
      <div id='hit' className='drum-pad' onClick={() => tocaSom(Cev_H2Ref)}>
        <audio ref={Cev_H2Ref} className='clip' id="C" src={Cev_H2}></audio>
        C
      </div>
    </div>
  )
}