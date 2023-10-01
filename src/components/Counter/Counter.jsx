import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext';
function Counter() {

  const {contador,setContador} = useContext(AppContext)
  const [dataUltimoClique, setDataUltimoClique] = useState();

  const incrementarContador = () => {

    setContador(contador + 1);
    setDataUltimoClique(new Date().toLocaleString());
  };
  const diminuirContador = () => {

    setContador(contador - 1);
    setDataUltimoClique(new Date().toLocaleString());
  };

//   const [date, setDate] = useState(newDate);

  return (
    <div>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={diminuirContador}>Diminuir</button>
      <h1>Contador: {contador}</h1>
      <h2>Data último clique: {dataUltimoClique}</h2>

    </div>
  );
}

export default Counter;