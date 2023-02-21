import goblin from '../../picture/goblin.png';
import hammer from '../../picture/hammer.png';


export default class PlayingField {
  constructor(...cells) {
    this.field = [...cells]; // массив с ячейками игрового поля

    this.mask = document.createElement('img'); // создание тега img
    this.mask.setAttribute('src', goblin); // добавление img атрибута src
    this.mask.classList.add('mask'); // добавление класса mask тегу img
   
    this.appearanceCells = [2, 5, 10, 14]; // точки появления маски в начале игры
   
    this.cellNumber; // клетка расположения маски
    // this.cellNumber.addEventListener('mouseover', )

  }

  displayMask() { // добавить маску в ячейку
    return this.field[this.cellNumber].appendChild(this.mask)
  }


  startGame() {
    this.cellNumber = this.appearanceCells.shift(); // первый элемент в массиве = клетки появления маски
    this.appearanceCells.push(this.cellNumber); // возвращение элемента в массив на последнюю позицию
    return this.displayMask() // добавить маску в ячейку
  }

  showMask() {
    const previousCell = this.cellNumber; // предыдущая клетка 

    function getRandomInt() { // генерация рандомного числа
      const min = Math.ceil(0);
      const max = Math.floor(16);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    this.cellNumber = getRandomInt(); // определение клетки появления

    if (this.cellNumber !== previousCell) { // если номер ячейки не равен предыдущей 
      return this.displayMask(); // добавить маску в ячейку
    }

    // console.log(hammer)

    // ИНАЧЕ

    /*    Даже в такой конструкции, есть вероятность,
    что следующая ячейка будет иметь номер предыдущей ячейки */
    this.cellNumber = getRandomInt(); // запустить функцию заново, для генерации нового номера ячейки
    return this.displayMask(); // добавить маску в ячейку
  }
}
