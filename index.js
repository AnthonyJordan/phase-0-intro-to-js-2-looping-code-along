// Code your solutions in this file

function writeCards(people, message){
    const messageArray = [];
    for(let i = 0; i < people.length; i++){
        messageArray.push(`Thank you, ${people[i]}, for the wonderful ${message} gift!`)
    }
    return messageArray;
}

function countDown(n) {
    while(n > -1){
        console.log(n)
        n--;
    }
}