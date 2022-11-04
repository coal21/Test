///////////Creates a new button with input text, and an object with this.striked = "notStriked"
function addBtn() {
    let listDiv = document.getElementById("listDiv");
    let newBtn = document.createElement("button");
    let input = document.getElementById("textBox").value;
    newBtn.innerHTML = input;
    newBtn.classList.add("listBtn");
    newBtn.classList.add("notStrikedButton")
    newBtn.setAttribute(`onclick`, `striker(event.target);`);
    newBtn.style.textDecoration = "none";
    listDiv.appendChild(newBtn);
}
///////////Toggles strikethrough
function striker(whichBtn) {
    if (whichBtn.style.textDecoration === "line-through") {
        whichBtn.style.textDecoration = "none";
        whichBtn.classList.add("notStrikedButton");
        whichBtn.classList.remove("strikedButton");
    } else if (whichBtn.style.textDecoration === "none") {
        whichBtn.style.textDecoration = "line-through";
        whichBtn.classList.add("strikedButton");
        whichBtn.classList.remove("notStrikedButton");
    }
}
//////////View Unpurchased/Purchased Item Functions
function viewPurchased() {
    let strikedButtons = document.body.getElementsByClassName("strikedButton");
    let viewPara = document.getElementById("viewPara");
    viewPara.innerHTML = "";
    for (i = 0; i < strikedButtons.length; i++) {
        viewPara.innerHTML += strikedButtons[i].innerHTML + "<br>";
    }
}

function viewUnpurchased() {
    let notStrikedButtons = document.body.getElementsByClassName("notStrikedButton");
    console.log(notStrikedButtons)
    let viewPara = document.getElementById("viewPara");
    viewPara.innerHTML = "";
    for (i = 0; i < notStrikedButtons.length; i++) {
        viewPara.innerHTML += notStrikedButtons[i].innerHTML + "<br>";
    }
}