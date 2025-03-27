import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "42f3499798208d4414c357bd";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    // amount = 90
    // currency = inr
    // 90 usd = how much inr
    // 1 usd = ? inr
    // 90 usd = ? inr

    rl.question("Enter the anount in USD: ", (amount) => {
      rl.question(
        "Enter the target currency)e.g., INR, EUR,NPR: ",
        (currency) => {
          const rate = rates[currency.toUpperCase()];
          if (rate) {
            console.log(
              `${amount} USD is approximately ${convertCurrency(
                amount,
                rate
              )} ${currency}`
            );
          } else {
            console.log(`Invalid Currency Code...`);
          }
          rl.close();
        }
      );
    });
  });
});
