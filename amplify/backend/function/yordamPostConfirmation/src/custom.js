/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log('HEyy lamda Function');
  console.log(event);
  return event;
};
