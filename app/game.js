class Game {
  constructor(){
    this.mychoice = new MyChoice();
    this.aichoice = new AiChoice();
    this.result =  new Result();
    this.imges = [...document.querySelectorAll('.select img')];
    this.div = document.querySelector('.wait');
    this.select = document.querySelector('.select');
    this.player = document.querySelector('.player');
    this.ai = document.querySelector('.ai');
    this.playerBorder = document.querySelector('.win');
    this.mediaQuery = window.matchMedia('(min-width: 768px)');
  }

  
  startGame(){
    const btn = document.createElement('button');
    const div = document.createElement("div");
    this.mychoice.YourChoice();
    function checkMediaQuery() {
      if (window.innerWidth < 768) {
        btn.style.fontSize = '10px';
        div.innerHTML = '<h6>Tututu....</h6>';
        }
    }
      window.addEventListener('resize', checkMediaQuery);
    this.imges.forEach(img =>{
      
      img.addEventListener('click',() =>{
        
        div.innerHTML = "<h2>Tututu....</h2>";
        this.div.appendChild(div);
        document.body.style.pointerEvents = 'none';
        
        setTimeout(() => {
         
          btn.style.fontSize = '23px';
          btn.style.pointerEvents = 'auto';
          btn.textContent = 'Play again !';
          btn.addEventListener('click', () =>{
            document.body.style.pointerEvents = 'auto';
            this.playerBorder.textContent = "";
              btn.textContent = '';
              this.ai.innerHTML = "";  
              this.player.innerHTML = "";
              this.select.append(img);
            
          });
          
          this.div.appendChild(btn);
          this.div.removeChild(div);
          this.aichoice.Aichoice();
          this.result.checkWinner(this.mychoice.getPlayerChoice(), this.aichoice.getAiChoice());
         
        }, 1000);
      })
    })
    
  }
}
const game = new Game();
game.startGame();
