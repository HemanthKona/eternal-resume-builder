exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 400,
    body: "Test Error"
  });
}
