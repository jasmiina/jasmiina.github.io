
var myIndex = 0;
var picNum = 1;

var placeNames = ["Domburg, Netherlands", "Rincon, Puerto Rico", "McWay Falls, United States", "Moscow, Russia", "Hong Kong", "Málaga, Spain",
"Málaga, Spain", "Quiraing, Portree, United Kingdom", "Colorado, United States", "Fjaðrárgljúfur, Iceland", "Point Reyes Cypress Tree, Point Reyes, United States",
"Muscat, Oman", "Arabian Desert, United Arab Emirates", "Oljato-Monument Valley, United States", "Polana Chochołowska, Kiry, Poland", "Alaverdi, Armenia",
"England", "Pula, Croatia", "T'bilisi, Georgia", "Riare, Veneto, Italia", "Bénouville, Normandia, France", "Trentino-Alto Adige, Italia",
"Toblacher See, Italy", "Gulf of Thailand, Thailand"]
var credits = ["Photo by Yusuf Evli on Unsplash", "Photo by Matthew Brodeur on Unsplash", "Photo by Derek Thomson on Unsplash", "Photo by Nikita Karimov on Unsplash",
"Photo by Mark Goh on Unsplash", "Photo by Jonas Hoss on Unsplash", "Photo by Alireza Lashkari on Unsplash", "Photo by Andrew Ridley on Unsplash",
"Photo by Breanna Galley on Unsplash", "Photo by Agnieszka M on Unsplash", "Photo by James Besser on Unsplash", "Photo by Giorgio Parravicini on Unsplash",
"Photo by Shot by Cerqueira on Unsplash", "Photo by Ganapathy Kumar on Unsplash", "Photo by Dawid Zawiła on Unsplash", "Photo by Alexandr Hovhannisyan on Unsplash",
"Photo by Alexander Andrews on Unsplash", "Photo by Nick Kane on Unsplash", "Photo by mostafa meraji on Unsplash", "Photo by Michael Martinelli on Unsplash",
"Photo by Michael Martinelli on Unsplash", "Photo by Michael Martinelli on Unsplash", "Photo by Tim Stief on Unsplash", "Photo by Tom Winckels on Unsplash"]

slideShow();

// Randomized slideshow to show a different image every x seconds
function slideShow() {
	var i;
	var x = document.getElementsByClassName("pics");
	picNum = Math.floor((Math.random() * x.length)); //generate random number from the picture list
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}
	x[picNum].style.display = "block";
	x[picNum].onclick = changeText;
	setTimeout(slideShow, 5000);
}

// Changes the infobox according to the picture that was clicked
function changeText() {
	document.getElementById("placeName").innerHTML = placeNames[picNum];
	document.getElementById("photoBy").innerHTML = credits[picNum];
}