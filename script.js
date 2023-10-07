

// declare global variables
var mouseclicked;    // a global variable which is true if mouse is clicked that run
var isNumberQueue;   // true if the user can  type numbers via keyboard
var timePeriod;      // the time in miliseconds between each number to be shown
var stage;           // the current stage of the program right now ("options", "period", "rounds", "gameplay")
var rounds;          // how many numbers will be shown in that gameplay
var sum;             // the total sum of all numbers
var outcomeDecider;  // is true if the user has to write their result
var activateOnce;    // used to ensure the gameplay is run only once

// declare the classes
var adding;          // the button that activites gameplay for adding
var subtracting;     // the button that activites gameplay for subtracting and all before that
var multiplying;     // the button that activites gameplay for multiplying and all before that
var dividing;        // the button that activites gameplay for dividing and all before that
var numberQueue;     // the queue of numbers entered by the user via keyboard

// this is a built in function for p5 that is run once before all others
function setup() {

    // set up the window, mobile devices are not permitted
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){document.write("Use a computer to access the application.");}
    else {cnv = createCanvas(windowWidth * 0.9, windowHeight * 0.9); cnv.position(windowWidth * 0.05, windowHeight * 0.05);}

    // initialise global variables
    mouseclicked = false;
    isNumberQueue = false;
    adding = new GameModeButtons(10, windowWidth * 0.7, 80, "Adding", 60, 'Comic Sans MS', [57, 47, 247]);                       // the instance for the adding button
    subtracting = new GameModeButtons(70/3 + 10, windowWidth * 0.7, 80, "Subtracting", 60, 'Comic Sans MS', [201, 38, 38]);      // the instance for the subtracting button
    multiplying = new GameModeButtons(140/3 + 10, windowWidth * 0.7, 80, "Multiplying", 60, 'Comic Sans MS', [47, 135, 31]);     // the instance for the multiplying button
    dividing = new GameModeButtons(80, windowWidth * 0.7, 80, "Dividing", 60, 'Comic Sans MS', [117, 7, 125]);                   // the instance for the dividing button
    numberQueue = new NumberQueue();
    timePeriod = 0;
    stage = "options";
    rounds = 0;
    sum = 0;
    outcomeDecider = false;
    activateOnce = false;
}

// this is a built in function for p5 that is looped until interrupted
function draw(){
    if (activateOnce == false && stage != "blank"){
        background(68, 165, 173);
    }
    menu();
    mouseclicked = false;
}

// this is a built in function for p5 that is called when mouse is clicked
function mouseClicked() {
    mouseclicked = true;    // a global variable which is true if mouse is clicked that run

}

// this is a built in function for p5 that is only called when a key is pressed on keyboard
// it is used to make sure user won't be typing more than one characters per character
async function keyPressed() {

    // only acts if the user can type using keyboard
    if (isNumberQueue){

        // add to the numberQueue if the key pressed is a number
        if (key in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]){
            numberQueue.addToArray(key);
        }

        // delete last character if the key pressed is backspace
        if (key == "Backspace") {
            numberQueue.deleteLast();
        }

        // run if the user has submitted an answer for how long the timePeriod will be
        if (key == "Enter" && stage == "period") {
            timePeriod = parseInt(numberQueue.getCurrentQueue());
            numberQueue.clearSession();
            isNumberQueue = false;
            stage = "rounds";   // move to next stage
        }

        // run if the user has submitted an answer for how many rounds there will be
        else if (key == "Enter" && stage == "rounds") {
            rounds = parseInt(numberQueue.getCurrentQueue());
            numberQueue.clearSession();
            isNumberQueue = false;
            stage = "gameplay";   // move to next stage
        }

        // show if usre has answered correctly
        if (key == "Enter" && stage == "gameplay" && outcomeDecider) {
            background(68, 165, 173);
            fill(0);
            textAlign(CENTER, TOP);
            textSize(80);
            if (sum == parseInt(numberQueue.getCurrentQueue())){
                text("Well Done", 0, 0.5 * height, width);
            }
            else {
                text("Nope:" + sum, 0, 0.5 * height, width);
            }
            stage = "blank";
            sum = 0;

            
            await delay(3500);
            numberQueue.clearSession();
            isNumberQueue = false;
            stage = "options";
            adding.clicked = false;
            subtracting.clicked = false;
            multiplying.clicked = false;
            dividing.clicked = false;
            outcomeDecider = false;
        }
    }
}