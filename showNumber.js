
import * as mainFunctions from "./simpleDecimalPlace.js";


function displayTotal(name,total)
{
    return `${mainFunctions.capitalize(name)}, your total const is: ${mainFunctions.roundToDecimalPlace(total)}`;
}

console.log(displayTotal('kindsley',20.444444));


