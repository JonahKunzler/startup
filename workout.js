// Get all the workout divs
const workoutDivs = document.querySelectorAll('.workout');

// Loop through each workout div
workoutDivs.forEach((workoutDiv) => {
  // Get the day of the week from the workout div's header
  const day = workoutDiv.querySelector('h3').textContent;

  // Create an input field for the workout name
  const workoutNameInput = document.createElement('input');
  workoutNameInput.type = 'text';
  workoutNameInput.placeholder = 'Workout Name';
  workoutDiv.appendChild(workoutNameInput);

  // Create a button to add the workout information
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Workout';
  addButton.addEventListener('click', () => {
    // Get the workout name from the input field
    const workoutName = workoutNameInput.value;

    // Create a new paragraph element for the workout information
    const workoutInfo = document.createElement('p');
    workoutInfo.textContent = workoutName;

    // Add the workout information to the workout div
    workoutDiv.appendChild(workoutInfo);
  });
  workoutDiv.appendChild(addButton);
});
