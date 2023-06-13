import {ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache,} from '@apollo/client';
import {createAuthLink} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import config from '../aws-exports';

//aws config from src/aws-exports
const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;

const auth = {
  type: config.aws_appsync_authenticationType,
  apiKey: config.aws_appsync_apiKey,
};

const httpLink = createHttpLink({uri: url});

const link = ApolloLink.from([
  createAuthLink({url, region, auth}),
  createSubscriptionHandshakeLink({url, region, auth}, httpLink),
]);

let typePolicies = {
  Query: {
    fields: {
      postsByDate: {
        keyArgs: ['type', 'createdAt', 'sortDirection', 'filter'],
        merge: (existing = [], incoming) => {
          return {
            ...existing,
            ...incoming,
            items: [...(existing.items || []), ...incoming.items],
          };
        },
      },
    },
  },
};

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({typePolicies}),
});

const Client = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
