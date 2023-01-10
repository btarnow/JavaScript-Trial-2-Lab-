'use strict';

//input --> "San Francisco"
//output --> True 

//input --> "Scottsdale"
//output --> False

// if town is San Fransciso return true, if not return false 

// 1. isHometown
function isHometown(town) {

    if(town === "San Francisco") {
        return true; 
    }
    else {
        return false;
    }
    
}

isHometown("Japan")


// input --> ("Becky", "Tarnowski")
// output --> Becky Tarnowski

// 2. getFullName

function getFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
    return fullName;
}

getFullName("Becky", "Tarnowski")


// input --> (1 , 'CA', tax= 0.05)
    //subtotal --> 1 * (1 + 0.05) 
    // fee --> 0.03 * 1.05 
    // total --> 1.05 + 0.32 --> 1.37
// output --> 1.37

// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
    const subtotal = basePrice * (1 + tax);
    let fee = 0;

    if(state === 'CA') {
        fee = (0.03 * subtotal);
    }
    else if(state === 'PA') {
        fee = 2;
    }
    else if(state === 'MA') {
        if(basePrice <= 100){
            fee = 1;
        }
        else {
            fee = 3
        }
    }
    

    return subtotal + fee;

}

calculateTotal(1, 'CA')




// // 3. calculateTotal SOLUTION: 
// function calculateTotal(basePrice, state, tax = 0.05) {
//     const subtotal = basePrice * (1 + tax);
  
//     let fee = 0;
//     if (state === 'CA') {
//       fee = 0.03 * subtotal;
//     } else if (state === 'PA') {
//       fee = 2;
//     } else if (state === 'MA') {
//       if (basePrice <= 100) {
//         fee = 1;
//       } else {
//         fee = 3;
//       }
//     }
  
//     return subtotal + fee;
//   }