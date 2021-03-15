module.exports = function toReadable (number) {
  let zeroToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
  let twentyToOneHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 10) {
    return zeroToTen[number];
  }

  if (number >= 10 && number <= 19) {
    return tenToTwenty[number % 10];
  }

  if (number >= 20 && number <= 99) {
    if (number % 10 === 0) {
      let result = twentyToOneHundred[Math.floor(number / 10)];
      return result;
    } else {
      let result = twentyToOneHundred[Math.floor(number / 10)];
      return result += ' ' + zeroToTen[number % 10];
    }
  }

  if (number >= 100 && number <= 999) {
    let firstRank = zeroToTen[Math.floor(number / 100)] + ' hundred';
    let secondRank = Math.floor(number / 10) % 10;
    let thirdRank = ' ' + zeroToTen[number % 10];

    if (secondRank === 0) {
        secondRank = '';
    } else if (secondRank < 2) {
        secondRank = ' ' + tenToTwenty[number % 10];
        thirdRank = ' zero';
    } else {
        secondRank = ' ' + twentyToOneHundred[secondRank];
    }

    if (thirdRank === ' zero') {
        return firstRank + secondRank;
    } else {
        return firstRank + secondRank + thirdRank;
    }
  }
}
