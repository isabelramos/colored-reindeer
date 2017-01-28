var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquama rine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
  
var output = "";

for(var r=0; r<reindeer.length; r++){
	output+=colors[r] + " " + reindeer[r];
	output+="<br>"

}

hohohoElement.innerHTML = output;
