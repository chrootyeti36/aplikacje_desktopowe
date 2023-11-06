function showData(){
    const cardNumber = document.getElementById("cardNumber")
    cardNumber.innerHTML = document.getElementById("number").value;
    console.log(cardNumber);

    const cardHolder = document.getElementById("cardHolder")
    cardHolder.innerHTML = document.getElementById("holder").value
}