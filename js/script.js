// Function to calculate the total order price based on selected size and condiments
function OrderCalculate() {
  // Get the dropdown menu for selecting size
  let select = document.getElementById("sizes");
  // Get the selected size value from the dropdown menu
  let size = select.options[select.selectedIndex].value
  // Get all the selected condiment checkboxes
  const selectedCondimentCheckboxes = document.querySelectorAll('input[name="condiment"]:checked');
  // Variable for the name of the selected size
  let sizeName = "";

  // Array to store selected condiment values
  let selectedCondimentValues = [];
  // constant for tax
  const HST  = 1.13
  // variable for the result div element
  let result = document.getElementById("result")

  // Loop through all selected condiment checkboxes and store their values in the array
  selectedCondimentCheckboxes.forEach(function(checkbox) {
      selectedCondimentValues.push(checkbox.value);
  });

  // Determine the price and name of the selected size
  if (size == 'small'){
    size = 2.99;
    sizeName = "small";
  }
  else if (size == 'medium'){
    size = 3.99;
    sizeName = "medium";
  }
  else if (size == 'large'){
    size = 5.99;
    sizeName = "large";
  }

  // Display the order summary based on selected size and condiments
  if (selectedCondimentCheckboxes.length > 0){
    result.innerHTML = "You ordered a " + sizeName + " hotdog with " + selectedCondimentValues.join(", ");
  }
  else{
    result.innerHTML = "You ordered a " + sizeName + " hotdog with no condiments";
  }

  // Calculate the subtotal, tax, and update the displayed values
  let subtotal = size + selectedCondimentValues.length * 0.25;
  let tax = subtotal * HST;

  document.getElementById("subtotal").innerHTML = "Subtotal: " + subtotal;
  document.getElementById("total").innerHTML = "Total: " + tax.toFixed(2);
}