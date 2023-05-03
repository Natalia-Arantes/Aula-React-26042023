import React, { useState } from 'react';

export default function ParagrafosDinamicos() {
    const [paragrafos, setParagrafos] = useState(['Primeiro parágrafo (Interface)', 'Segundo parágrafo (Interface)']);
    const [novoParagrafo, setNovoParagrafo] = useState('');

    function handleAdicionarParagrafo() {
        setParagrafos([...paragrafos, novoParagrafo + ' (Usuario)']);
        setNovoParagrafo('');
    }

    return (
        <div>
            {paragrafos.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
            ))}
            <input type="text" value={novoParagrafo} onChange={(event) => setNovoParagrafo(event.target.value)} />
            <button onClick={handleAdicionarParagrafo}>Adicionar parágrafo</button>
        </div>
    );
}
