async function getData() {
    // await działa tylko w funkcji async (asynchronicznej)
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    console.log(json);
    const krajeLista = document.getElementById("krajeLista");
    for (let a = 0; a <= json.length - 1; a++) {
        if (json[a].continents.includes("Europe") && json[a].population > 30000000) {
            const rekordLista = document.createElement("li");
            rekordLista.textContent = json[a].name.common;
            krajeLista.appendChild(rekordLista);
        }
        //console.log(json[a].name.common);
    }
}

getData();