export default class PlayingField {
  constructor(...cells) {
    this.field = [...cells];
    this.mask = document.createElement('img');
    this.mask.setAttribute('src', '../picture/goblin.png');
    this.mask.classList.add('mask');
    this.cellNumber = null;
  }

  showMask() {
    const previousCell = this.cellNumber;

    function getRandomInt() {
      const min = Math.ceil(0);
      const max = Math.floor(16);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.cellNumber = getRandomInt();

    if (this.cellNumber !== previousCell) {
      return this.field[this.cellNumber].appendChild(this.mask);
    }

    // else {
    //     console.log('ooppps')
    //     this.cellNumber = getRandomInt();
    //     this.field[this.cellNumber].appendChild(this.mask);
    // }
    // Не понимаю как как выполнить условие   без перемещения в то же самое поле
  }
}
