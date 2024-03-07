// console.log('ciao mamma')

// Mail
// Chiedi all’utente la sua email,
    //creo un imput mail in idex e un bottone di invio
    //collego la imput al javascript 
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



//collego la imput email al javascript
// const emailDOMElement = document.getElementById('email');

const emailDOMElement = document.getElementById('email');

// const emailElement = emailDOMElement.value;


//ricavo il valore della mail e la visualizzo con value

// const emailElement = emailDOMElement.value;

//stampo la nuova constante che mi mostra la mail
// console.log(emailElement);


//collego il bottone all javascript
const sendButtonDOMElement = document.getElementById('button')

sendButtonDOMElement.addEventListener('click', function(){

    const emailElement = emailDOMElement.value;
    //creo un array per vedere se l' email inserita è gia registrata 

    const checkEmailArray = ['giovanni-sorrentino@hotmail.it', 'Claudio-Rossi@gmail.com','Batman&Robin@bestfriends.forever','Non-sopporto@javascript.com']

    //controllo che la mail sia fra quelle inserite nel arrey

    let checkEmail = false 

    for(let i = 0; i < checkEmailArray.length; i++){

        const emailList = checkEmailArray[i];
        
        if(emailElement === emailList){
            checkEmail = true;
        }
        // console.log(emailElement);
    }
    

    if(checkEmail === true){
        console.log('email presente')
    } else{
        console.log('email assente')
    }
})



