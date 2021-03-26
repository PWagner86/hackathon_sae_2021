import titleVanish from './TitleScreen.js';
import Scene from './Scene.js';
import {text} from './text.js';

// Variables
const body = document.body;
let path = "./pics/";

const firstScene = new Scene(
    1,
    "party.jpg",
    text.introGoodBtn,
    text.introText,
    text.introBadBtn
);

const secondScene = new Scene(
    2,
    "pill.jpg",
    text.secondGoodBtn,
    text.secondText,
    text.secondBadBtn
)

// Events
body.style.backgroundImage = `url(${path}party.jpg)`;

firstScene.createScene();

secondScene.createScene();

titleVanish();

// Functions

