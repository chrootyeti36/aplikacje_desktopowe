async function showData() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    console.log(json);
    for (let i = 0; i<json.length; i++){
        const divKraj = document.createElement("div");
        divKraj.classList.add("divKraj")
        
        // const dane = document.createElement("p");
        // dane.innerHTML = json[i].name.common + "<hr>" + json[i].capital;

        const nazwa = document.createElement("div")
        nazwa.classList.add("nazwa");
        nazwa.innerHTML = json[i].name.common;

        const stolica = document.createElement("div")
        stolica.classList.add("stolica");
        stolica.innerHTML = json[i].capital;

        divKraj.appendChild(nazwa);
        divKraj.appendChild(stolica);
        document.getElementById("container").appendChild(divKraj);
    }
}

showData();