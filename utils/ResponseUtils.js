/**
 * Utility class for handling and logging HTTP responses.
 */
class ResponseUtils {

    /**
     * Parses the response body as JSON and logs it. If parsing fails, an error is logged and thrown.
     * @param {Response} response - The HTTP response object.
     * @returns {Object} - The parsed response body as a JSON object.
     * @throws {Error} - If there's an error parsing the response body.
     */
    async parseAndLog(response) {
      try {
        const responseBody = JSON.parse(await response.text());
        console.log('------------------------------------------------------------');
        console.log('Parsed Response Body:');
        console.log(responseBody);
        console.log('------------------------------------------------------------');
        return responseBody;
      } catch (error) {
        console.error('Error parsing response:', error.message);
        throw error;
      }
    }
  }
  
  export default new ResponseUtils;