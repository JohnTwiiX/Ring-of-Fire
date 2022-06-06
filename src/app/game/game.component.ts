import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation= false;
  currentCard: string | undefined;
  game = new Game;
  

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game;
    console.log(this.game);
  }

  takeCard(){
    if(!this.pickCardAnimation){
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);
      this.pickCardAnimation= true;
      console.log(this.game);
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard as string);
        this.pickCardAnimation =false;
      }, 1300);
    }
  }

}
