//zmienne z formularza
const number = document.querySelector("#number");
const holder = document.querySelector("#holder");
// const exDate = document.querySelector("#exDate");

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

CVC.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolder.innerHTML = "CVC";
    } else {
        cardCVC.innerHTML = e.target.value;
    }
})

function cardBackgroundImg(cover) {
    document.querySelector(".cardFace--front").style.backgroundColor = ""
    document.querySelector(".cardFace--front").style.backgroundImage = cover
}

document.querySelector("#cardColor").addEventListener('change', (e) => {
    document.querySelector(".cardFace--front").style.backgroundImage = ""
    document.querySelector(".cardFace--front").style.backgroundColor = e.target.value
})

document.querySelector(".card").addEventListener('click', function () {
    document.querySelector(".card").classList.toggle('is-flipped');
})

document.querySelector("#exDate").addEventListener('change', (e) => {
    let year = e.target.value.substring(2, 4);
    let month = e.target.value.substring(5, 7);
    if (year && month) {
        cardExDate.innerHTML = month + "/" + year;
    } else {
        cardExDate.innerHTML = "MM/RR";
    }
    console.log(month, year);

})



// function generateMonth() {

//     for (let i = 1; i <= 12; i++) {
//         const option = document.createElement("option");
//         option.value = i;
//         option.innerHTML = i;
//         exMonth.appendChild(option)
//     }
// }
// function generateYear() {
//     var today = new Date().getFullYear();
//     var lastTwo = String(today).slice(-2)
//     var year = Number(lastTwo);
//     console.log(year);

//     for (let i = year; i <= year + 11; i++) {
//         const option = document.createElement("option");
//         option.value = i;
//         option.innerHTML = i;
//         exYear.appendChild(option);
//     }
// }

// const exMonth = document.querySelector("#exMonth");
// const exYear = document.querySelector("#exYear");
// function expiryDate() {
//     if (exMonth.value.length < 2) {
//         cardExMonth = "0" + String(exMonth.value)
//     } else {
//         cardExMonth = String(exMonth.value);
//     }
//     cardExYear = exYear.value;
//     cardExDate.innerHTML = cardExMonth + "/" + cardExYear;
//     console.log(cardExDate)
// }
// generateMonth();
// generateYear();
