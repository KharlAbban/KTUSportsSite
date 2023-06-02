document.querySelector("#addToCart").addEventListener("click", addItem);
document.querySelector("#buyBtn").addEventListener("click", purchaseClicked);

function addItem(event) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row","row","text-center","border-bottom","mb-2","pb-2","align-items-center");
  var cartRowContents = `<div class="col-lg-6 item-details">
  <img src="media/ktu_logo.png" alt="" height="50" class="item-image">
  <span class="item-title ml-2">Item Name</span>
</div>
<div class="col-lg-2 item-price">$12.35</div>
<div class="col-lg-4 item-quantity">
  <input type="number" name="quantity" id="" value="1" class="item-quantity-input">
  <button type="button" class="btn btn-danger">Remove Item</button>
</div>`;
  cartRow.innerHTML = cartRowContents;
  document.getElementById("cart-items").append(cartRow);
  cartRow.querySelector(".item-quantity-input").addEventListener("change", quantityChanged);
  cartRow.querySelector(".btn-danger").addEventListener("click", removeItem);
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.querySelector("#cart-items");
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('item-price')[0]
      var quantityElement = cartRow.getElementsByClassName('item-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity);
  }
  total = parseFloat(((total * 100) / 100), 2);
  document.querySelector("#totalPrice").innerText =  total;
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal();
}

function removeItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function purchaseClicked() {
  //Added a condition to prevent purchase if total is zero
  var amtElement = document.querySelector("#totalPrice");
  var totalAmt = parseFloat(amtElement.innerText);
  if (totalAmt == 0) {alert("No items to purchase!!"); return;}
  //End of condition
  
  alert('Thank you for your purchase.\n You purchased $' + totalAmt + ' worth of items');
  var cartItems = document.querySelector("#cart-items");
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}