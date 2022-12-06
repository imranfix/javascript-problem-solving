
// problem 1: radianToDegree

function radianToDegree(radian){
  // Error message code--->>>
  if(typeof radian != 'number'){
    return 'please enter a number';
  }
  // ------------------------------>>>
  var pi = Math.PI;
  const degree = radian * (180/pi);
  return degree;
}

console.log(radianToDegree(10));
 





// problem 2: isjavaScript

function isJavaScriptFile(string){
    const file = 'app.js';
  
        if(isJavaScriptFile = string == file){
          return true;
        }
  
        else{
          return false;
        }
      
      }

      console.log(isJavaScriptFile('app.js'));
  
 




// problem 3: oilPrice

function oilPrice (diesel, petrol, octane){
    // Error message code--->>>
    if(typeof octane != 'number'){
      return 'please enter a number';
    }
    // ------------------------------>>>
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;

  const totalDieselPrice = diesel * dieselPrice;
  const totalPetrolPrice = petrol * petrolPrice;
  const totalOctanePrice = octane * octanePrice;

  const totalFuelCost = totalDieselPrice + totalPetrolPrice + totalOctanePrice;

  return totalFuelCost;
}

console.log(oilPrice(30, 20, 10));






// problem 4: publicBusFare

function publicBusFare(number){
  const reservedBus =50;
  const microBus = 11;
  const publicBusTickets = 250;

    // Error message code--->>>
    if(typeof number != 'number'){
      return 'please enter a number';
    }
    // ------------------------------>>>

       const remainingBus = number % (reservedBus);
       const remainingMicroBus = remainingBus % (microBus);
       const remainingPublicBus = remainingMicroBus;

     const totalPublicFare = publicBusTickets * remainingPublicBus;
  
  return totalPublicFare;
}

console.log(publicBusFare(50));






// problem 5: isBestFriend

function isBestFriend(friend1, friend2){

      if(friend1.name == friend2.friend && friend2.name == friend1.friend){

           return true;
         }

         else{
          return false;
         }
            
     }

     console.log(isBestFriend({name: "abul", friend: "babu;"}, 
                              {name: "babul", friend: "abul"}));


