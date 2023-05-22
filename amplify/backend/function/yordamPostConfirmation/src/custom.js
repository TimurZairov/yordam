/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log('HEyy lamda Function');
  console.log(event);

  const isExist = id => {};

  const saveUser = user => {};

  // check on event user
  if (!event?.request.userAttributes) {
    console.log('No user data available');
    return;
  }
  //if exists
  const userAtt = event.request.userAttributes; // {sub : id user, email, name}
  //if not save to database
  const newUser = {
    id: userAtt.id,
    email: userAtt.email,
    name: userAtt.name,
  };

  if (!isExist(newUser.id)) {
    saveUser(newUser);
  }

  return event;
};
