        const allBtn = document.getElementsByClassName("seat");
        
        for(const btn of allBtn){
           
        btn.addEventListener("click", function(event){    
       const name = event.target.innerText;
       document.getElementsByClassName("seat").innerText=name;
       const price = document.getElementById("ticket-price").innerText;
       const selectContainer = document.getElementById("seat-price");

       
       event.target.setAttribute("disabled", false);

       
            

       const div = document.createElement("div");
       div.classList.add("container-flex");
       const p1 = document.createElement("p");
       const p2 = document.createElement("p");
       const p3 = document.createElement("p");

       p1.innerText=name;
       p2.innerText="Economy";
       p3.innerText=price;

       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);

       selectContainer.appendChild(div);


       seatCount();
       budgetCount();
       totalPrice(price);
       grandTotal();
       myFunction(this, '#1DD100');


    })
}



function totalPrice (price){
    const previousTotalPrice = document.getElementById("total-price").innerText;
    const convertedTotal = parseInt(previousTotalPrice);
    const convertedPrice = parseInt(price);
    const totalCount = convertedTotal + convertedPrice;
    document.getElementById("total-price").innerText=totalCount;
}

function grandTotal (control){
    const previousTotalPrice = document.getElementById("total-price").innerText;
    const convertedTotal = parseInt(previousTotalPrice);
    const couponCode = document.getElementById("coupon-code").value;
    
    if(control){
    if(couponCode=="new15"){
        const discount = convertedTotal * 0.15;
        document.getElementById("grand-total").innerText=convertedTotal-discount;
    }else if(couponCode=="coupon20"){
        const discount = convertedTotal * 0.20;
        document.getElementById("grand-total").innerText=convertedTotal-discount;
    }
    
    else{
        alert("Invited coupon code and No Discount")
        return;
    }
    } else{
        document.getElementById("grand-total").innerText=convertedTotal;
    }
}



function seatCount (value){
    const seatCount = document.getElementById("seat-count").innerText;
    const updateSeat = parseInt(seatCount);
    document.getElementById("seat-count").innerText=updateSeat+1;
}

function budgetCount (value){
    const budgetCountLeft = document.getElementById("budget-count").innerText;
    const updateBudget = parseInt(budgetCountLeft);
    document.getElementById("budget-count").innerText=updateBudget-1;
 }

 function allButton (value){
    const allButton = document.querySelectorAll(".seat").innerText;
    const updateAllBtn = parseInt(allButton);
    document.querySelectorAll(".seat").innerText=updateAllBtn+1;
 }

 function myFunction(element, color) {
    element.style.backgroundColor = color;
  }

  function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

  function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
  function play() {
    hideElementById("main")
    showElementById("next");
}
 

