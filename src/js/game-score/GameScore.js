export default class GameScore {
    constructor(){
        this.point = document.querySelector('.point');
        this.miss = document.querySelector('.miss');

        this.point.textContent = 0;
        this.miss.textContent = 0;
    }

    addPoint(){
        this.point.textContent++;
    }

    addMiss(){
        this.miss.textContent++;
    }
}
