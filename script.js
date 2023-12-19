const frase = document.getElementById('frase');


async function getInfos() {

    let url = "https://api.adviceslip.com/advice";

    try {

        const response = await fetch(url);
        const data = await response.json();

        // Para acessar uma informação dentro de um dict
        let conselho = data['slip']['advice'];

        let msg = conselho;

        frase.innerHTML = msg


    } catch (error) {
        console.log(Error)
    }

}

function getRandomMessage() {
    // Lista de mensagens
    const messages = [
        "Qualquer coisa estamos a disposição para um conselho... até mais!",
        "Você escolheu não receber um conselho.",
        "Tudo bem, estamos a disposição... até logo!",
        "Tenha um ótimo dia!",
        "Até logo!"
    ];

    // Código abaixo gera um indice da minha lista acima de maneira aleatória
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Retornar a mensagem aleatória
    return messages[randomIndex];
}


function not() {

    let msg = getRandomMessage();

    frase.innerHTML = msg

    // Função setTimeout faz com que depois de um tempo a minha função rode
    setTimeout(function () {

        // Código abaixo usado para redirecionar para uma página especifica
        window.location.href = "http://renanolv.pythonanywhere.com";

    }, 3000); // 3000 milissegundos = 3 segundos


}


