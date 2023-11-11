//zmienne z formularza
const number = document.querySelector("#number");
const holder = document.querySelector("#holder");
const exDate = document.querySelector("#exDate");
const CVC = document.querySelector("#CVC");

//dane wyświetlane na karcie 
const cardNumber = document.querySelector("#cardNumber");
const cardHolder = document.querySelector("#cardHolder");
const cardExDate = document.querySelector("#cardExDate");
const cardCVC = document.querySelector("#cardCVC");

number.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumber.innerText = "#### #### #### ####";
    } else {

        const input = e.target.value.replaceAll(" - ", "")
        if (e.target.value.length > 18) {
            e.target.value = input.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 - $2 - $3 - $4");
            cardNumber.innerHTML = input.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 11) {
            e.target.value = input.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 - $2 - $3");
            cardNumber.innerHTML = input.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = input.replace(/(\d{4})(\d{0,4})/, "$1 - $2");
            cardNumber.innerHTML = input.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumber.innerHTML = input;
        }
    }
})

holder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolder.innerHTML = "IMIE NAZWISKO";
    } else {
        cardHolder.innerHTML = e.target.value.toUpperCase();
    }
})

exDate.addEventListener("keyup", (e) => {
    const input = e.target.value.replace("/","");
    console.log(exDate.value);
})

CVC.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolder.innerHTML = "CVC";
    } else {
        cardCVC.innerHTML = e.target.value;
    }
})