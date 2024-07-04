let amount;
let result = 0.0;
let toCoin;

async function getCurrency() {
    const response = await fetch(
        "https://api.currencyapi.com/v3/historical?apikey=cur_live_sMuluO4tlbIYQsEo7uR6i3esiQdCDsVZIdrFif0o&currencies=USD%2CJOD%2CGBP%2CEUR&base_currency=ILS&date=2024-07-03"
    );
    const data = await response.json();

    const USDValue = data.data.USD.value;
    const ERUValue = data.data.EUR.value;
    const JODValue = data.data.JOD.value;
    const GBPValue = data.data.GBP.value;

    const formConvert = document.querySelector(".card .currency");
    formConvert.onsubmit = function (e) {
        e.preventDefault();
        const elements = e.target.elements;
        amount = elements[0].value;
        toCoin = elements[1].value;
        console.log(amount, toCoin);
        if (toCoin === "USD") {
            result = Math.round(amount * USDValue);
        }
        else if (toCoin == "JOD") {
            result = amount * JODValue;
        }
        else if (toCoin == "GBP") {
            result = amount * GBPValue;
        }
        else
            result = amount * ERUValue;
        let showConvert = `<h2>${amount}₪ = ${result} ${toCoin}</h2>`;
        document.querySelector(".card .result").innerHTML = showConvert;
    }
}
getCurrency();
