var welcomeMessage = document.querySelector(".my-name");
var ededucationList = document.querySelectorAll(".education-list > li");
var printMyCV = document.getElementById("printMyCV");

welcomeMessage.addEventListener("click", DisplayWelcomeMessage);

function DisplayWelcomeMessage() {
    alert("Welcome, please let me know if you have any questions");
}

ededucationList.forEach((item) => {
    item.addEventListener("mouseover", () =>{
        item.style.color = "red";
    }, false);
    item.addEventListener("mouseout", () =>{
        item.style.color = "";
    }, false);   
});

printMyCV.addEventListener("click", PrintPage);

function PrintPage()
{
    window.print();
}