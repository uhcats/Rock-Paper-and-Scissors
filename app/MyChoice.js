class MyChoice {
  constructor(){
  this.imges = [...document.querySelectorAll('.select img')];
  this.getPlayerChoice = () => this.wynik;
  }
 
 YourChoice = () =>{
   const player = document.querySelector('.player');
    this.imges.forEach(img =>{
      img.addEventListener('click',() =>{
         this.wynik =  player.appendChild(img).id;    
      })
    })
    
  }
}
const mychoice = new MyChoice();