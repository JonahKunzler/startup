let foodNameInput = document.getElementById("foodName");
let caloriesInput = document.getElementById("calories");
let foodTable = document.getElementById("foodTable");

function addFood() {
	let foodName = foodNameInput.value;
	let calories = caloriesInput.value;

	if (foodName === "" || calories === "") {
		alert("Please fill in all fields");
	} else {
		let newRow = foodTable.insertRow();
		let foodCell = newRow.insertCell();
		let caloriesCell = newRow.insertCell();

		foodCell.innerHTML = foodName;
		caloriesCell.innerHTML = calories;

		foodNameInput.value = "";
		caloriesInput.value = "";
	}
}
