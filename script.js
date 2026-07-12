const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rolbtn = document.getElementById('rolbtn');
rolbtn.addEventListener("click",()=>{
    // Roll the dice
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice images
    dice1.src = `images/dice${roll1}.png`;
    dice2.src = `images/dice${roll2}.png`;
});