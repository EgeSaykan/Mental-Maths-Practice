

// draws the initial menu for selecting which gamemode to play
function drawOptionsMenu(){
    adding.drawButton();
    subtracting.drawButton();
    multiplying.drawButton();
    dividing.drawButton();

    if (adding.clicked || subtracting.clicked || multiplying.clicked || dividing.clicked){
        stage = "period";   // move to next stage
    }
}

// UI to select the timePeriod
function chosePeriodMenu(colour, fontSize, colour2){
    fill(colour);
    textAlign(CENTER, TOP);
    textSize(fontSize);
    text("Enter time period of each number difference (in milliseconds)", 0, 0.1 * height, width);

    isNumberQueue = true;

    fill(colour2);
    text(numberQueue.getCurrentQueue(), 0, 0.5 * height, width);
    
}

// UI to select how many rounds there will be
function howManyRounds(colour, fontSize, colour2){
    fill(colour);
    textAlign(CENTER, TOP);
    textSize(fontSize);
    text("How many rounds do you want", 0, 0.1 * height, width);

    isNumberQueue = true;

    fill(colour2);
    text(numberQueue.getCurrentQueue(), 0, 0.5 * height, width);
    
}

// run correct menu according to stage
function menu() {
    if (stage == "options") {
        drawOptionsMenu();
    }
    else if (stage == "period"){
        chosePeriodMenu([222, 58, 224], 75, [209, 79, 19]);
    }
    else if (stage == "rounds"){
        howManyRounds([222, 58, 224], 75, [209, 79, 19]);
    }
    else if (stage == "gameplay" && activateOnce == false) {
        if (adding.clicked) {
            addingGameplay();
        }
        else if (subtracting.clicked) {
            subtractingGameplay();
        }
    }
}