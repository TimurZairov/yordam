/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 *
 *
 * API_YORDAM_GRAPHQLAPIENDPOINTOUTPUT
 * API_YORDAM_GRAPHQLAPIIDOUTPUT
 * API_YORDAM_GRAPHQLAPIKEYOUTPUT
 */

const AWS = require('aws-sdk');

let ddb = new AWS.DynamoDB();

const AppSyncId = process.env.API_YORDAM_GRAPHQLAPIIDOUTPUT;
const env = process.env.ENV;
const TableName = `User-${AppSyncId}-${env}`;

console.log('Hello lamda');
let date = new Date();

const isExist = async id => {
  const params = {
    TableName: '',
    Key: id,
  };
  try {
    const response = await ddb.getItem(params).promise();
    return !!response?.Item;
  } catch (e) {
    return false;
  }
};

// const saveUser = async user => {
//   const date = new Date();
//   const timeStamp = date.getTime();
//   const dateString = date.toISOString();
//
//
//   const Item = {
//     ...user,
//     __typename: 'User',
//     _lastChangedAt: timeStamp,
//     _version: 1,
//     updatedAt: dateString,
//     createdAt: dateString,
//   };
//   const params = {
//     TableName,
//     Item,
//   };
//
//   try {
//     await ddb.putItem(params).promise();
//   } catch (e) {
//     console.log(e);
//   }
// };

exports.handler = async (event, context) => {
  // check on event user
  if (!event?.request.userAttributes) {
    console.log('No user data available');
    return;
  }
  //if exists
  const userAtt = event.request.userAttributes; // {sub : id user, email, name}
  //if not save to database
  const newUser = {
    id: userAtt.sub,
    email: userAtt.email,
    name: userAtt.name,
  };

  if (!(await isExist(newUser.id))) {
    let params = {
      Item: {
        id: {S: event.request.userAttributes.sub},
        __typename: {S: 'User'},
        name: {S: event.request.userAttributes.name},
        email: {S: event.request.userAttributes.email},
        employer: {BOOL: false},
        location: {S: ''},
        about: {S: ''},
        image: {S: ''},
        phoneNumber: {S: ''},
        createdAt: {S: date.toISOString()},
        updatedAt: {S: date.toISOString()},
        _lastChangedAt: {S: date.toISOString()},
      },
      TableName,
    };
    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error', err);
    }
    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
  // return event;
};
