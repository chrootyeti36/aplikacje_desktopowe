function zad1() {
    document.querySelector('#wynik1').innerHTML = document.querySelector('#inp1').value.length;
}

function zad2() {
    document.querySelector('#wynik2').innerHTML = document.querySelector('#inp2').value.toUpperCase();
}

function zad3() {
    if (document.querySelector('#inp3').value.includes('ZS1')) {
        document.querySelector('#wynik3').innerHTML = 'TAK'
    } else {
        document.querySelector('#wynik3').innerHTML = 'NIE'
    }
}

function zad4() {
    document.querySelector('#wynik4').innerHTML = document.querySelector('#inp4').value.replaceAll('a','A');
}