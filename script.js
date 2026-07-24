const form = document.querySelector("form");
const divResult = document.querySelector(".resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const loading = document.createElement("div");
    loading.classList.add("carregamento");
    divResult.appendChild(loading);

    setTimeout(() => {
        divResult.removeChild(loading);
        const name = document.getElementById("nome").value;
        const weight = Number(document.getElementById("peso").value);
        const height = parseFloat(document.getElementById("altura").value);
        const imc = weight / (height * height);
        let message = "";

        if (imc < 18.5) {
            message = "Abaixo do peso ideal. Que tal consultar um nutricionista.";
        } else if (imc <= 24.9) {
            message = "Peso saudável! Continue mantendo seus bons hábitos.";
        } else if (imc <= 29.9) {
            message = "Sobrepeso leve. Cuidar da alimentação e se exercitar ajuda!";
        } else if (imc <= 34.9) {
            message = "Obesidade Grau I. É recomendado buscar orientação médica.";
        } else if (imc <= 39.9) {
            message = "Obesidade Grau II. Procure acompanhamento de saúde especializado.";
        } else {
            message = "Obesidade Grau III. Busque apoio médico para cuidar da sua saúde";
        }
        if (!name || weight <= 0 || height <= 0) {
            divResult.innerHTML = "Preencha todos os campos!"
        } else {
            divResult.textContent = "";
            divResult.innerHTML = `
                <h4>${name}</h4>
                <span>Seu IMC é de ${imc.toFixed(2)}</span>
                <p>${message}</p>
                `
        }
    }, 2000)

})