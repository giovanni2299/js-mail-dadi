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

    //SE user ha il numero più alto del laptop allora vince
    if(userNumber > numberLaptop){
        console.log('YOU WIN! 🥳')
        document.getElementById('showResult').innerHTML += '<div class="result--win">YOU WIN! 🥳</div>'
        //ALTRIMENTI SE laptop ha il numero più alto del user allora vince laptop
    } else if(userNumber < numberLaptop ){
        console.log('YOU LOSE ! 🥲')
        document.getElementById('showResult').innerHTML += '<div class="result--lose">YOU LOSE ! 🥲</div>'
        //ALTRIMENTI se i numeri sono uguali allora è patta
    } else{
        console.log('TIE ! 🤝')
        document.getElementById('showResult').innerHTML += '<div class="result--tie">TIE ! 🤝</div>'
    }

})
//creo una variabile per generare un numero random per il computer

