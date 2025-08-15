import { Pessoa } from "../model/Pessoa";
import { Progresso } from "../ui/progresso";

export async function sortearAzarado(pessoas: Pessoa[], duracaoEmSegundos: number): Promise<Pessoa> {
  let restantes = [...pessoas];

  const progresso = new Progresso(pessoas.length);
  const tempoDeEspera = (duracaoEmSegundos / pessoas.length) * 1000;

  for (let i = 0; i < pessoas.length; i++) {
    restantes = todosMenosUm(restantes);
    await esperar(tempoDeEspera);
    progresso.atualizar(i + 1);
  }

  return restantes[0];
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[] {
  if (pessoas.length === 1) return pessoas;
  const sorteado = Math.floor(Math.random() * pessoas.length);
  pessoas.splice(sorteado, 1);
  return pessoas; 
}

function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms)
  });
}