//Logic Challenge - Password Generator

function changeVocals(str) {
    //code di sini

    var lbub = '';
    var tempChar = '';
    var vocal = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];
    var valid = false;

    for (var i = 0; i < str.length; i++) {
        valid = false;
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j]) {
                valid = true;
                break;
            }
        }

        if (valid) {
            tempChar = String.fromCharCode(str[i].charCodeAt(0) + 1);
            lbub = lbub + tempChar;
        } else {
            lbub = lbub + str[i];
        }

    }

    return lbub;
}

function reverseWord(str) {
    //code di sini

    var atak = '';

    for (var i = str.length - 1; i >= 0; i--) atak = atak + str[i];

    return atak;
}

function setLowerUpperCase(str) {
    //code di sini

    var newKalimat = [];
    var hasil = [];
    var x = 0;

    for (var i = 0; i < str.length; i++) {
        newKalimat.push(str[i]);
    }

    for (var i = 0; i < newKalimat.length; i++) {
        if (newKalimat[i].charCodeAt() > 96 && newKalimat[i].charCodeAt() < 123) newKalimat[i] = newKalimat[i].toUpperCase();
        else if (newKalimat[i].charCodeAt() > 40 && newKalimat[i].charCodeAt() < 91) newKalimat[i] = newKalimat[i].toLowerCase();
    }

    for (var i = 0; i < newKalimat.length; i++) {
        hasil = hasil + newKalimat[i];
    }

    return hasil;

}

function removeSpaces(str) {
    //code di sini
    var array = str.split(' ');
    var kata = '';

    for (var i = 0; i < array.length; i++) {
        kata = kata + array[i];
    }

    return kata;
}

function passwordGenerator(name) {
    //code di sini
    var password = changeVocals(name);
    password = reverseWord(password);
    password = setLowerUpperCase(password);
    password = removeSpaces(password);

    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    else return password;

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'