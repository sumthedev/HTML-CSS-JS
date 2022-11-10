const btn1 = document.querySelector("button.button1")
const btn2 = document.querySelector("button.button2")


btn2.addEventListener("click", btnOne);

function btnOne() {
    document.querySelector("h2").innerHTML = "Roses are red.. Violents are blue.. I love you"
    document.getElementById("game").style.backgroundColor = "rgb(206, 81, 81)";
}

btn1.addEventListener("click", btnTwo);
function btnTwo() {
    document.querySelector("h2").innerHTML = "Ops.. You might be so lazy to say yes!! :( ";
    document.getElementById("game").style.backgroundColor = "rgb(8, 6, 6)";

}