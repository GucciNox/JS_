var allbutton = document.getElementsByTagName('button');
console.log(allbutton);
var copyallbutton = [];

for (i = 0; i < allbutton.length; i++) {

    copyallbutton.push(allbutton[i].classList[1]);
}
console.log(copyallbutton);

function changecolor(buttonss) {

    console.log(buttonss.value);
    if (buttonss.value === 'red') {

        buttonred();
    }
    if (buttonss.value === 'blue') {

        buttonblue();
    }
    if (buttonss.value === 'green') {

        buttongreen();
    }
    if (buttonss.value === 'reset') {

        buttonreset();
    }
    if (buttonss.value === 'random') {

        buttonrandom();
    }
    if (buttonss.value === 'yellow') {

        buttonyellow();
    }
}

function buttonred() {
    for (i = 0; i < allbutton.length; i++) {


        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-danger');

    }


}

function buttonblue() {
    for (i = 0; i < allbutton.length; i++) {


        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-primary');

    }


}

function buttongreen() {
    for (i = 0; i < allbutton.length; i++) {


        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-success');

    }


}

function buttonyellow() {
    for (i = 0; i < allbutton.length; i++) {


        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-warning');

    }


}








function buttonrandom() {
    let w = Math.floor(Math.random() * 4);
    console.log(copyallbutton[w]);
    for (i = 0; i < allbutton.length; i++) {

        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(copyallbutton[w]);


    }

}

function buttonreset() {

    for (i = 0; i < allbutton.length; i++) {

        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(copyallbutton[i]);


    }

}