import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const uri = process.env.REACT_APP_API_HOST;

console.log(uri);

const restLink = new RestLink({ uri });

const apolloClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
