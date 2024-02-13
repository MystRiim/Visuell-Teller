let outputDiv = document.getElementById("output");
let showNum = 0;

function plusOne() {
	showNum += 1;
	outputDiv.innerHTML = showNum;
}

function minOne() {
	showNum -= 1;
	outputDiv.innerHTML = showNum;
}
