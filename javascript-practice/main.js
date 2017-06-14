window.onload = function (){
    newFunction();
    changingText()();

}

function newFunction() {
    document.getElementById("one").addEventListener("click", function() {
        document.getElementById("text").innerHTML = "Bye";
});
}

function changingText() {
    document.getElementById("two").addEventListener("click", function() {
        document.getElementById("para").innerHTML = "they're changing texts"; 
});
}

