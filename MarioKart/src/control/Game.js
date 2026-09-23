import Player from "../model/Player.js";
import Dice from "../model/Dice.js";
import Message from "../vision/Message.js";

export default class Game {
    msg;
    #dice;
    #player1;
    #player2;
    #player3;
    #player4;
    #player5;
    #player6;

    constructor() {
        this.msg = new Message();
        this.#dice = new Dice();
        this.#player1 = new Player("Mario",4,3,3,0);
        this.#player2 = new Player("Peach",3,4,2,0);
        this.#player3 = new Player("Yoshi",2,4,3,0);
        this.#player4 = new Player("Bowser",5,2,5,0);
        this.#player5 = new Player("Luigi",3,4,4,0);
        this.#player6 = new Player("Donkey kong",2,2,5,0);
    }

     async start(){
        this.msg.out(await this.#dice.roll());
        this.msg.out(this.#player1.Nome);
        this.msg.out("Novo jogo iniciado");
    }

}