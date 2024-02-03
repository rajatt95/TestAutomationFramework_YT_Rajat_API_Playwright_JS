/**
 * Utility class for making HTTP requests and logging request and response details.
 */
class RequestUtils {

    /**
     * Logs details with a specified prefix.
     * @param {string} prefix - The prefix for the log details.
     * @param {Object} details - The details to be logged.
     */
    logDetails(prefix, details) {
      console.log('------------------------------------------------------------');
      console.log(`${prefix} Details:`, details);
    }
  
    /**
     * Logs details for an HTTP request, including method, endpoint, and request body (if applicable).
     * @param {string} method - The HTTP request method (GET, POST, PUT, DELETE).
     * @param {string} endpoint - The endpoint or URL for the request.
     * @param {Object} requestBody - The request body (if applicable).
     */
    logRequestDetails(method, endpoint, requestBody) {
      this.logDetails('Request', {
        method,
        endpoint,
        requestBody: (method === 'GET' || method === 'DELETE') ? 'N/A' : JSON.stringify(requestBody),
      });
    }
  
    /**
     * Logs details for an HTTP response.
     * @param {Response} response - The HTTP response object.
     */
    logResponseDetails(response) {
      this.logDetails('Response', {
        status: response.status(),
        statusText: response.statusText(),
        url: response.url(),
        // headers: response.headers()
      });
    }

    /**
     * Makes an HTTP request, logs details, and returns the response.
     * @param {Object} request - The request object used for making HTTP requests.
     * @param {string} method - The HTTP request method (GET, POST, PUT, DELETE).
     * @param {string} endpoint - The endpoint or URL for the request.
     * @param {Object} requestBody - The body of the HTTP request.
     * @returns {Response} - The HTTP response object.
     */
    async makeRequest(request, method, endpoint, requestBody) {
      this.logRequestDetails(method, endpoint, requestBody);
      const response = await request[method.toLowerCase()](endpoint, { data: requestBody });
      this.logResponseDetails(response);
      return response;
    }
  
    /**
     * Makes a GET request and returns the response.
     * @param {Object} request - The request object used for making HTTP requests.
     * @param {string} endpoint - The endpoint or URL for the request.
     * @returns {Response} - The HTTP response object.
     */
    get(request, endpoint) {
      return this.makeRequest(request, 'GET', endpoint);
    }
  
    /**
     * Makes a POST request and returns the response.
     * @param {Object} request - The request object used for making HTTP requests.
     * @param {string} endpoint - The endpoint or URL for the request.
     * @param {Object} requestBody - The body of the HTTP request.
     * @returns {Response} - The HTTP response object.
     */
    post(request, endpoint, requestBody) {
      return this.makeRequest(request, 'POST', endpoint, requestBody);
    }
  
    /**
     * Makes a PUT request and returns the response.
     * @param {Object} request - The request object used for making HTTP requests.
     * @param {string} endpoint - The endpoint or URL for the request.
     * @param {Object} requestBody - The body of the HTTP request.
     * @returns {Response} - The HTTP response object.
     */
    put(request, endpoint, requestBody) {
      return this.makeRequest(request, 'PUT', endpoint, requestBody);
    }
  
    /**
     * Makes a DELETE request and returns the response.
     * @param {Object} request - The request object used for making HTTP requests.
     * @param {string} endpoint - The endpoint or URL for the request.
     * @returns {Response} - The HTTP response object.
     */
    delete(request, endpoint) {
      return this.makeRequest(request, 'DELETE', endpoint);
    }
    
    /**
     * Makes a PATCH request and returns the response.
     * @param {Object} request - The request object used for making HTTP requests.
     * @param {string} endpoint - The endpoint or URL for the request.
     * @param {Object} requestBody - The body of the HTTP request.
     * @returns {Response} - The HTTP response object.
     */
    patch(request, endpoint, requestBody) {
      return this.makeRequest(request, 'PATCH', endpoint, requestBody);
    }

  }
  
  export default new RequestUtils();
  