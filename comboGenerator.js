
//Variables//

//Moves// 

var windmill = "Windmill"
var swipe = "Swipe"
var backSpin = "Backspin"
var tripod = "Tripod"
var coinDrop = "Coin Drop"
var flare = "Flare"
var headspin = "Headspin"
var barrelmill = "Barrel Mill"
var bellymill = "Belly Mill"
var nutcrackers = "Nutcrackers"
var turtle = "Turtle"
var halo = "Halo"
var ninety = "90"
var twoThousand = "2000"
var munchmill = "Munchmill"
var ufo = "UFO"
var elbowTrack = "Elbow Track"
var headglide = "Head Glide"
var shoulderSpin = "Shoulder Spin"
var virginFlare = "Virgin Flare"
var handcuffs = "Handcuff"
var airChairSpin = "Air Chair Spin"
var elbowSpin = "Elbow Spin"
var elbowGlide = "Elbow Glide"
var handHop = "HandHop"
var tapMill = "Tap Mill"
var gorillas = "Gorillas"
var jackHammer = "Jack Hammer"
var airFlare = "AirFlare"
var tombstone = "Tombstones"

//Freezes//

var babyFreeze = "Baby Freeze"
var headstand = "Headstand"
var headElbowFreeze = "Head Elbow Freeze"
var lFreeze = "L Freeze"
var shoulderFreeze = "Shoulder Freeze"
var airBaby = "Air Baby"
var airChair = "Air Chair"
var elbowFreeze = "Elbow Freeze"
var sideFreeze = "Side Freeze"
var turtleFreeze = "Turtle Freeze"
var flagFreeze = "Flag Freeze"
var oneHandFreeze = "One Hand Freeze"
var handstand = "Handstand"
var hollowBack = "Hollow Back"
var invert = "Invert"
var pikeFreeze = "Pike Freeze"
var oneHandAirBaby = "One Hand Air Baby"


//Arrays//

//Move Arrays//

var PME = [windmill, swipe, backSpin, tripod, coinDrop]
var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]


//Freeze Arrays//

var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze], turtleFreeze
var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]


//Game Play Functions 


function PME31(){
    var PME = [windmill, swipe, backSpin, tripod, coinDrop]
   
    var moveOne = Math.floor(Math.random()* PME.length);
        var moveOneA= PME.splice(moveOne,1)
        
    sessionStorage.setItem("moveOneA", moveOneA);
    
 document.getElementById("moveOne").innerHTML = moveOneA
    };

    function PME32(){
        var PME = [windmill, swipe, backSpin, tripod, coinDrop]
       
        var moveTwo = Math.floor(Math.random()* PME.length);
            var moveTwoA= PME.splice(moveTwo,1)
            
        sessionStorage.setItem("moveTwoA", moveTwoA);
        
     document.getElementById("moveTwo").innerHTML = moveTwoA
        };

  
        function PME33(){
            var PME = [windmill, swipe, backSpin, tripod, coinDrop]
           
            var moveThree = Math.floor(Math.random()* PME.length);
                var moveThreeA= PME.splice(moveThree,1)
                
            sessionStorage.setItem("moveThreeA", moveThreeA);
            
         document.getElementById("moveThree").innerHTML = moveThreeA
            };           




