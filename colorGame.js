let numSquares = 6;
let colors = generateRandomColors(numSquares)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")
colorDisplay.textContent = pickedColor;
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected")
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (let i = 0; i < squares.length; i++){

		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected")
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (let i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for (let i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";

})

for (let i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function () {
		//grab color of clicked squares
		let clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor)
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
			changeColours(clickedColor);

			// changeColours(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
			// then we create a span in Html
		}
	});
}

function changeColours(color) {

	// loop through all squares

	for (let i = 0; i < squares.length; i++) {
	// change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length)
	return colors[random]
}
function generateRandomColors(num) {
	// make an array
	let arr = [];
	// add num random color to arr
	for (let i = 0; i < num; i++) {
		// get random color and push arr
		arr.push(randomColor());
	}
	// return that array 
	return arr; 

}

function randomColor(){

	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}