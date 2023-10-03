var licznik = 1;
function numbers(nazwa) {
    document.getElementById(nazwa).innerHTML = licznik;
    if(licznik%2==0){
        document.getElementById(nazwa).style.backgroundColor="red";
    } else {
        document.getElementById(nazwa).style.backgroundColor="blue";
    }
    licznik++;
}