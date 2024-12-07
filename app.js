// document.getElementById('convertBtn').addEventListener("click", convertCurrency);

async function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;


if (amount === '' || isNaN(amount)) {
    document.getElementById("convertedAmount").textContent = "Please enter valid Number!"
    return;
}

const apiKey = '9e2e8cb4e3d958d6c97b7385';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

try {
    // Fetch the exchange rate data
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result === "success") {
      const rate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);;
      document.getElementById("convertedAmount").textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById("convertedAmount").textContent = "Error fetching exchange rates. Please try again later."

    //   alert("Error fetching exchange rates. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("convertedAmount").textContent = "An error occurred while fetching exchange rates."

    // alert("An error occurred while fetching exchange rates.");
  }

}