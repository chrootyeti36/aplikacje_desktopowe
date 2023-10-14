var licznik=0;
function storazy(){
    const buttonParahraph = document.getElementById("buttonParahraph");

    for (let a = 1; a<=100; a++){
        const generateButton = document.createElement("button");
        generateButton.textContent='Przycisk '+a;
        buttonParahraph.appendChild(generateButton);
    }
}