const fc = require('../dist/fraction-calculator');

const res = fc('1/3')
  .plus(0.5)
  .times('5/6')
  .minus('7/8')
  .div('1/3')
  .plus(1.8)
  .pow(1.5)
  .sqrt();
console.log(res.toString()); // 8573487214015829/7216236010448754