/**
 * https://bigfrontend.dev/problem/add-comma-to-number
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
  if (num >= 0 && num < 1000) return String(num);

  let decimals = null;
  let beforeDecimal = null;

  let stringNum = String(num);
  if (stringNum.includes('.')) {
    const arr = stringNum.split('.');
    decimals = arr[arr.length - 1];
    beforeDecimal = arr[0];
  } else {
    beforeDecimal = stringNum;
  }

  let finalArr = [];
  let tempArr = [];

  for (let i = beforeDecimal.length - 1; i >= 0; i -= 1) {
    if (tempArr.length === 3) {
      finalArr.unshift(tempArr.join(''));
      tempArr = [];
    }
    tempArr.unshift(beforeDecimal[i]);
  }

  if (tempArr.length > 0) {
    finalArr.unshift(tempArr.join(''));
  }

  let firstHalf = finalArr.join(',');
  if (decimals !== null) {
    firstHalf = firstHalf + '.' + decimals;
  }

  return firstHalf;
}
