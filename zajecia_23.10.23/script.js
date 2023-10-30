async function getData() {
    // await działa tylko w funkcji async (asynchronicznej)
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();

    console.log(json);

    for (let a = 0; a <= json.length - 1; a++) {
        //tworzy element div
        const divKraj = document.createElement("div");
        //dodaje klasę do stworzonego div'a
        divKraj.classList.add("divKraj");

        const divKrajFlaga = document.createElement("div");
        divKrajFlaga.classList.add("divKrajFlaga");

        const divKrajInfo = document.createElement("div");
        divKrajInfo.classList.add("divKrajInfo");

        //tworzy element z obrazem
        const flaga = document.createElement("img");
        //dodaje atrybut ze ścieżką do obrazu
        flaga.setAttribute("src", json[a].flags.png);

        const nazwa = document.createElement("h1");
        nazwa.innerHTML = json[a].name.common;

        //tworzy akapit z stolicą i populacją oddzielone miękkim enterem
        const info = document.createElement("p")
        info.innerHTML = "Stolica: " + json[a].capital + "<br>Populacja: " + json[a].population;




        //sekcja wstawiająca flagi
        divKrajFlaga.appendChild(flaga)
        divKraj.appendChild(divKrajFlaga);

        //sekcja wstawiająca elementy do informacji o państwie
        divKrajInfo.appendChild(nazwa);
        divKrajInfo.appendChild(info);
        divKraj.appendChild(divKrajInfo);

        //zamieszczenie na stronie - musi być na samym końcu
        document.getElementById("conteiner").appendChild(divKraj);
    }
}

getData();