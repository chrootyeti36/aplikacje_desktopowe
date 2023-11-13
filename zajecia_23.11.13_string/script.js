const reduta = "Nam strzelać nie kazano. — Wstąpiłem na działo I spojrzałem na pole; dwieście armat grzmiało. Artyleryji ruskiéj ciągną się szeregi, Prosto, długo, daleko, jako morza brzegi; I widziałem ich wodza; — przybiegł, mieczem skinął I jak ptak jedno skrzydło wojska swego zwinął. Wylewa się spod skrzydła ściśniona piechota Długą, czarną kolumną, jako lawa błota, Nasypana iskrami bagnetów. Jak sępy, Czarne chorągwie na śmierć prowadzą zastępy."

function zad1() {
    const text = document.querySelector("#inp1");
    document.querySelector("#wynik1").innerHTML = text.value.length
}

function zad2() {
    const text = document.querySelector("#inp2");
    document.querySelector("#wynik2").innerHTML = text.value.toUpperCase()
}

function zad3() {
    const text = document.querySelector("#inp3");
    document.querySelector("#wynik3").innerHTML = text.value.replaceAll("a","A")
}

function zad4() {
    const text = document.querySelector("#inp4");
    if(reduta.includes(text.value)){
        document.querySelector("#wynik4").innerHTML = "Znajduje się"
    }else{
        document.querySelector("#wynik4").innerHTML = "NIE znajduje się"
    }
}

function zad5() {
    const text = document.querySelector("#inp5");
    // skrypt wyszukujący ile razy w tekście występuje dany wyraz
}