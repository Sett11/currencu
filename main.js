async function getCurrencies() {
  const url = "//www.cbr-xml-daily.ru/daily_json.js";
  const response = await fetch(url);
  const data = await response.json();

  const usd = document.querySelector("#usd");
  const eur = document.querySelector("#eur");
  const blr = document.querySelector("#blr");

  const usdElement =
    data.Valute.USD.Value.toFixed(2) / data.Valute.BYN.Value.toFixed(2);
  const eurElement =
    data.Valute.EUR.Value.toFixed(2) / data.Valute.BYN.Value.toFixed(2);
  const rubElement = data.Valute.BYN.Value.toFixed(2) / 6.15;

  usd.innerText = usdElement.toFixed(2);
  eur.innerText = eurElement.toFixed(2);
  blr.innerText = rubElement.toFixed(2);
}

getCurrencies();
