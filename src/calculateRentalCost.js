/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;

  if (days < shortTerm) {
    return 80;
  }

  if (days === shortTerm && days < longTerm) {
    return 100;
  }

  if (days > shortTerm && days < longTerm) {
    return 220;
  }

  if (days >= longTerm) {
    return 230;
  }
}
module.exports = calculateRentalCost;
