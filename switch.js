function verificaCor() {
    let cor = document.getElementById('cor').value;

    switch (cor) {
        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue";
            break;

        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red";
             break;

        case "verde":
            //o que acontece
            document.body.style.backgroundColor = "green";
            break;

        case "amarelo":
            //o que acontece
            document.body.style.backgroundColor = "yellow";
            break;

        case "roxo":
            //o que acontece
            document.body.style.backgroundColor = "purple";
            break;
        
        default:
            //o que acontece
            document.getElementById('teste').innerHTML =`Nenhuma cor disponível para: ${cor}`;
    }
}

    