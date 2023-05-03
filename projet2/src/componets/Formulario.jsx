import React, { useState } from 'react';

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    function handleExibirNomeCompleto(event) {
        event.preventDefault();
        setNomeCompleto(`${nome} ${sobrenome}`);
    }

    return (
        <div>
            <form>
                <label htmlFor="">Nome:</label>
                <input type="text" value={nome} onChange={event => setNome(event.target.value)} /> <br /><br />
                <label htmlFor="">Sobrenome:</label>
                <input type="text" value={sobrenome} onChange={event => setSobrenome(event.target.value)} /><br /><br />
                <button onClick={handleExibirNomeCompleto}>Exibir nome Completo</button>
            </form>
            <br /><br />
            <p>{nomeCompleto}</p>
        </div>
    );
}
