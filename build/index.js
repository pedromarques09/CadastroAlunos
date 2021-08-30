"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, matricula, numeroA, numeroB) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.matricula = matricula;
        _this.numeroA = numeroA;
        _this.numeroB = numeroB;
        return _this;
    }
    Aluno.prototype.dizerAlgo = function () {
        return "Oi me chamo " + this.nome + " e minha matricula \u00E9 " + this.matricula;
    };
    Aluno.prototype.multiplicar = function () {
        return this.numeroA * this.numeroB;
    };
    Aluno.prototype.somar = function () {
        return this.numeroA + this.numeroB;
    };
    Aluno.prototype.subtrair = function () {
        return this.numeroA - this.numeroB;
    };
    Aluno.prototype.dividir = function () {
        return this.numeroA / this.numeroB;
    };
    Aluno.prototype.calcularRestoDeDivisao = function () {
        return this.numeroA % this.numeroB;
    };
    return Aluno;
}(Pessoa));
window.onload = function () {
    var inputname = document.getElementById("name");
    var inputmatricula = document.getElementById("matricula");
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    var submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        var pedro = new Aluno((inputname.value), (inputmatricula.value), Number(input1.value), Number(input2.value));
        console.log(pedro.dizerAlgo());
        alert(pedro.dizerAlgo() + "\nMultiplicação: " + pedro.multiplicar() +
            "\nSoma: " + pedro.somar() + "\nDivisão: " + pedro.dividir() + "\nResto da Divisão: " + pedro.calcularRestoDeDivisao());
    });
};
