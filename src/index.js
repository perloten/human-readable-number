module.exports = function toReadable (number) {
    var oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var hundreds = ' hundred ';
    var result;

      if(number === 0) return 'zero';
        if(number>=100) {
            if (number%100 === 0) {
            result = oneToNineteen[Math.floor(number/100)]+' hundred';
            } else if (number.toString().charAt(2) == 0 && number.toString().charAt(1) != 1) {
            result = oneToNineteen[Math.floor(number/100)]+hundreds+dozens[Math.floor((number%100)/10)];
        } else if(number%100 < 20 && number%100 > 9) {
            result = oneToNineteen[Math.floor(number/100)]+hundreds + oneToNineteen[(number%100)];
        } else if (number.toString().charAt(2) == 0 && number.toString().charAt(1) == 1) {
            result = oneToNineteen[Math.floor(number/100)]+hundreds+dozens[10];
        }  else if (number.toString().charAt(1) == 0 ) {
            result = oneToNineteen[Math.floor(number/100)]+hundreds+oneToNineteen[(number%100)%10];
        }   else {
           result = oneToNineteen[Math.floor(number/100)]+hundreds+dozens[Math.floor((number%100)/10)]+' ' + oneToNineteen[(number%100)%10];
        }
      } else if(number<20){
        result = oneToNineteen[number];
      } else if(number<100){
        if (number.toString().charAt(1) == 0 && number.toString().charAt(0) != 1) {
            result = dozens[number/10];
        } else if(number < 20 && number > 9) {
            result = oneToNineteen[number];
        }     else {
           result = dozens[Math.floor((number/10))]+' ' + oneToNineteen[number%10];
        }
      }
return result;
}
