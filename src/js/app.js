import PlayingField from './playing-field/PlayingField'; // импорт класса PlayingField

const round = new PlayingField(); // помещение всех ячеек в конструктор
round.startGame();

setInterval(() => {
  round.showMask();
  round.newScore.addMiss(); // добавление пропуска маски
}, 5000);
