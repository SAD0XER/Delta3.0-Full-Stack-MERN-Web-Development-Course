module.exports.a = 123;

module.exports.hi = () => {
  console.log("hi");
};

module.exports.hello = "Hello";
// module.exports = { hi, a };

//Using npm packages.
var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
