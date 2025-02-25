
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
var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]


//Game Play Functions 

//Easy Move Functions 
function PME1(){
    var PME = [windmill, swipe, backSpin, tripod, coinDrop]
   
    var moveOne = Math.floor(Math.random()* PME.length);
        var moveOneA= PME.splice(moveOne,1)
        
    sessionStorage.setItem("moveOneA", moveOneA);
    
 document.getElementById("moveOne").innerHTML = moveOneA
    };

    function PME2(){
        var PME = [windmill, swipe, backSpin, tripod, coinDrop]
       
        var moveTwo = Math.floor(Math.random()* PME.length);
            var moveTwoA= PME.splice(moveTwo,1)
            
        sessionStorage.setItem("moveTwoA", moveTwoA);
        
     document.getElementById("moveTwo").innerHTML = moveTwoA
        };

  
        function PME3(){
            var PME = [windmill, swipe, backSpin, tripod, coinDrop]
           
            var moveThree = Math.floor(Math.random()* PME.length);
                var moveThreeA= PME.splice(moveThree,1)
                
            sessionStorage.setItem("moveThreeA", moveThreeA);
            
         document.getElementById("moveThree").innerHTML = moveThreeA
            };           


            function PME4(){
                var PME = [windmill, swipe, backSpin, tripod, coinDrop]
               
                var moveFour = Math.floor(Math.random()* PME.length);
                    var moveFourA= PME.splice(moveFour,1)
                    
                sessionStorage.setItem("moveFourA", moveFourA);
                
             document.getElementById("moveFour").innerHTML = moveFourA
                };
            
                function PME5(){
                    var PME = [windmill, swipe, backSpin, tripod, coinDrop]
                   
                    var moveFive = Math.floor(Math.random()* PME.length);
                        var moveFiveA= PME.splice(moveFive,1)
                        
                    sessionStorage.setItem("moveFiveA", moveFiveA);
                    
                 document.getElementById("moveFive").innerHTML = moveFiveA
                    };
            
              
                    function PME6(){
                        var PME = [windmill, swipe, backSpin, tripod, coinDrop]
                       
                        var moveSix = Math.floor(Math.random()* PME.length);
                            var moveSixA= PME.splice(moveSix,1)
                            
                        sessionStorage.setItem("moveSixA", moveSixA);
                        
                     document.getElementById("moveSix").innerHTML = moveSixA
                        };           
            
//Medium Move Functions 
function PMM1(){

    var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
    
    var MmoveOne = Math.floor(Math.random()* PMM.length);
        var MmoveOneA= PMM.splice(MmoveOne,1)
        
    sessionStorage.setItem("MmoveOneA", MmoveOneA);
    
 document.getElementById("MmoveOne").innerHTML = MmoveOneA
    };

    function PMM2(){

        var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
        
        var MmoveTwo = Math.floor(Math.random()* PMM.length);
            var MmoveTwoA= PMM.splice(MmoveTwo,1)
            
        sessionStorage.setItem("MmoveTwoA", MmoveTwoA);
        
     document.getElementById("MmoveTwo").innerHTML = MmoveTwoA
        };

        function PMM3(){

            var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
            
            var MmoveThree = Math.floor(Math.random()* PMM.length);
                var MmoveThreeA= PMM.splice(MmoveThree,1)
                
            sessionStorage.setItem("MmoveThreeA", MmoveThreeA);
            
         document.getElementById("MmoveThree").innerHTML = MmoveThreeA
            };

            function PMM4(){

                var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
                
                var MmoveFour = Math.floor(Math.random()* PMM.length);
                    var MmoveFourA= PMM.splice(MmoveFour,1)
                    
                sessionStorage.setItem("MmoveFourA", MmoveFourA);
                
             document.getElementById("MmoveFour").innerHTML = MmoveFourA
                };

                function PMM5(){

                    var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
                    
                    var MmoveFive = Math.floor(Math.random()* PMM.length);
                        var MmoveFiveA= PMM.splice(MmoveFive,1)
                        
                    sessionStorage.setItem("MmoveFiveA", MmoveFiveA);
                    
                 document.getElementById("MmoveFive").innerHTML = MmoveFiveA
                    };

                    function PMM6(){

                        var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
                        
                        var MmoveSix = Math.floor(Math.random()* PMM.length);
                            var MmoveSixA= PMM.splice(MmoveSix,1)
                            
                        sessionStorage.setItem("MmoveSixA", MmoveSixA);
                        
                     document.getElementById("MmoveSix").innerHTML = MmoveSixA
                        };
                                                            
