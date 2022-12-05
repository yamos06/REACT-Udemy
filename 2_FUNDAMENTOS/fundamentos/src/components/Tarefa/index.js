const Tarefa = () => {
    const a = 1;
    const b = 2;

    const handleSoma = () => {
        console.log(a + b);
    }
    return(
        <div>
            <p>A é igual a {a}, B é igual a {b}</p>
            <button onClick={handleSoma}>Clique pra somar!</button>
        </div>
        
    )
};

export default Tarefa;