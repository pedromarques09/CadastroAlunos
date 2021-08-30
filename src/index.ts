abstract class Pessoa{
    abstract dizerAlgo(): string 
    abstract multiplicar(): number
    abstract somar(): number
    abstract subtrair(): number    
    abstract dividir(): number
    abstract calcularRestoDeDivisao(): number
}

class Aluno extends Pessoa{
    nome: string;
    matricula: string;
    numeroA: number;
    numeroB: number;

    constructor(nome: string, matricula: string, numeroA: number, numeroB: number){
        super()
        this.nome = nome;
        this.matricula = matricula;
        this.numeroA = numeroA;
        this.numeroB = numeroB;
    }

    public dizerAlgo(): string {
        return `Oi me chamo ${this.nome} e minha matricula é ${this.matricula}`
    }

    multiplicar() {
      return this.numeroA * this.numeroB
    }

    somar() {
        return this.numeroA + this.numeroB
    }

    subtrair() {
        return this.numeroA - this.numeroB
    }

    dividir() {
        return this.numeroA / this.numeroB
    }

    calcularRestoDeDivisao() {
        return this.numeroA % this.numeroB
    }
}
  

window.onload = function () {
  const inputname = document.getElementById("name") as HTMLInputElement;
  const inputmatricula = document.getElementById("matricula") as HTMLInputElement;
  const input1 = document.getElementById("number1") as HTMLInputElement;
  const input2 = document.getElementById("number2") as HTMLInputElement;
  const submit = document.getElementById("submit") as HTMLElement;

  submit.addEventListener("click", function () {
    const pedro = new Aluno((inputname.value), (inputmatricula.value), Number(input1.value), Number(input2.value));
    console.log(pedro.dizerAlgo())
    alert(pedro.dizerAlgo() + "\nMultiplicação: " + pedro.multiplicar() + 
    "\nSoma: " + pedro.somar() + "\nDivisão: " + pedro.dividir() + "\nResto da Divisão: " + pedro.calcularRestoDeDivisao()) 
  });
  };