//Hard Move Functions 
function PMH1(){

    var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
    var HmoveOne = Math.floor(Math.random()* PMH.length);
        var HmoveOneA= PMH.splice(HmoveOne,1)
        
    sessionStorage.setItem("HmoveOneA", HmoveOneA);
    
 document.getElementById("HmoveOne").innerHTML = HmoveOneA
    };

    function PMH2(){

        var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
        
        var HmoveTwo = Math.floor(Math.random()* PMH.length);
            var HmoveTwoA= PMH.splice(HmoveTwo,1)
            
        sessionStorage.setItem("HmoveTwoA", HmoveTwoA);
        
     document.getElementById("HmoveTwo").innerHTML = HmoveTwoA
        };

        function PMH3(){

            var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
            
            var HmoveThree = Math.floor(Math.random()* PMH.length);
                var HmoveThreeA= PMH.splice(HmoveThree,1)
                
            sessionStorage.setItem("HmoveThreeA", HmoveThreeA);
            
         document.getElementById("HmoveThree").innerHTML = HmoveThreeA
            };

            function PMH4(){

                var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
                
                var HmoveFour = Math.floor(Math.random()* PMH.length);
                    var HmoveFourA= PMH.splice(HmoveFour,1)
                    
                sessionStorage.setItem("HmoveFourA", HmoveFourA);
                
             document.getElementById("HmoveFour").innerHTML = HmoveFourA
                };

                function PMH5(){

                    var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
                    
                    var HmoveFive = Math.floor(Math.random()* PMH.length);
                        var HmoveFiveA= PMH.splice(HmoveFive,1)
                        
                    sessionStorage.setItem("HmoveFiveA", HmoveFiveA);
                    
                 document.getElementById("HmoveFive").innerHTML = HmoveFiveA
                    };

                    function PMH6(){

                        var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
                        
                        var HmoveSix = Math.floor(Math.random()* PMH.length);
                            var HmoveSixA= PMH.splice(HmoveSix,1)
                            
                        sessionStorage.setItem("HmoveSixA", HmoveSixA);
                        
                     document.getElementById("HmoveSix").innerHTML = HmoveSixA
                        };

//Insanity Move Functions 

function PMI1(){
    
    var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]
    var ImoveOne = Math.floor(Math.random()* PMI.length);
        var ImoveOneA= PMI.splice(ImoveOne,1)
        
    sessionStorage.setItem("ImoveOneA", ImoveOneA);
    
 document.getElementById("ImoveOne").innerHTML = ImoveOneA
    };

    function PMI2(){
        var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]
       
        var ImoveTwo = Math.floor(Math.random()* PMI.length);
            var ImoveTwoA= PMI.splice(ImoveTwo,1)
            
        sessionStorage.setItem("ImoveTwoA", ImoveTwoA);
        
     document.getElementById("ImoveTwo").innerHTML = ImoveTwoA
        };

  
        function PMI3(){
          
            var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]
            var ImoveThree = Math.floor(Math.random()* PMI.length);
                var ImoveThreeA= PMI.splice(ImoveThree,1)
                
            sessionStorage.setItem("ImoveThreeA", ImoveThreeA);
            
         document.getElementById("ImoveThree").innerHTML = ImoveThreeA
            };           


            function PMI4(){
                var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]
               
                var ImoveFour = Math.floor(Math.random()* PMI.length);
                    var ImoveFourA = PMI.splice(ImoveFour,1)
                    
                sessionStorage.setItem("ImoveFourA", ImoveFourA);
                
             document.getElementById("ImoveFour").innerHTML = ImoveFourA
                };
            
                function PMI5(){

                    var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]
                    var ImoveFive = Math.floor(Math.random()* PMI.length);
                        var ImoveFiveA = PMI.splice(ImoveFive,1)
                        
                    sessionStorage.setItem("ImoveFiveA", ImoveFiveA);
                    
                 document.getElementById("ImoveFive").innerHTML = ImoveFiveA
                    };
            
              
                    function PMI6(){
                        
                        var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderFreeze, handHop, tombstone]
                       
                        var ImoveSix = Math.floor(Math.random()* PMI.length);
                            var ImoveSixA = PMI.splice(ImoveSix,1)
                            
                        sessionStorage.setItem("ImoveSixA", ImoveSixA);
                        
                     document.getElementById("ImoveSix").innerHTML = ImoveSixA
                        };           

