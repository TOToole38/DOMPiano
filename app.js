 Synth.setSampleRate(44100);
    Synth.setVolume(1.0);

    //create a piano instrument, other options are organ, edm or acoustic.
    var instrument = Synth.createInstrument('piano');

    //play a 4th octave C note for 2 seconds
    instrument.play('C', 4, 2);

    //play a 4th octave C# note for 2 seconds
    instrument.play('C#', 4, 2);

    var piano = Synth.createInstrument('piano');
	piano.play('C', 4, 2); 


var ckey = document.querySelector("#c"); 
var cShkey = document.querySelector("#cSh");
var dkey = document.querySelector("#d"); 
var dShkey = document.querySelector("#dSh"); 
var ekey = document.querySelector("#e"); 
//var eShkey = document.querySelector("#eSh"); 
var fkey = document.querySelector("#f"); 
var fShkey = document.querySelector("#fSh"); 
var gkey = document.querySelector("#g"); 
var gShkey = document.querySelector("#gSh")
var akey = document.querySelector("#a"); 
var aShkey = document.querySelector("#aSh"); 
var bkey = document.querySelector("#b"); 

// var a = a.keycode; 

ckey.addEventListener("click", function(){
	piano.play('C', 4, 2); 
});

cShkey.addEventListener("click", function(){
	piano.play('C#', 4, 2); 
});

dkey.addEventListener("click", function(){
	piano.play('D', 4, 2); 
});

dShkey.addEventListener("click", function(){
	piano.play('D#', 4, 2); 
});

ekey.addEventListener("click", function(){
	piano.play('E', 4, 2); 
});

fkey.addEventListener("click", function(){
	piano.play('F', 4, 2); 
});

fShkey.addEventListener("click", function(){
	piano.play('F#', 4, 2); 
});

gkey.addEventListener("click", function(){
	piano.play('G', 4, 2); 
});

gShkey.addEventListener("click", function(){
	piano.play('G#', 4, 2); 
});

akey.addEventListener("click", function(){
	piano.play('A', 4, 2); 
});

a.addEventListener("keydown", function(){
	piano.play('A', 4, 2); 
});


aShkey.addEventListener("click", function(){
	piano.play('A#', 4, 2); 
});

bkey.addEventListener("click", function(){
	piano.play('B', 4, 2); 
});

window.addEventListener('keypress', function (event) {
	if(event.keyIdentifier == "U+0041"){
		piano.play('A', 4, 2);}
}); 

// window.addEventListener('keypress', function (b) {
// 	piano.play('B', 4, 2);
// }); 


