var liczba = 0;
function addel(){
    const lista = document.getElementById("lista");
    const li = document.createElement("li");
    li.innerHTML=liczba;
    // li.innerHTML="text";
    lista.appendChild(li);
    liczba++;
}