//Easy Freeze Functions

function FE1(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
   
    var freezeOne = Math.floor(Math.random()* FE.length);
        var freezeOneA= FE.splice(freezeOne,1)
        
    sessionStorage.setItem("freezeOneA", freezeOneA);
    
 document.getElementById("freezeOne").innerHTML = freezeOneA
    };


function FE2(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
   
    var freezeTwo = Math.floor(Math.random()* FE.length);
        var freezeTwoA= FE.splice(freezeTwo,1)
        
    sessionStorage.setItem("freezeTwoA", freezeTwoA);
    
 document.getElementById("freezeTwo").innerHTML = freezeTwoA
    };


function FE3(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
   
    var freezeThree = Math.floor(Math.random()* FE.length);
        var freezeThreeA= FE.splice(freezeThree,1)
        
    sessionStorage.setItem("freezeThreeA", freezeThreeA);
    
 document.getElementById("freezeThree").innerHTML = freezeThreeA
    };


    function FE4(){
        var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
       
        var freezeFour = Math.floor(Math.random()* FE.length);
            var freezeFourA= FE.splice(freezeFour,1)
            
        sessionStorage.setItem("freezeFourA", freezeFourA);
        
     document.getElementById("freezeFour").innerHTML = freezeFourA
        };


function FE5(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
   
    var freezeFive = Math.floor(Math.random()* FE.length);
        var freezeFiveA= FE.splice(freezeFive,1)
        
    sessionStorage.setItem("freezeFiveA", freezeFiveA);
    
 document.getElementById("freezeFive").innerHTML = freezeFiveA
    };


function FE6(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
   
    var freezeSix = Math.floor(Math.random()* FE.length);
        var freezeSixA= FE.splice(freezeSix,1)
        
    sessionStorage.setItem("freezeSixA", freezeSixA);
    
 document.getElementById("freezeSix").innerHTML = freezeSixA
    };

    //Medium Freeze Functions 
    function FM1(){
      
        var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
        var MfreezeOne = Math.floor(Math.random()* FM.length);
            var MfreezeOneA= FM.splice(MfreezeOne,1)
            
        sessionStorage.setItem("MfreezeOneA", MfreezeOneA);
        
     document.getElementById("MfreezeOne").innerHTML = MfreezeOneA
        };
    
        function FM2(){
      
            var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
            var MfreezeTwo = Math.floor(Math.random()* FM.length);
                var MfreezeTwoA= FM.splice(MfreezeTwo,1)
                
            sessionStorage.setItem("MfreezeTwoA", MfreezeTwoA);
            
         document.getElementById("MfreezeTwo").innerHTML = MfreezeTwoA
            };

            function FM3(){
      
                var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
                var MfreezeThree = Math.floor(Math.random()* FM.length);
                    var MfreezeThreeA= FM.splice(MfreezeThree,1)
                    
                sessionStorage.setItem("MfreezeThreeA", MfreezeThreeA);
                
             document.getElementById("MfreezeThree").innerHTML = MfreezeThreeA
                };

                function FM4(){
      
                    var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
                    var MfreezeFour = Math.floor(Math.random()* FM.length);
                        var MfreezeFourA= FM.splice(MfreezeFour,1)
                        
                    sessionStorage.setItem("MfreezeFourA", MfreezeFourA);
                    
                 document.getElementById("MfreezeFour").innerHTML = MfreezeFourA
                    };

                    function FM5(){
      
                        var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
                        var MfreezeFive = Math.floor(Math.random()* FM.length);
                            var MfreezeFiveA= FM.splice(MfreezeFive,1)
                            
                        sessionStorage.setItem("MfreezeFiveA", MfreezeFiveA);
                        
                     document.getElementById("MfreezeFive").innerHTML = MfreezeFiveA
                        };

                        function FM6(){
      
                            var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
                            var MfreezeSix = Math.floor(Math.random()* FM.length);
                                var MfreezeSixA= FM.splice(MfreezeSix,1)
                                
                            sessionStorage.setItem("MfreezeSixA", MfreezeSixA);
                            
                         document.getElementById("MfreezeSix").innerHTML = MfreezeSixA
                            };

