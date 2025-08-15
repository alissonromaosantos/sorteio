import { terminal } from "./terminal";

export class Progresso {
  private barra: any;

  constructor(private quantidadeTotal: number) {
    this.barra = terminal.progressBar({
      width: 200,
      title: "Progresso",
      eta: true,
      percent: true,
      syncMode: true,
      items: this.quantidadeTotal
    });
    this.barra.update(0);
  }

  atualizar(quantidade: number) {
    this.barra.update(quantidade / this.quantidadeTotal);
  }
}