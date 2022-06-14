export class Game{
    public players: string[] = [];
    public player_images: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation= false;
    public currentCard: string = '';

    constructor(){
        for (let i = 1; i < 14; i++) {
           this.stack.push('spade_' + i as string);
           this.stack.push('hearts_' + i as string);
           this.stack.push('clubs_' + i as string);
           this.stack.push('diamonds_' + i as string);
        }
        shuffle(this.stack);
    }

    public toJson(){
      return {
        players: this.players,
        player_images: this.player_images,
        stack: this.stack,
        playedCard: this.playedCard,
        currentPlayer: this.currentPlayer,
        pickCardAnimation: this.pickCardAnimation,
        currentCard: this.currentCard
      }
    }
}

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }