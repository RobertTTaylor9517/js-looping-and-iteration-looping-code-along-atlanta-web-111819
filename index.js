function writeCards(gifts, event){
    let temp = [];

    for (let i = 0; i < gifts.length; i++){
        temp.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`)
    }

    return temp;
}

function countDown(number){
    let i = number;
    while(i >= 0){
        console.log(i);
        i--
    }
}