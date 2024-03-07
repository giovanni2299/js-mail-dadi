// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//creo una variabile per generare un numero random per l'utente
const userShot = document.getElementById('diceuser')
userShot.addEventListener('click' ,function(){

    const userNumber = []
    const numberLaptop = []
    
    const randomNumbers = Math.floor(Math.random() * 6)+1;
    userNumber.push(randomNumbers)
    
    const randomNumbersLaptop = Math.floor(Math.random() * 6)+1;
    numberLaptop.push(randomNumbersLaptop)

    console.log('number user: ', + userNumber , 'number Laptop: ' ,+ randomNumbersLaptop );


    if(userNumber > numberLaptop){
        console.log('YOU WIN! 🥳')
    } else if(userNumber < numberLaptop ){
        console.log('YOU LOSE ! 🥲')
    } else{
        console.log('TIE ! 🤝')
    }

})
//creo una variabile per generare un numero random per il computer

