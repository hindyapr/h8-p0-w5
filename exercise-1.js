//Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
    // code di sini

    for (var i = 1; i < arrNumber.length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                var temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            } else break;
        }
    }

    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    var angka = 0;
    var count = 0;
    for (var i = arrNumber.length - 1; i >= 0; i--) {
        if (i === arrNumber.length - 1) {
            angka = arrNumber[i];
            count++;
        } else if (arrNumber[i] === angka) count++;
        else break;
    }

    if (arrNumber.length > 0) return 'angka paling besar adalah ' + angka + ' dan jumlah kemunculan sebanyak ' + count + ' kali';
    else return '';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''