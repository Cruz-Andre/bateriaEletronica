import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mostrarTextoNoDisplay } from '../Display/displaySlice'

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

export const Teclado = () => {

  const dispatch = useDispatch();

  const tocaSom = (evento) => {
    dispatch(mostrarTextoNoDisplay((evento.target.id).replaceAll('_', ' ')));
    console.log(evento)
    const som = document.getElementById(evento.target.innerText)
    console.log(som)
    som.currentTime = 0
    som.play()
  }

  const teclaDown = (evento) => {
    console.log('TeclaDown', evento)
    const teclaPressionada = evento.key.toUpperCase();
    console.log(teclaPressionada)
    const som = document.getElementById(teclaPressionada);
    if (som) {
      som.currentTime = 0
      som.play()
      dispatch(mostrarTextoNoDisplay((som.parentElement.id).replaceAll('_', ' ')))
      som.parentElement.classList.add('ativa')
      console.log(som.parentElement.classList)
    }
  }

  const teclaUp = (evento) => {
    console.log("TeclaUP", evento)
    const elemento = document.getElementById(evento.key.toUpperCase())
    console.log(elemento)
    elemento.parentElement.classList.remove('ativa')
    console.log(elemento.parentElement.classList)
  }
  
  useEffect(() => {
    document.addEventListener("keydown", teclaDown)
    document.addEventListener("keyup", teclaUp)
    return () => {
      document.removeEventListener("keydown", teclaDown)
      document.removeEventListener("keyup", teclaUp)
    }
  }, [])



  return (
    <div className='tecladoContainer'>
      <div id='Heater_1' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="Q" src={Heater1}></audio>
        Q
      </div>
      <div id='Heater_2' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="W" src={Heater2}></audio>
        W
      </div>
      <div id='Heater_3' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="E" src={Heater3}></audio>
        E
      </div>
      <div id='Heater_4' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="A" src={Heater4}></audio>
        A
      </div>
      <div id='Heater_6' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="S" src={Heater6}></audio>
        S
      </div>
      <div id='Dsc_Oh' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="D" src={Dsc_Oh}></audio>
        D
      </div>
      <div id='Kick_n_Hat' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="Z" src={Kick_n_Hat}></audio>
        Z
      </div>
      <div id='RP4_KICK_1' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="X" src={RP4_KICK_1}></audio>
        X
      </div>
      <div id='Cev_H2' className='drum-pad' onClick={tocaSom}>
        <audio className='clip' id="C" src={Cev_H2}></audio>
        C
      </div>
    </div>
  )
}