import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({ uri: 'http://localhost:9000' });

const apolloClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
