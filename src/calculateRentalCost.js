/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;
  const dailyRent = 40;
  let total = days * dailyRent;

  if (days < shortTerm) {
    return 80;
  }

  if (days === shortTerm) {
    return (total -= 20);
  }

  if (days > shortTerm && days < longTerm) {
    return (total -= 20);
  }

  if (days >= longTerm) {
    return (total -= 50);
  }
}
module.exports = calculateRentalCost;
