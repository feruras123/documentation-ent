/** @format */

/**
 * Extract error message from GraphQL response
 * @param {Object} error - Apollo Client error object
 * @returns {string} - User-friendly error message
 */
export const getErrorMessage = (error) => {
  if (error?.graphQLErrors?.length > 0) {
    return error.graphQLErrors[0].message;
  }
  
  if (error?.networkError) {
    if (error.networkError.statusCode === 401) {
      return "Authentication required. Please log in again.";
    }
    if (error.networkError.statusCode === 403) {
      return "You don't have permission to perform this action.";
    }
    if (error.networkError.statusCode >= 500) {
      return "Server error. Please try again later.";
    }
    return error.networkError.message;
  }
  
  return error?.message || "An unexpected error occurred.";
};

/**
 * Check if error is due to authentication issues
 * @param {Object} error - Apollo Client error object
 * @returns {boolean} - True if authentication error
 */
export const isAuthError = (error) => {
  return (
    error?.networkError?.statusCode === 401 ||
    error?.graphQLErrors?.some(err => 
      err.extensions?.code === 'UNAUTHENTICATED' ||
      err.message.toLowerCase().includes('unauthorized') ||
      err.message.toLowerCase().includes('token')
    )
  );
};

/**
 * Format GraphQL variables for logging (removes sensitive data)
 * @param {Object} variables - GraphQL variables object
 * @returns {Object} - Sanitized variables for logging
 */
export const sanitizeVariables = (variables) => {
  const sensitiveFields = ['password', 'newPassword', 'token', 'secret'];
  const sanitized = { ...variables };
  
  sensitiveFields.forEach(field => {
    if (sanitized[field]) {
      sanitized[field] = '***REDACTED***';
    }
  });
  
  return sanitized;
};

/**
 * Handle GraphQL mutation response consistently
 * @param {Object} result - Apollo mutation result
 * @param {Function} onSuccess - Success callback
 * @param {Function} onError - Error callback
 */
export const handleMutationResponse = (result, onSuccess, onError) => {
  const { data, errors } = result;
  
  if (errors?.length > 0) {
    const errorMessage = getErrorMessage({ graphQLErrors: errors });
    onError(errorMessage);
    return;
  }
  
  // Check for application-level errors in the response
  const mutationKey = Object.keys(data)[0];
  const response = data[mutationKey];
  
  if (response?.error) {
    onError(response.error);
    return;
  }
  
  if (response?.success === false) {
    onError(response.message || 'Operation failed');
    return;
  }
  
  onSuccess(response);
};

/**
 * Create a standardized response object for Redux actions
 * @param {string} message - Response message
 * @param {string} status - 'success' or 'error'
 * @param {Object} data - Additional data (optional)
 * @returns {Object} - Standardized response object
 */
export const createResponse = (message, status, data = null) => ({
  message,
  status,
  ...(data && { data })
});

/**
 * Retry function for failed GraphQL operations
 * @param {Function} operation - Function that returns a Promise
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {number} delay - Delay between retries in milliseconds
 * @returns {Promise} - Promise that resolves with the operation result
 */
export const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Don't retry on authentication errors
      if (isAuthError(error)) {
        throw error;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
};
