function OrderCalculate() {
  //
  let sizes = document.getElementById("sizes").value;
  //
  let select = document.getElementById("sizes");
  //
  let size = select.options[select.selectedIndex].value
  //
  const selectedCondimentCheckboxes = document.querySelectorAll('input[name="condiment"]:checked');
  //
  let sizeName = "";
  let selectedCondimentValues = [];
  const selectedCondiments = document.getElementById("selectedCondiments");
  const HST  = 1.13
  let result = document.getElementById("result")
  selectedCondimentCheckboxes.forEach(function(checkbox) {
      selectedCondimentValues.push(checkbox.value);
  });
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
  if (selectedCondimentCheckboxes.length > 0){
    result.innerHTML = "You ordered a " + sizeName + " hotdog with " + selectedCondimentValues.join(", ");
  }
  else{
    result.innerHTML = "You ordered a " + sizeName + " hotdog with no condiments";
  }
  let subtotal = size + selectedCondimentValues.length * 0.25;
  let tax = subtotal * HST;
  document.getElementById("subtotal").innerHTML = "Subtotal: " + subtotal;
  document.getElementById("total").innerHTML = "Total: " + tax.toFixed(2);
}