import { test } from '@playwright/test'
import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';
import RequestUtils from '../utils/RequestUtils';
import ResponseUtils from '../utils/ResponseUtils';
import VerificationUtils from '../utils/VerificationUtils';

/**
 * Test suite for API endpoints related to user registration.
 */
test.describe('Register', () => {
  
  // Define endpoints for register
  const registerEndpoint = EndpointUtils.REGISTER;
  
  /**
   * Test to register a new user successfully using a POST request.
   * @tags {regression}
   */
  test('POST Request - Register Successful. @regression', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, registerEndpoint, RequestBodyUtils.REGISTER_SUCCESSFUL);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 200)
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, "id")
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, "token")
    
  })

  /**
   * Test to register a new user unsuccessfully with missing password using a POST request.
   * @tags {regression}
   */
  test('POST Request - Register Unsuccessful. @regression', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, registerEndpoint, RequestBodyUtils.REGISTER_UNSUCCESSFUL);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 400)
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, "error")
    VerificationUtils.assertResponseBodyKeyValue(responseBody, "error", "Missing password")
    
  })

})