import { useState } from "react";

export default function CaixaTxt(props) {

    const [resto, setResto] = useState(props.num);

    function contaCaracteres(event) {
        event.target.value.length <= props.num ?
            setResto(props.num - event.target.value.length) : { resto };
    }

    return (
        <div>
            <label htmlFor="">Mensagem:</label> <br />
            <textarea rows={10} maxLength={props.num} style={{ width: "95%" }} onChange={contaCaracteres}>
            </textarea>
            <p>Restante: {resto} caracteres</p>
        </div>
    )
}