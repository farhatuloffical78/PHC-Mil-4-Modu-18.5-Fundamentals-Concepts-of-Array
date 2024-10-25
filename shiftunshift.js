const friends = ['kalam', 'jamal', 'karim', 'gelam', 'pailam'];
// friends.shift();
friends.unshift('nayeem')
console.log(friends);

console.log(friends.includes('karim'));

if(friends.includes('khailam')){

    console.log('salam')
}

else{
    console.log('no food. we are fasting')
}