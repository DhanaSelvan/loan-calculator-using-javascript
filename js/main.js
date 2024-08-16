var btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let amt = document.getElementById('amt').value;
    let interest = document.getElementById('interest').value;
    let repay = document.getElementById('repay').value;
    console.log("hello ", amt, interest, repay)

    let monthlyPayment = ((amt / repay) + interest);
    let totalInterest = (amt * (interest * 0.01)) / repay;
    let totalPayment = parseFloat(amt) + parseFloat(totalInterest);

    document.getElementById("result").innerHTML = `
        <h4>Total Payment: ${ parseInt(totalPayment) }</h4>
        <h4>Monthly Payment: ${ parseInt(monthlyPayment) }</h4>
        <h4>Total Interest: ${ parseInt(totalInterest) }</h4>
    `

})