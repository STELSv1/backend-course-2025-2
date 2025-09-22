const { URL } = require('url');

const DATE = '2024-08';
const TIME_PERIOD = 'month';

const url = new URL('/NBUStatService/v1/stat-directory/profit_loss', 'https://bank.gov.ua/');

url.searchParams.set('date', DATE);
url.searchParams.set('time_period', TIME_PERIOD);
url.searchParams.set('json', '');

console.log(url.toString());
