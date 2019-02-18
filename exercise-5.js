//Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
    // you can only write your code here!

    if (angka > 9) {
        var hasil = 1;
        var remainder = 0;
        while (angka > 0) {
            remainder = angka % 10;
            angka = Math.floor(angka / 10);
            hasil = hasil * remainder;
        }

        return kaliTerusRekursif(hasil);
    } else return angka;

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6