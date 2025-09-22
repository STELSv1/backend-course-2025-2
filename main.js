const { URL } = require('url');

const date = "202408";
const time_period = "m";

const base = "https://bank.gov.ua/NBUStatService/v1/statdirectory/FinResultsOfBanks.json";

const url = new URL(base);
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);

console.log(url.toString());
