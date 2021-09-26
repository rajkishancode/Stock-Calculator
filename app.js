var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr)
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((loss / initial) * 100).toFixed(2);
        
        showOutput(
          `Oh you made a loss of ${lossPercentage}%, which sums up to a total of ₹${loss}.`
        );

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        
        showOutput(
          `Oh you made a profit of ${profitPercentage}%, which sums up to a total of ₹${profit}.`
        );
    } else {
        showOutput("OOPS! No Loss No Gain.");

    }
}

function showOutput(message) {
outputBox.innerHTML = message;
}

submitBtn.addEventListener("click", submitHandler);