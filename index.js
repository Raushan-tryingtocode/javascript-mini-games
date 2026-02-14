let min=1;
let max=100;
let answer = Math.floor(Math.random()*(max-min + 1)) + min;

let guess;
let attempts = 0;

let running = true;

while(running){
    guess = window.prompt(`Enter your guess between ${min} and ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert(`Invalid! Please Try again.`);
    }
    else if(guess < min || guess > max){
        window.alert(`Enter a valid number from the given range`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too Low ! Choose a higher Number.`);
        }
        else if(guess>answer){
            window.alert(`Too High! Choose a lower Number.`);
        }
        else{
            window.alert(`That's right! The answer is ${answer}. It took you ${attempts} tries to guess the answer`);
            running= false
        }

    }
    
}