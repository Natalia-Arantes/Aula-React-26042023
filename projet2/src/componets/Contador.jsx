import { useState } from "react"


export default function Contador(props) {

    const [cont, setCont] = useState(props.v1);


    function incrementar() {
        cont < props.v2 ? setCont(cont + 1) : cont;
    }
    function subtrair() {
        cont > props.v1 ? setCont(cont - 1) : cont;
    }


    return (
        <div>
            <p className="red">Intervalo (limite) do Contador: [{props.v1},{props.v2}]</p>
            <p className="black">Contador: {cont}</p>
            <button onClick={subtrair}>-</button>
            <button onClick={incrementar}>+</button>
        </div >
    )
}
