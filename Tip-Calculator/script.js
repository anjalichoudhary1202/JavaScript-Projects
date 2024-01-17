function calculate() {
    const amount = document.getElementById("amount").value;
    const tip = document.getElementById("tip").value;
    
    let total = amount * (1 + (tip/100));
    total = total.toFixed(2);
    document.getElementById("total").innerHTML = `Total: $ ${total}`;
}