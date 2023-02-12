// -------------------
// Problem Solving 1 (Let’s play a mind game)
// -------------------

function mindGame(i) {
    return (((i * 3) + 10) / 2) - 5
}

// Disclaimer (1): In this mind game function i took the input through the parameter i. Then I returned the result after doing addition, subtraction, multiplication and division.


// -------------------
// Problem Solving 2 (Finding even or odd)
// -------------------

function evenOdd(str) {
    if (str = str.length % 2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

// Disclaimer (2): In this function, I used the length string method and stored the number in the variable str. Then I used the if else function to find out whether the number is odd or even.


// --------------------
// Problem Solving 3 (Is Less or Greater than seven)
// --------------------

function isLGSeven(num) {
    const myNumber = num - 7
    if (myNumber < 7) {
        return myNumber;
    }
    else {
        return 2 * num;
    }
}

// Disclaimer (3): In this function, I find the difference between the input value and 7. Then I used the if else function to return the result according to the problem statement.


// --------------------
// Problem Solving 4 (Finding Bad data)
// --------------------

function findingBadData(arrOfNumber) {
    const badDataCount = 0;
    for (let i = 0; i < arrOfNumber.length; i++) {
        if (arrOfNumber[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

// Disclaimer (4): In this function, I used for loop to loop through the input array to find out how many bad data are there in the array and returned that number.


// --------------------
// Problem Solving 5 (Convert your gems into diamond)
// --------------------

function gemsToDiamond(n1, n2, n3) {
    let totalDiamond = (n1 * 21) + (n2 * 32) + (n3 * 43);
    if (totalDiamond > 1000) {
        totalDiamond = totalDiamond - 2000;
    } else {
        return totalDiamond;
    }
 
}

// Disclaimer (5): In this function, I took three inputs and multiplied each of them with their corresponding diamond number and stored it in the totalDiamond variable. Then I passed the variable through the if function.