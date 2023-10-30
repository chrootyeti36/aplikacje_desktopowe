function showData(){
    let liczba_1 = 10
    let liczba_2 = 5
    let wynik_liczba = liczba_1/liczba_2

    const nazwa = document.createElement("div")
    nazwa.classList.add("nazwaKraju")
    nazwa.innerHTML = "Polska"

    const wynik = document.createElement("h2")
    wynik.innerHTML = wynik_liczba;

    
    document.getElementById("container").appendChild(nazwa)
    document.getElementById("container").appendChild(wynik)
}

showData();