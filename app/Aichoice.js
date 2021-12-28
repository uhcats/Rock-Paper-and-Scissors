class AiChoice{
  constructor(){
    this.getAiChoice = () => this.wynikai;
    this.img = [...document.querySelectorAll('.select1 img')];
    this.ai = document.querySelector('.ai');
    
  }

  Aichoice = () =>{
    const choice = Math.floor(Math.random() * this.img.length);
    this.wynikai =  this.ai.appendChild(this.img[choice]).id;
   
  }
}
