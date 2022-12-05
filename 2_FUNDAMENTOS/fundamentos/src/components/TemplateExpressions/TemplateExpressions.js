const TemplateExpressions = () => {
    const name = "Gui";
    const info = {
        age: "22",
        job: "Empresária"
    }

    return(
        <div>
            <h1>Seu nome é {name}</h1>
            <p>Você tem {info.age} anos e atua como {info.job}</p>
        </div>
    )
}

export default TemplateExpressions;