async function getData() {
    // await działa tylko w funkcji async (asynchronicznej)
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();

    console.log(json);

    for (let a = 0; a <= json.length - 1; a++) {
        const divKraj = document.createElement("div");
        divKraj.classList.add("divKraj");
        
        const divKrajFlaga = document.createElement("div");
        divKrajFlaga.classList.add("divKrajFlaga");

        const divKrajInfo = document.createElement("div");
        divKrajInfo.classList.add("divKrajInfo");

        const flaga = document.createElement("img");
        flaga.setAttribute("src", json[a].flags.png);

        const nazwa = document.createElement("h1");
        nazwa.innerHTML=json[a].name.common;

        const info = document.createElement("p")
        info.innerHTML="Stolica: "+json[a].capital+"<br>Populacja: "+json[a].population;






        divKrajFlaga.appendChild(flaga)
        divKraj.appendChild(divKrajFlaga);

        divKrajInfo.appendChild(nazwa);
        divKrajInfo.appendChild(info);
        divKraj.appendChild(divKrajInfo);

        document.getElementById("conteiner").appendChild(divKraj);
    }
}

getData();