import './App.css';
import hpLogo from './imagenes/Hewlett_Packard_Labs_logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
  
  const elevarCuadrado = () => {
    if (input) {
      setInput(Math.pow(input, 2));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  const unoEntrex = () => {
    if (input) {
      setInput(1/input);
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  const valorAbsoluto = () => {
    if (input) {
      setInput(Math.abs(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
  
  const cambiarSigno = () => {
    if (input) {
      setInput(input * (-1));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  }
  
  const raizCuadrada = () => {
    if (input) {
      setInput(Math.sqrt(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  const factorialDeX = () => {
    if (input) {
      var n = input;   
      var total = 1; 
        for (let i=1; i<=n; i++) {
          total = total * i; 
        } 
      setInput(total);
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  const xElevadoY = () => {
    if (input) {
      setInput(Math.pow(input, 3));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  const diezElevadoX = () => {
    if (input) {
      setInput(Math.pow(10, input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
 
  const logaritmo = () => {
    if (input) {
      setInput(Math.log(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
 
  const logaritmoN= () => {
    if (input) {
      setInput(Math.ln(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };


  return (
    <div className='App'>
      <div className='hp-logo-contenedor'>
        <img 
          src={hpLogo}
          className='hp-logo'
          alt='Logo de Hewlett Packard Labs' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        {/* fila1  */}
        <div className='fila'>
          <Boton manejarClic={elevarCuadrado}>x<sup>2</sup></Boton>
          <Boton manejarClic={unoEntrex}>1/x</Boton>
          <Boton manejarClic={valorAbsoluto}>|x|</Boton>
          <Boton manejarClic={agregarInput}>exp</Boton>
          <Boton manejarClic={agregarInput}>mod</Boton>
        </div>
         {/* fila2  */}
         <div className='fila'>
          <Boton manejarClic={raizCuadrada}><sup>2</sup>&#8730;x</Boton>
          <Boton manejarClic={agregarInput}>(</Boton>
          <Boton manejarClic={agregarInput}>)</Boton>
          <Boton manejarClic={factorialDeX}>n!</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
          {/* fila3  */}
          <div className='fila'>
          <Boton manejarClic={xElevadoY}>x<sup>y</sup></Boton>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
          {/* fila4  */}
          <div className='fila'>
          <Boton manejarClic={diezElevadoX}>10<sup>x</sup></Boton>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
          {/* fila5  */}
          <div className='fila'>
          <Boton manejarClic={logaritmo}>log</Boton>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
          {/* fila6  */}
        <div className='fila'>
          <Boton manejarClic={logaritmoN}>ln</Boton>
          <Boton manejarClic={cambiarSigno}>+/-</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Limpiar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
