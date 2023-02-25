import PlayingField from './playing-field/PlayingField'; // импорт класса PlayingField

const round = new PlayingField(); // помещение всех ячеек в конструктор
round.startGame();

const timerId = setInterval(() => {
  if (round.mask.classList.contains('hide-mask')) {
    round.mask.classList.remove('hide-mask');
    return round.showMask();
  }
  if (round.newScore.miss.textContent === '5') {
    return clearTimeout(timerId);
  }
  round.newScore.addMiss(); // добавление пропуска маски
  return round.showMask();
}, 1000);
