
// delay function, delays the current code block for given milliseconds
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// selects random numbers
// displays the random numbers including negative numbers with a gap of timePeriod
// adds the numbers and stores at sum
// runs outcome()
async function subtractingGameplay() {

    activateOnce = true;
    if (outcomeDecider == false){
        for (let i = 0; i < rounds; i++) {
            await showSubtractingNumbers(timePeriod);
        }
        outcomeDecider = true;
    }
    outcome();
}

// selects random numbers
// displays the random numbers with a gap of timePeriod
// adds the numbers and stores at sum
// runs outcome()
async function addingGameplay() {
    activateOnce = true;
    if (outcomeDecider == false){
        for (let i = 0; i < rounds; i++) {
            await showAddingNumbers(timePeriod);
        }
        outcomeDecider = true;
    }
    outcome();
}

// shows the numbers with a time time gap of timePeriod
function showSubtractingNumbers(time){
    background(68, 165, 173);
    positive = Math.round(Math.random());
    let a = Math.round(Math.floor(Math.random() * 250) * Math.floor(Math.random() * 250) / (Math.floor(Math.random() * 250) + 10)) + 50;
    if (positive == 0 && sum - a < 0) {
        positive = 1;
    }
    fill([48, 47, 47]);
    textAlign(CENTER, TOP);
    textSize(60);
    if (positive) {
        sum += a;
        text("+ " + a, 0, 0.5 * height, width);
    }
    else {
        sum -= a;
        text("- " + a, 0, 0.5 * height, width);
    }
    
    return new Promise(resolve => setTimeout(resolve, time));
}

// shows the numbers with a time time gap of timePeriod
function showAddingNumbers(time) {
    background(68, 165, 173);
    let a = Math.round(Math.floor(Math.random() * 250) * Math.floor(Math.random() * 250) / (Math.floor(Math.random() * 250) + 10)) + 50;
    sum += a;
    fill([48, 47, 47]);
    textAlign(CENTER, TOP);
    textSize(60);
    text("+ " + a, 0, 0.5 * height, width);
    
    return new Promise(resolve => setTimeout(resolve, time));
    
}


// expect an answer from user
function outcome() {
    activateOnce = false;
    isNumberQueue = true;
    fill([48, 47, 47]);
    textAlign(CENTER, TOP);
    textSize(60);
    text("The Result", 0, 0.1 * height, width);

    text(numberQueue.getCurrentQueue(), 0, 0.5 * height, width);
    
}