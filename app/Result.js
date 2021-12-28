class Result {
  constructor(){
    this.wins = document.querySelector('.wins span');
    this.losses = document.querySelector('.losses span');
    this.draws = document.querySelector('.draws span');
    this.game = document.querySelector('.numbers span');
   
    this.licznikGier = 1;
    this.licznikWygranych = 1;
    this.licznikPorażek = 1;
    this.licznikResmisów = 1;
    this.my = new MyChoice().getPlayerChoice();
    this.my2 = new AiChoice().getAiChoice();
    
  }
  
  checkWinner(player = this.my,ai = this.my2){
    
  const playerBorder = document.querySelector('.win');
  playerBorder.classList.add('active');
    this.game.textContent = this.licznikGier++;
     if((player === ai)){
        this.draws.textContent = this.licznikResmisów++;
        playerBorder.textContent = 'Draw';
        playerBorder.style.color = 'gray';
      }else if((player === 'kamień' && ai === 'nożyce') || (player === 'papier' && ai === 'kamień') ||
      (player === 'nożyce' && ai === 'papier')){
        this.wins.textContent = this.licznikWygranych++;
        
        debugger
        playerBorder.textContent = 'Victory !!!';
        playerBorder.style.color = 'greenyellow';
      }else{
        this.losses.textContent = this.licznikPorażek++;
        playerBorder.textContent = 'Defeat !!!';
        playerBorder.style.color = 'red';
      }
      function checkMediaQuery() {
        if (window.innerWidth < 768) {
          playerBorder.style.position = 'absolute';
          playerBorder.style.top = '50%';
          playerBorder.style.left = '50%';
          playerBorder.style.transform = 'translate(-50%,-50%)';
          }
      }
        window.addEventListener('resize', checkMediaQuery);
      
    }  
   
  }
