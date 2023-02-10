import PlayingField from './playing-field/PlayingField'; // импорт класса PlayingField

const round = new PlayingField(...document.querySelectorAll('.cell')); // помещение всех ячеек в конструктор

setInterval(() => {
  round.showMask();
}, 1000);
