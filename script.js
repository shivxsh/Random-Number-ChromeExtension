document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    var generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', function () {
        getRandomNumber();
    });
});

function getRandomNumber(){
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    // min = Math.ceil(min);
    // max = Math.floor(max);

    if(min <= max){
        const randomNumber = Math.floor(Math.random() * (max-min+1) + min);
        // document.getElementById("result").innerHTML = randomNumber;
        var newWindow = window.open('', 'Random Number', 'width=300,height=200');
        newWindow.document.write('<h1>Random Number: ' + randomNumber + '</h1>');
    } else {
        alert("Error: Min value must be less than or equal to Max value");
    }
    
    // else{
    //     document.getElementById("result").innerHTML = "Error: MIN should be less than MAX"
    // }    
}



