var licznik = 1;
function numbers(nazwa) {
    cell = document.getElementById(nazwa);
    if (!cell.innerHTML) {
        document.getElementById(nazwa).innerHTML = licznik;
        licznik++;
        if (licznik % 2 == 0) {
            document.getElementById(nazwa).style.backgroundColor = "red";
        } else {
            document.getElementById(nazwa).style.backgroundColor = "blue";
        }
    }
}