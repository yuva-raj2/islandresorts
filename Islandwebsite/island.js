const main = document.querySelector("main");
main.style.backgroundImage = "url('island.jpeg')";
main.style.backgroundAttachment = "scroll";
main.style.backgroundSize = "cover";
const musha=document.querySelector('#musha');
musha.style.backgroundImage="url('loveisland.jpg')";
musha.style.backgroundImage="cover";
const welcome=document.querySelector("#welcome");
welcome.style.backgroundImage="url('./Pianemo Islands.jpg')"
welcome.style.backgroundAttachment = "scroll";
welcome.style.backgroundSize = "cover";
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("Complete");
    }
    initApp();
});
const initApp = () => {
    const openbtn = document.querySelector(".openbtn");
    const closebtn = document.querySelector(".close-btn");
    const close = document.querySelector(".close");
    openbtn.addEventListener("click", (event) => {
        closebtn.style.display = "block";
        openbtn.style.display = "none";
    });
    closebtn.addEventListener("click", (event) => {
        closebtn.style.display = "none";
        openbtn.style.display = "block";
    });
}