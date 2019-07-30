//example of colors in array: "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"
let colors = [];

let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let squares = document.querySelectorAll(".square");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let hardMode = 6;

let colorCreator = (red, green, blue) => { return "rgb(" + red + ", " + green + ", " + blue + ")"; }
let randomNum = (colorArray) => {return Math.floor(Math.random() * (255 + 1));}
let randomPickedColor = (colorArray, num) => { let randoIndex = Math.floor(Math.random() * num);
	return colorArray[randoIndex];
}
let pushColors = (myArray, num) => {
	for (let i = 0; i < 6; i++) {
		if (num === 3 && i < 3) {
    		myArray.push(colorCreator(randomNum(), randomNum(), randomNum()));
    	} else if (num === 3 && i >= 3){
    		squares[i].style.display = "none";
    	} else {
    		myArray.push(colorCreator(randomNum(), randomNum(), randomNum()));
    		squares[i].style.display = "block";
    	} 
}}

easyBtn.addEventListener("click", () => {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	hardMode = 3;
	pushColors(colors, hardMode);
	pickedColor = randomPickedColor(colors, hardMode);
	colorDisplay.textContent = pickedColor;
	document.querySelector("#message").textContent = "";
	populateColors();
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colors";
});
hardBtn.addEventListener("click", () => {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	hardMode = 6;
	pushColors(colors, hardMode);
	pickedColor = randomPickedColor(colors, hardMode);
	colorDisplay.textContent = pickedColor;
	document.querySelector("#message").textContent = "";
	populateColors();
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colors";
});

pushColors(colors, hardMode);
let pickedColor = randomPickedColor(colors, hardMode);
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", () => {
	colors = [];
	pushColors(colors, hardMode);
	pickedColor = randomPickedColor(colors, hardMode);
	colorDisplay.textContent = pickedColor;
	document.querySelector("#message").textContent = "";
	populateColors();
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colors";
});

function populateColors() {

squares.forEach((element, i, colorArray) => {
	element.style.backgroundColor = colors[i];
	element.addEventListener("click", () => {
									let index = i;
									let clickedColor = colorArray[i].style.backgroundColor;
                                  	if (clickedColor === colorDisplay.textContent) {
                                  		document.querySelector("#message").textContent = "Correct!";
                                  		squares.forEach((element) => element.style.backgroundColor = clickedColor);
                                  		h1.style.backgroundColor = clickedColor;
                                  		resetButton.textContent = "Play Again?";
                                  	} else {
                                  		colorArray[i].style.backgroundColor = "#232323";
                                  		document.querySelector("#message").textContent = "Try Again!";
                                  	}
                                  })});
}

populateColors();