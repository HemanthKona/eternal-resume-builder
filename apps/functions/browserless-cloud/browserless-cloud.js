const browser = require("phantomjscloud");
// console.log(browser);

exports.handler = async (event, context) => {

  return {
    statusCode: 200,
    body: "Works"
  };
}
