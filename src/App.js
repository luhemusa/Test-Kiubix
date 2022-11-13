import { useEffect, useState } from 'react';
import './App.css';
import Areachart from './components/Areachart';
import Barchart from './components/Barchart';
import Filter from './components/Filter';
import Piechart from './components/Piechart';
import { useGetData } from './use-cases/useGetData';



const App = () => {
  const [data, getData] = useGetData();
  const [anio , setAnio] = useState(2022)
  const [mes , setMes] = useState(8)
  const [tipo , setTipo] = useState('Barras')

  const ChartMap = {
    Barras: <Barchart data={ data.filter(item => item.Ano === anio && item.Mes === mes) } />,
    Area: <Areachart data={ data.filter(item => item.Ano === anio && item.Mes === mes) } />,
    Pie: <Piechart data={ data.filter(item => item.Ano === anio && item.Mes === mes) } />,
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data.filter(item => item.Ano === anio && item.Mes === mes))
  console.log({anio})
  console.log({mes})

  return (
    <div className="App">
      <header className="App-header">
        <h1>Solucion de Ejercicio - KIUBIX - 12/11/2022</h1>
        <h4>By Luis Mujica - Desarrollador Web / luishms10@gmail.com</h4>
        <a href="https://luhemusadev.com">www.luhemusadev.com</a>

      </header>
      {
        data.length > 0 ?
          <div className="content">

            <Filter setAnio={setAnio} setMes={setMes} setTipo={setTipo} />
            { ChartMap[tipo] }

          </div>
          : 
          <h2> 🚧 Not Found Data 🚧 </h2>
      }
    </div>
  );
}

export default App;
