class RequestUtils {

    logDetails(prefix, details) {
      console.log('------------------------------------------------------------');
      console.log(`${prefix} Details:`, details);
    }
  
    logRequestDetails(method, endpoint, requestBody) {
      this.logDetails('Request', {
        method,
        endpoint,
        requestBody: (method === 'GET' || method === 'DELETE') ? 'N/A' : JSON.stringify(requestBody),
      });
    }
  
    logResponseDetails(response) {
      this.logDetails('Response', {
        status: response.status(),
        statusText: response.statusText(),
        url: response.url(),
        // headers: response.headers()
      });
    }
  
    async makeRequest(request, method, endpoint, requestBody) {
      this.logRequestDetails(method, endpoint, requestBody);
      const response = await request[method.toLowerCase()](endpoint, { data: requestBody });
      this.logResponseDetails(response);
      return response;
    }
  
    get(request, endpoint) {
      return this.makeRequest(request, 'GET', endpoint);
    }
  
    post(request, endpoint, requestBody) {
      return this.makeRequest(request, 'POST', endpoint, requestBody);
    }
  
    put(request, endpoint, requestBody) {
      return this.makeRequest(request, 'PUT', endpoint, requestBody);
    }
  
    delete(request, endpoint) {
      return this.makeRequest(request, 'DELETE', endpoint);
    }
    
  }
  
  export default new RequestUtils();
  