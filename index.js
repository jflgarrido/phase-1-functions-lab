// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    return number%2 == 0 ? 8 : 1;
}

function distanceFromHqInFeet(number2) {
    return number2%2 == 0 ? 2112 : 264;
}

function distanceTravelledInFeet(num1,num2) {
    return (Math.max(num1,num2) - Math.min(num1,num2)) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return (Math.max(num1, num2) - Math.min(num1, num2)) * 264;
}

function calculatesFarePrice(num1,num2) {
    let a = (distanceTravelledInFeet(num1,num2));
        if (a < 400) {
           return 0;
        } else if ((a >= 400) && (a <= 2000)) {
          return (a - 400) * 0.02;
        } else if ((a > 2000) && (a <= 2500)) {
          return 25;
        } else {
          return 'cannot travel that far';
        }
}