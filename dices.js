// Inicialização das Variáveis

let cenario10 = {
  um: 0,
  dois: 0,
  tres: 0,
  quatro: 0,
  cinco: 0,
  seis: 0,

  max: 10,
  name: "10 lançamentos"
};

let cenario100 = { ...cenario10, max: 100, name: "100 lançamentos" };
let cenario1000 = { ...cenario10, max: 1000, name: "1000 lançamentos" };
let cenario10000 = { ...cenario10, max: 10000, name: "10000 lançamentos" };
let cenario100000 = { ...cenario10, max: 100000, name: "100000 lançamentos" };

let cenarios = [cenario10, cenario1000, cenario10000, cenario100000];

// Execução dos Cenários

cenarios.map(cenario => {
  for (i = 0; i < cenario.max; i++) {
    let lancamento = Math.floor(Math.random() * 6) + 1;

    switch (lancamento) {
      case 1:
        cenario.um++;
        break;
      case 2:
        cenario.dois++;
        break;
      case 3:
        cenario.tres++;
        break;
      case 4:
        cenario.quatro++;
        break;
      case 5:
        cenario.cinco++;
        break;
      case 6:
        cenario.seis++;
        break;
      default:
        console.log("Pickle Rick");
        return;
    }
  }
});

// Apresentação dos Resultados

cenarios.map(cenario => {
  console.log(`Resultados para o cenário de ${cenario.name} :`);
  console.log(`Casos em cada face do dado:\n`);

  console.log(`Um: ${cenario.um} casos\n`);
  console.log(`Dois: ${cenario.dois} casos\n`);
  console.log(`Três: ${cenario.tres} casos\n`);
  console.log(`Quatro: ${cenario.quatro} casos\n`);
  console.log(`Cinco: ${cenario.cinco} casos\n`);
  console.log(`Seis: ${cenario.seis} casos\n`);
  console.log("\n");

  console.log("Probabilidade:\n");
  console.log(`Um: ${cenario.um / cenario.max}\n`);
  console.log(`Dois: ${cenario.dois / cenario.max}\n`);
  console.log(`Três: ${cenario.tres / cenario.max}\n`);
  console.log(`Quatro: ${cenario.quatro / cenario.max}\n`);
  console.log(`Cinco: ${cenario.cinco / cenario.max}\n`);
  console.log(`Seis: ${cenario.seis / cenario.max}\n`);
  console.log("Fim do Resultado\n\n\n");
});
