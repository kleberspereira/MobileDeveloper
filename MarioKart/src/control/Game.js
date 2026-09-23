import Player from "../model/Player.js";
import Dice from "../model/Dice.js";
import Track from "../model/Track.js";
import Message from "../vision/Message.js";

export default class Game {
    msg;
    #rounds;
    #players;
    #dice;
    #track;
    #player1;
    #player2;
    #player3;
    #player4;
    #player5;
    #player6;

    constructor(rounds = 5) {
        this.msg = new Message();
        this.#rounds = rounds;
        this.#players = [];
        this.#dice = new Dice();
        this.#track = new Track();
        this.#player1 = new Player("Mario",4,3,3,0);
        this.#player2 = new Player("Peach",3,4,2,0);
        this.#player3 = new Player("Yoshi",2,4,3,0);
        this.#player4 = new Player("Bowser",5,2,5,0);
        this.#player5 = new Player("Luigi",3,4,4,0);
        this.#player6 = new Player("Donkey kong",2,2,5,0);
    
    }

    async start(){;
        this.#players = [this.#player1, this.#player2, this.#player3, this.#player4, this.#player5, this.#player6];
        
        let p1 = Math.floor(Math.random() * this.#players.length);
        let p2 = Math.floor(Math.random() * this.#players.length);

        while(p1 === p2){
            p2 = Math.floor(Math.random() * this.#players.length);
        }
        
        await this.engine(this.#players[p1], this.#players[p2]);
    }

    async engine(p1, p2){
        let p1Score = 0;
        let p2Score = 0;
        let p1Dice = 0;
        let p2Dice = 0;

        this.msg.start(p1.Nome, p2.Nome);

        for(let round = 1; round <= this.#rounds; round++){

            this.#track.randomize();
            
            p1Dice = await this.#dice.roll();
            p2Dice = await this.#dice.roll();

            this.msg.round(round);
            this.msg.track(this.#track.Name);

            if (this.#track.Curva) {
                p1Score = p1.Manobrabilidade + p1Dice;
                p2Score = p2.Manobrabilidade + p2Dice;
            }
            if (this.#track.Reta) {
                p1Score = p1.Velocidade + p1Dice;
                p2Score = p2.Velocidade + p2Dice;
            }
            if (this.#track.Confronto) {
                p1Score = p1.Poder + p1Dice;
                p2Score = p2.Poder + p2Dice;
            }

            if(p1Score > p2Score){
                await p1.updatePoints(1);
                this.msg.win(p1.Nome);
            } else if(p2Score > p1Score){
                await p2.updatePoints(1);
                this.msg.win(p2.Nome);
            } else {
                this.msg.draw();
            }
        }

        if(p1.Pontos > p2.Pontos){
            this.msg.victory(p1.Nome);
        } else if(p2.Pontos > p1.Pontos){
            this.msg.victory(p2.Nome);
        } else {
            this.msg.tie(p1.Nome, p2.Nome);
        }   
    }
}