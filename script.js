document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generateButton');
    var generateMoreButton = document.getElementById('generateMoreButton');
    var retryButton = document.getElementById('retryButton');

    generateButton.addEventListener('click', generateRandomNumber);
    generateMoreButton.addEventListener('click', generateRandomNumber);
    retryButton.addEventListener('click', resetPage);
});


function generateRandomNumber() {
    var min = parseInt(document.getElementById("minInput").value);
    var max = parseInt(document.getElementById("maxInput").value);

    if (min <= max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        document.getElementById("originalContent").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";

        document.getElementById("resultNumber").innerHTML = randomNumber;

        document.getElementById("buttonsContainer").style.display = "flex";
    } else {
        alert("Error: Min value must be less than or equal to Max value");
    }
}


function resetPage() {

    document.getElementById("minInput").value = "0";
    document.getElementById("maxInput").value = "0";

    document.getElementById("originalContent").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
}