//Hard Freeze Functions 
function FH1(){
      
    var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]

    var HfreezeOne = Math.floor(Math.random()* FH.length);
        var HfreezeOneA= FH.splice(HfreezeOne,1)
        
    sessionStorage.setItem("HfreezeOneA", HfreezeOneA);
    
 document.getElementById("HfreezeOne").innerHTML = HfreezeOneA
    };

    function FH2(){
      
        var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
    
        var HfreezeTwo = Math.floor(Math.random()* FH.length);
            var HfreezeTwoA= FH.splice(HfreezeTwo,1)
            
        sessionStorage.setItem("HfreezeTwoA", HfreezeTwoA);
        
     document.getElementById("HfreezeTwo").innerHTML = HfreezeTwoA
        };

        function FH3(){
      
            var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
        
            var HfreezeThree = Math.floor(Math.random()* FH.length);
                var HfreezeThreeA= FH.splice(HfreezeThree,1)
                
            sessionStorage.setItem("HfreezeThreeA", HfreezeThreeA);
            
         document.getElementById("HfreezeThree").innerHTML = HfreezeThreeA
            };

            function FH4(){
      
                var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
            
                var HfreezeFour = Math.floor(Math.random()* FH.length);
                    var HfreezeFourA= FH.splice(HfreezeFour,1)
                    
                sessionStorage.setItem("HfreezeFourA", HfreezeFourA);
                
             document.getElementById("HfreezeFour").innerHTML = HfreezeFourA
                };

                function FH5(){
      
                    var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
                
                    var HfreezeFive = Math.floor(Math.random()* FH.length);
                        var HfreezeFiveA= FH.splice(HfreezeFive,1)
                        
                    sessionStorage.setItem("HfreezeFiveA", HfreezeFiveA);
                    
                 document.getElementById("HfreezeFive").innerHTML = HfreezeFiveA
                    };

                    function FH6(){
      
                        var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
                    
                        var HfreezeSix = Math.floor(Math.random()* FH.length);
                            var HfreezeSixA= FH.splice(HfreezeSix,1)
                            
                        sessionStorage.setItem("HfreezeSixA", HfreezeSixA);
                        
                     document.getElementById("HfreezeSix").innerHTML = HfreezeSixA
                        };

//Insanity Freeze Functions 

function FI1(){
      
    var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]    

    var IfreezeOne = Math.floor(Math.random()* FI.length);
        var IfreezeOneA= FI.splice(IfreezeOne,1)
        
    sessionStorage.setItem("IfreezeOneA", IfreezeOneA);
    
 document.getElementById("IfreezeOne").innerHTML = IfreezeOneA
    };

             
    function FI2(){
      
        var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]    
    
        var IfreezeTwo = Math.floor(Math.random()* FI.length);
            var IfreezeTwoA= FI.splice(IfreezeTwo,1)
            
        sessionStorage.setItem("IfreezeTwoA", IfreezeTwoA);
        
     document.getElementById("IfreezeTwo").innerHTML = IfreezeTwoA
        };

        function FI3(){
      
            var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]    
        
            var IfreezeThree = Math.floor(Math.random()* FI.length);
                var IfreezeThreeA= FI.splice(IfreezeThree,1)
                
            sessionStorage.setItem("IfreezeThreeA", IfreezeThreeA);
            
         document.getElementById("IfreezeThree").innerHTML = IfreezeThreeA
            };

            function FI4(){
      
                var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]    
            
                var IfreezeFour = Math.floor(Math.random()* FI.length);
                    var IfreezeFourA= FI.splice(IfreezeFour,1)
                    
                sessionStorage.setItem("IfreezeFourA", IfreezeFourA);
                
             document.getElementById("IfreezeFour").innerHTML = IfreezeFourA
                };

                function FI5(){
      
                    var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]    
                
                    var IfreezeFive = Math.floor(Math.random()* FI.length);
                        var IfreezeFiveA= FI.splice(IfreezeFive,1)
                        
                    sessionStorage.setItem("IfreezeFiveA", IfreezeFiveA);
                    
                 document.getElementById("IfreezeFive").innerHTML = IfreezeFiveA
                    };

                    function FI6(){
      
                        var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]    
                    
                        var IfreezeSix = Math.floor(Math.random()* FI.length);
                            var IfreezeSixA= FI.splice(IfreezeSix,1)
                            
                        sessionStorage.setItem("IfreezeSixA", IfreezeSixA);
                        
                     document.getElementById("IfreezeSix").innerHTML = IfreezeSixA
                        };
