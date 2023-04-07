const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));


function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
        bodyEl.style.background = "white";
    }  
};
updateBody();

function updateInput() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
};

inputEl.addEventListener("input", () => {
    updateBody();
    updateInput();
})