export default function titleVanish(){
    const titleScreen = document.querySelector(".title-screen");
    const startBtn = document.querySelector(".start-btn");

    startBtn.addEventListener("click", ()=> {
        // console.log("click");
        titleScreen.classList = "title-screen vanish";
        setTimeout(addDisplayNone, 3000);
    })

    function addDisplayNone(){
        titleScreen.style.display = "none";
    }
}