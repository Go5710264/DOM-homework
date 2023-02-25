import goblin from '../../picture/goblin.png';
import GameScore from '../game-score/GameScore';

export default class PlayingField {
  constructor() {
    this.field = document.querySelectorAll('.cell')

    this.mask = document.createElement('img'); // создание тега img
    this.mask.setAttribute('src', goblin); // добавление img атрибута src
    this.mask.classList.add('mask'); // добавление класса mask тегу img

    this.appearanceCells = [2, 5, 10, 14]; // точки появления маски в начале игры

    this.cellNumber = null; // клетка расположения маски
    this.newScore = new GameScore();

    // this.mask.addEventListener('click', () => { // при нажатии на маску +1 балл
    //   newScore.addPoint();
    //   this.showMask();
    // });

    console.log(this.field)

    this.field.forEach((cell) => cell.addEventListener('click', () => {
      if(cell.firstElementChild === this.mask) {
        this.newScore.addPoint();
        return this.showMask();
      }
      this.newScore.addMiss()
    }))


  }

  displayMask() { // добавить маску в ячейку
    return this.field[this.cellNumber].appendChild(this.mask);
  }

  startGame() {
    this.cellNumber = this.appearanceCells.shift();
    // первый элемент в массиве = клетки появления маски
    this.appearanceCells.push(this.cellNumber);
    // возвращение элемента в массив на последнюю позицию
    return this.displayMask(); // добавить маску в ячейку
  }

  showMask() {
    const previousCell = this.cellNumber; // предыдущая клетка

    function getRandomInt() { // генерация рандомного числа
      const min = Math.ceil(0);
      const max = Math.floor(16);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    this.cellNumber = getRandomInt(); // определение клетки появления
    // this.newScore.addMiss(); // добавление пропуска маски


// переключение между нажатием на маску и появлением маски в новом месте также дает промах!!!!
    



    if (this.cellNumber !== previousCell) {
    // если номер ячейки не равен предыдущей
      return this.displayMask(); // добавить маску в ячейку
    }

    // ИНАЧЕ

    /*    Даже в такой конструкции, есть вероятность,
    что следующая ячейка будет иметь номер предыдущей ячейки */
    this.cellNumber = getRandomInt();
    // запустить функцию заново, для генерации нового номера ячейки
    return this.displayMask(); // добавить маску в ячейку
  }


}
