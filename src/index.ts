import { carregarPessoas } from "./functions/carregar-pessoas";
import { sortearAzarado } from "./functions/sortear-azarado";
import { terminal } from "./ui/terminal";

async function rodar() {
  const pessoas = carregarPessoas("src/data/dados.csv");
  const duracaoEmSegundos = 5;
  const azarado = await sortearAzarado(pessoas, duracaoEmSegundos);

  terminal.clear();

  terminal.white("\n\nO").brightRed(" AZARADO");
  terminal.bold.brightGreen(" MAIS SORTUDO").white(" é: \n");
  terminal.bold.brightYellow(azarado.toString());
  terminal("\n\n🎉🎉🎉🎉🎉🎉🎉");
  console.log();
}

rodar();