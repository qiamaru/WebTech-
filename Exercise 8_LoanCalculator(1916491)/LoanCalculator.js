document.getElementById("kira").addEventListener("click", function(){
let principal = document.getElementById("principal").value;
let deposit = document.getElementById("deposit").value;
let interest = document.getElementById("interest").value;
let years = document.getElementById("years").value;
solution(principal,deposit,interest,years);
});

function solution(principal,deposit,interest,years){

  let totalPrinciple = principal-deposit;
  let totalInterest = (interest/100)*totalPrinciple*years;
  let totalToPay = totalInterest+totalPrinciple;
  let monthlyToPay = totalToPay/years/12;
  document.getElementById("payment").innerHTML = "RM "+ monthlyToPay.toFixed(2);
}

// let totalPrinciple = principal-deposit;
// let totalInterest = (interest/100)*totalPrinciple*years;
// let totalToPay = totalInterest+totalPrinciple;
// let monthlyToPay = totalToPay/years/12;
