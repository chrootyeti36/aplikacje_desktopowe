function kolor() {
    if (document.querySelector('#inputKolor').value <= 360) {
        hue = document.querySelector('#inputKolor').value;
    } else { hue = null }
    lightness = '50%';
    document.getElementById('pierwszy').style.backgroundColor = 'hsl(' + hue + ',100%,' + lightness + ')';

    document.getElementById('drugiPierwsza').style.backgroundColor = 'hsl(' + hue + ',80%,' + lightness + ')';
    document.getElementById('drugiDruga').style.backgroundColor = 'hsl(' + hue + ',60%,' + lightness + ')';
    document.getElementById('drugiTrzecia').style.backgroundColor = 'hsl(' + hue + ',40%,' + lightness + ')';
    document.getElementById('drugiCzwarta').style.backgroundColor = 'hsl(' + hue + ',20%,' + lightness + ')';
}