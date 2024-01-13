"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var BtnMediaSimple = document.querySelector('#ButtonMediaSimples');
var BtnMediaComposta = document.getElementById('ButtonMediaComposta');
var BtnMediana = document.getElementById('ButtonMediana');
var BtnModa = document.getElementById('ButtonModa');
var flag = 1;
function validaPreenchimento(idInput, idArea, classeResultados, idDiv) {
  var input = document.getElementById(idInput).value;
  if (input == '') {
    var area = document.getElementById(idArea);
    var validacao = document.querySelectorAll('.' + classeResultados);
    if (validacao.length > 0) {
      area.remove();
      area = document.createElement('section');
      area.id = idArea;
      var div = document.getElementById(idDiv);
      div.appendChild(area);
    }
    var h3 = document.createElement('h3');
    h3.innerText = "preencha o input";
    h3.className = classeResultados;
    area.append(h3);
  } else {
    flag = 0;
  }
  return flag;
}
function showResult(idArea, classeResultados, div2, result) {
  var area = document.getElementById(idArea);
  var validacao = document.querySelectorAll('.' + classeResultados);
  var h3 = document.createElement('h3');
  h3.innerText = "Resultado: ".concat(result);
  h3.className = classeResultados;
  if (validacao.length > 0) {
    area.remove();
    area = document.createElement('section');
    area.id = idArea;
    var div = document.getElementById(div2);
    div.appendChild(area);
  }
  area.append(h3);
}
function mediaSimple() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (acc, number) {
    return acc + parseFloat(number);
  }, 0);
  var media = sum / numbers.length;
  return media;
}
function mediaComposta() {
  var num = [];
  var conta = 0;
  var pesos = [];
  var result = [];
  var mediaP = 0;
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  for (var i = 0; i <= numbers.length - 1; i++) {
    var _num$;
    num = numbers[i].split('*');
    conta = parseFloat(num[0]) * parseFloat((_num$ = num[1]) !== null && _num$ !== void 0 ? _num$ : 1);
    result.push(conta);
    pesos.push(parseFloat(num[1]));
  }
  var somaPesos = pesos.reduce(function (acc, peso) {
    var _parseFloat;
    return acc + ((_parseFloat = parseFloat(peso)) !== null && _parseFloat !== void 0 ? _parseFloat : 1);
  }, 0);
  var somaResultados = result.reduce(function (acc, results) {
    return acc + parseFloat(results);
  }, 0);
  return mediaP = somaResultados / somaPesos;
}
function Mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  numbers.sort(function (a, b) {
    return a - b;
  });
  if (numbers.length % 2 == 0) {
    var indiceMaior = numbers.length / 2;
    var indiceMenor = indiceMaior - 1;
    console.log();
    return (parseFloat(numbers[indiceMaior]) + parseFloat(numbers[indiceMenor])) / 2;
  } else {
    var indiceMeio = numbers.length / 2 - 0.5;
    console.log(indiceMeio);
    return numbers[indiceMeio];
  }
}
function Moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var qtd = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  qtd.sort(function (a, b) {
    return b[1] - a[1];
  });
  return qtd[0][0];
}
BtnMediaSimple.addEventListener('click', function (ev) {
  validaPreenchimento('mediaSimples', 'resultAreaSimples', 'resultadosSimples', 'div1');
  if (flag == 0) {
    var input = document.getElementById('mediaSimples').value;
    var newInput = input.split('+');
    var result = mediaSimple.apply(void 0, _toConsumableArray(newInput));
    document.getElementById('mediaSimples').value = '';
    showResult('resultAreaSimples', 'resultadosSimples', 'div1', result);
    flag = 1;
  }
});
BtnMediaComposta.addEventListener('click', function (ev) {
  validaPreenchimento('mediaComposta', 'resultAreaComposta', 'resultadosCompostos', 'div2');
  if (flag == 0) {
    var input = document.getElementById('mediaComposta').value;
    var newInput = input.split(',');
    var result = mediaComposta.apply(void 0, _toConsumableArray(newInput));
    document.getElementById('mediaComposta').value = '';
    showResult('resultAreaComposta', 'resultadosCompostos', 'div2', result);
    flag = 1;
  }
});
BtnMediana.addEventListener('click', function (ev) {
  validaPreenchimento('Mediana', 'resultMediana', 'resultadosMediana', 'div3');
  if (flag == 0) {
    var input = document.getElementById('Mediana').value;
    var newInput = input.split(',');
    var result = Mediana.apply(void 0, _toConsumableArray(newInput));
    document.getElementById('Mediana').value = '';
    showResult('resultMediana', 'resultadosMediana', 'div3', result);
    flag = 1;
  }
});
BtnModa.addEventListener('click', function () {
  validaPreenchimento('Moda', 'resultModa', 'resultadosModa', 'div4');
  if (flag == 0) {
    var input = document.getElementById('Moda').value;
    var newInput = input.split(',');
    var result = Moda.apply(void 0, _toConsumableArray(newInput));
    document.getElementById('Moda').value = '';
    showResult("resultModa", 'resultadosModa', 'div4', result);
    flag = 1;
  }
});