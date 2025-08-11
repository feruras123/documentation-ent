/** @format */

import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

// Create HTTP link
const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_ENDPOINT}/graphql`,
});

// Auth link to add authorization header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
      'Content-Type': 'application/json',
    }
  }
});

// Error link to handle GraphQL and network errors
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    
    // Handle 401 errors (unauthorized)
    if (networkError.statusCode === 401) {
      // Clear local storage and redirect to login
      localStorage.clear();
      window.location.href = '/';
    }
    
    // Handle 404 errors
    if (networkError.statusCode === 404) {
      window.location.href = '/404';
    }
  }
});

// Create Apollo Client
const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    // Configure cache policies if needed
    typePolicies: {
      Query: {
        fields: {
          // Add field policies here if needed
        }
      }
    }
  }),
  // Global default options
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all'
    },
    query: {
      errorPolicy: 'all'
    }
  }
});

export default client;
