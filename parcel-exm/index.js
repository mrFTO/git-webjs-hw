require("./index.css");
var $1uc5u$luxon = require("luxon");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $0da772950f0afba5$var$result =
  document.getElementById("datecalc__result");
const $0da772950f0afba5$export$55ee1551a3f962e6 = (errorText) => {
  $0da772950f0afba5$var$result.innerText = errorText;
};
const $0da772950f0afba5$export$8a95c420c9833406 = ({
  years: years,
  months: months,
  days: days,
}) => {
  $0da772950f0afba5$var$result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;
};
console.log("test");

// import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';
function $4e31424149ee73ea$var$getDateDiff(dateFrom, dateTo) {
  if (dateFrom < dateTo) [dateFrom, dateTo] = [dateTo, dateFrom];
  const dateFromObj = $1uc5u$luxon.DateTime.fromISO(dateFrom);
  const dateToObj = $1uc5u$luxon.DateTime.fromISO(dateTo);
  return dateFromObj.diff(dateToObj, ["years", "months", "days"]).toObject();
}
var $4e31424149ee73ea$export$2e2bcd8739ae039 =
  $4e31424149ee73ea$var$getDateDiff;

const $d9fbfb5c3eb9e256$var$form = document.getElementById("datecalc");
$d9fbfb5c3eb9e256$var$form.onsubmit = (event) => {
  event.preventDefault();
  const dataForm = new FormData(event.target);
  const firstDate = dataForm.get("firstDate");
  const secondDate = dataForm.get("secondDate");
  if (!firstDate || !secondDate)
    $0da772950f0afba5$export$55ee1551a3f962e6("Oooopps! Введите дату");
  else {
    const dateREsult = $4e31424149ee73ea$export$2e2bcd8739ae039(
      firstDate,
      secondDate
    );
    $0da772950f0afba5$export$8a95c420c9833406(dateREsult);
  }
};

var $24be3e93b56dada7$exports = {};
$24be3e93b56dada7$exports = new URL(
  "bundler.e19035cf.png",
  "file:" + __filename
).toString();

console.log(/*@__PURE__*/ $parcel$interopDefault($24be3e93b56dada7$exports));

//# sourceMappingURL=index.js.map
