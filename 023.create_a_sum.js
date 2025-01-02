/**
 * https://bigfrontend.dev/problem/create-a-sum
 * @param {number} num
 */
function sum(num) {
  function sum2(num2) {
    return sum(num + num2);
  }

  sum2.valueOf = () => num;
  return sum2;
}
