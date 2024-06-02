function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const timesCompounded = parseInt(document.getElementById('timesCompounded').value);
    const years = parseInt(document.getElementById('years').value);

    const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    const interest = amount - principal;

    document.getElementById('result').innerHTML = `
        <p>Total Amount: ₹${amount.toFixed(2)}</p>
        <p>Total Interest: ₹${interest.toFixed(2)}</p>
    `;
}
