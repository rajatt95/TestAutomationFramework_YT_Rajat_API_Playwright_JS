class ResponseUtils {

    async parseAndLog(response) {
      try {
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        return responseBody;
      } catch (error) {
        console.error('Error parsing response:', error.message);
        throw error;
      }
    }
  }
  
  export default new ResponseUtils;