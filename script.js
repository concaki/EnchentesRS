function showDiv(divId) {
  var contentDivs = document.getElementsByClassName("content-div");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].classList.remove("active");
  }
  document.getElementById(divId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nivelRios").classList.add("active");
});

function fetchAndDisplayDataGuaiba() {
  const url3 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/87444000";
  const url4 =
    "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/87444000";

  Promise.all([
    fetch(url3).then((response) => response.json()),
    fetch(url4).then((response) => response.json())
  ])
    .then(([data3, data4]) => {
      // Processa o JSON response 1
      const rioInfo3 = data3.items[0];
      document.getElementById(
        "chuvaguaiba"
      ).textContent = ` Chuva Atual: ${rioInfo3.chuva_ult} mm`;
      document.getElementById(
        "atualguaiba"
      ).textContent = ` Nivel Atual: ${rioInfo3.nivel_ult} cm`;

      // Processa o JSON response 2
      const rioInfo4 = data4.items[2];
      document.getElementById(
        "anteriorguaiba"
      ).textContent = ` Leitura Anterior: ${rioInfo4.nivel} cm`;
      document.getElementById(
        "dataguaiba"
      ).textContent = ` Data e Hora: ${rioInfo4.data}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

function fetchAndDisplayDataSinos() {
  const url1 = "https://ows.snirh.gov.br/ords/servicos/hidro/mapa/87382000";
  const url2 =
    "https://ows.snirh.gov.br/ords/servicos/hidro/estacao/24h/87382000";

  Promise.all([
    fetch(url1).then((response) => response.json()),
    fetch(url2).then((response) => response.json())
  ])
    .then(([data1, data2]) => {
      // Processa o JSON response 1
      const rioInfo1 = data1.items[0];
      document.getElementById(
        "chuvasinos"
      ).textContent = ` Chuva Atual: ${rioInfo1.chuva_ult} mm`;
      document.getElementById(
        "atualsinos"
      ).textContent = ` Nivel Atual: ${rioInfo1.nivel_ult} cm`;

      // Processa o JSON response 2
      const rioInfo2 = data2.items[2];
      document.getElementById(
        "anteriorsinos"
      ).textContent = ` Leitura Anterior: ${rioInfo2.nivel} cm`;
      document.getElementById(
        "datasinos"
      ).textContent = ` Data e Hora: ${rioInfo2.data}`;

      // Mostra a div inicial
      document.getElementById("nivelRios").classList.add("active");
    })
    .catch((error) => console.error("Erro ao buscar dados da API:", error));
}

/*document.addEventListener("DOMContentLoaded", function () {
  fetchAndDisplayDataGuaiba();
  fetchAndDisplayDataSinos();
});*/
