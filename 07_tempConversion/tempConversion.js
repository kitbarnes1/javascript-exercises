const ftoc = function(f) {
  const celcius = Math.round(((f - 32) / 1.8) * 10) / 10;
  // console.log(celcius)
  return celcius

};

const ctof = function(c) {
  const fahrenheit = Math.round(((c * 1.8) + 32) * 10) / 10;
  // console.log(fahrenheit)
  return fahrenheit

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
