window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const a = document.getElementById("loan-amount");
  const y = document.getElementById("loan-years");
  const r =document.getElementById("loan-rate");
  a.value = 1000;
  y.value = 2;
  r.value = 6;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  console.log(values.amount);
  console.log(values.years);
  console.log(values.rate);
  const r = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(r);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //console.log(values.amount);
  if(!Number.isFinite(values.amount) || !Number.isFinite(values.years) || !Number.isFinite(values.rate)){
    throw new Error('All your fields must be finite numbers');
  }

  if(values.amount <= 0 || values.years <= 0){
    throw new Error('Your amount and years must be above 0');
  }
  const principle = values.amount;
  const rate = (values.rate / 100) / 12;
  const monthlyPayment = (values.amount * rate) / 1 - Math.pow((1 + values.rate), -(Math.floor(values.years*12)));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = monthly;
}
