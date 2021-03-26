import titleVanish from './TitleScreen.js';
import Scene from './Scene.js';
import {text} from './text.js';

// Variables
const returnHome = document.querySelector(".return-btn");
const firstScene = new Scene(
    1,
    "party.jpg",
    text.introText
);

const secondScene = new Scene(
    2,
    "pill.jpg",
    text.secondText
)

const thirdScene = new Scene(
    3,
    "partyAgain.jpg",
    text.thirdText
)

const fourthScene = new Scene(
    4,
    "FirstGood.png",
    text.fourthText
)

const fifthScene = new Scene(
    5,
    "First.png",
    text.fifthText
)

changeBackground("party.jpg");

// Scene 1 Bear intro
const scene1 = document.querySelector(".scene1");
const goodBtn1 = document.querySelector(".scene1 .good");
const badBtn1 = document.querySelector(".scene1 .bad");
goodBtn1.innerHTML = text.introGoodBtn;
badBtn1.innerHTML = text.introBadBtn;

// Scene 2 Pills
const scene2 = document.querySelector(".scene2");
const goodBtn2 = document.querySelector(".scene2 .good");
const badBtn2 = document.querySelector(".scene2 .bad");
goodBtn2.innerHTML = text.secondGoodBtn;
badBtn2.innerHTML = text.secondBadBtn;


// Scene 3 Go home / back to Bear
const scene3 = document.querySelector(".scene3");
const goodBtn3 = document.querySelector(".scene3 .good");
const badBtn3 = document.querySelector(".scene3 .bad");
goodBtn3.innerHTML = text.thirdGoodBtn;
badBtn3.innerHTML = text.thirdBadBtn;

// Scene 4 First good
const scene4 = document.querySelector(".scene4");
const goodBtn4 = document.querySelector(".scene4 .good");
const badBtn4 = document.querySelector(".scene4 .bad");
goodBtn4.innerHTML = text.fourthGoodBtn;
badBtn4.innerHTML = text.fourthBadBtn;

// Scene 5 First bad
const scene5 = document.querySelector(".scene5");
const goodBtn5 = document.querySelector(".scene5 .good");
const badBtn5 = document.querySelector(".scene5 .bad");
goodBtn5.innerHTML = text.fifthGoodBtn;
badBtn5.innerHTML = text.fifthBadBtn;



// All Scenes
const scenes = [scene1, scene2, scene3, scene4, scene5];


// Events
returnHome.addEventListener("click", ()=> {
    location.reload();
})

goodBtn1.addEventListener("click", ()=> {
    showScene(scene2);
    changeBackground("pill.jpg");
})

badBtn1.addEventListener("click", ()=> {
    showScene(scene3);
    changeBackground("partyAgain.jpg");
})

goodBtn2.addEventListener("click", ()=> {
    showScene(scene4);
    changeBackground("FirstGood.png");
})

badBtn2.addEventListener("click", ()=> {
    showScene(scene5);
    changeBackground("First.png");
})


goodBtn3.addEventListener("click", ()=> {
    showScene(scene1);
    changeBackground("party.jpg");
})

badBtn3.addEventListener("click", ()=> {
    location.reload();
})




titleVanish();

// Functions

function changeBackground(pic){
    return document.body.style.backgroundImage = `url("./pics/${pic}")`;
}

function showScene(show){
    scenes.forEach(scene => {
        scene.style.display = "none";
    })
    show.style.display = "flex";
}