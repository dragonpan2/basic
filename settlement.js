

class Settlement {

    constructor() {
        this.name = "";
        this.population = ""; //if  pop < 200 => village, pop < 1000 town, pop < 10000 city

        this.crime = 50; //0 = no, 100= max, 50=default
    }
}

module.exports = Settlement;