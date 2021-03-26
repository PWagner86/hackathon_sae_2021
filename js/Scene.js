export default class Scene{

    constructor(sceneNum, src, storyText){
        this.sceneNum = sceneNum;
        this.src = `./pics/${src}`;
        this.storyText = storyText;
        this.createScene();

    }

    createScene(){
        const scene = document.createElement("div");
        scene.classList.add("scene");
        scene.classList.add(`scene${this.sceneNum}`);
        const picContainer = document.createElement("div");
        picContainer.classList.add("pic-container");
        const picPreview = document.createElement("img");
        picPreview.classList.add("pic-preview");
        picPreview.setAttribute("src", this.src);
        picPreview.setAttribute("alt", "Bild zur Geschichte");
        picContainer.append(picPreview);
        scene.append(picContainer);
        const nav = document.createElement("nav");
        nav.classList.add("nav-wrapper");
        const goodBtn = document.createElement("button");
        goodBtn.classList.add("decision-btn");
        goodBtn.classList.add("good");
        nav.append(goodBtn);
        const story = document.createElement("p");
        story.classList.add("story");
        story.innerHTML = this.storyText;
        nav.append(story);
        const badBtn = document.createElement("button");
        badBtn.classList.add("decision-btn");
        badBtn.classList.add("bad");
        nav.append(badBtn);
        scene.append(nav);
        document.querySelector(".game-wrapper").append(scene);
    }   
}

