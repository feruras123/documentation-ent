/** @format */

// Export Apollo Client
export { default as apolloClient } from './client';

// Export all queries
export * from './queries';

// Export all mutations
export * from './mutations';

// Export utilities
export * from './utils';

// Re-export commonly used Apollo utilities
export {
  gql,
  useQuery,
  useMutation,
  useLazyQuery,
  useSubscription,
  ApolloProvider,
  ApolloConsumer
} from '@apollo/client';
