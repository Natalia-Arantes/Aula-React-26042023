import CaixaTxt from "./componets/CaixaTxt";
import Contador from "./componets/Contador";
import Formulario from "./componets/Formulario";
import ParagrafosDinamicos from "./componets/ParagraforDinamicos";
import ShowName from "./componets/ShowName";

export default function App() {

  return (
    <div>
      <h1>Lista 05: Natalia</h1>
      <div className="container">
        <h3>Exercicio 01</h3>
        <Contador v1={3} v2={7} />
      </div>
      <div className="container">
        <h3>Exercicio 02</h3>
        <ShowName />
      </div>
      <div className="container">
        <h3>Exercicio 03</h3>
        <CaixaTxt num={20} />
      </div>
      <div className="container">
        <h3>Exercicio 04</h3>
        <Formulario />
      </div>
      <div className="container">
        <h3>Exercicio 05</h3>
        <ParagrafosDinamicos />
      </div>
    </div>

  )
}