const botao = document.querySelector("#botaoCalcular")

const calcularChurrasco = () => {

    // Coleta valor dos inputs
    const mulheres = document.getElementById('mulheres-qnt').value;
    const homens = document.getElementById('homens-qnt').value;
    const criancas = document.getElementById('criancas-qnt').value;

    const acompanhamentos = document.getElementById('acompanhamentos').value;
    const bebidasAlcoolicas = document.getElementById('bebidas-alcoolicas').value;
    const bebidasNaoAlcoolicas = document.getElementById('bebidas-nao-alcoolicas').value;


    // Logica de valores por grama e multiplicacao da quantidade de pessoas
    let totalCarne = mulheres * 150 + homens * 200 + criancas * 100

    // Soma da quantidade de pessoas
    const totalPessoas = Number(mulheres) + Number(homens) + Number(criancas)
    
    // 50g de acompanhamento por pessoa
    const totalAcompanhamento = acompanhamentos ? 50 * Number(totalPessoas) : 0
    
    // 400ml de bebida nao alcoolica para cada pessoa
    const totalBebidasNaoAlcoolicas = bebidasNaoAlcoolicas ? 500 * Number(bebidasNaoAlcoolicas) : 0
    
    // 500ml de bebida alcoolica para cada pessoa :'D
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? 500 * Number(bebidasAlcoolicas) : 0

    

    document.getElementById("total-carne").innerHTML = `Você precisa comprar ${getValueMeasure(totalCarne, 1)} de carne.`
    document.getElementById("total-pessoas").innerHTML = `Serão ${totalPessoas} pessoas presentes.`
    document.getElementById("total-acompanhamento").innerHTML = `Compre ${getValueMeasure(totalAcompanhamento, 1)} de acompanhamentos.`
    document.getElementById("total-bebidas-nao-alcoolicas").innerHTML = `Compre ${getValueMeasure(totalBebidasNaoAlcoolicas, 2)} de refrigerantes.`
    document.getElementById("total-bebidas-alcoolicas").innerHTML = `E ${getValueMeasure(totalBebidasAlcoolicas, 2)} de cervejas.`

}


/* Definição da medida utilizada a partir da quantidade medida em gramas
type 1: comidas
type 2: bebidas
*/

function getValueMeasure(val, type) {
    switch(type) {
        case 1: {
            return val >= 1000 ? `${val/1000}kg` : `${val}g`
            break;
        }
        case 2: {
            return val >= 1000 ? `${val/1000}L` : `${val}ml`
            break;
        }
    }
}

botao.addEventListener("click", calcularChurrasco)
