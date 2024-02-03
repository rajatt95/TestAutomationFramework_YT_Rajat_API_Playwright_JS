import { test } from '@playwright/test'
import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';
import RequestUtils from '../utils/RequestUtils';
import ResponseUtils from '../utils/ResponseUtils';
import VerificationUtils from '../utils/VerificationUtils';

/**
 * Test suite for API endpoints related to user login.
 */
test.describe('Login', () => {
  
  // Define endpoints for login
  const loginEndpoint = EndpointUtils.LOGIN;
  
  /**
   * Test to login user successfully using a POST request.
   * @tags {regression, sanity}
   */
  test('POST Request - Login Successful. @regression @sanity', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, loginEndpoint, RequestBodyUtils.LOGIN_SUCCESSFUL);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 200)
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, "token")
    
  })

  /**
   * Test to login a user unsuccessfully with missing password using a POST request.
   * @tags {regression}
   */
  test('POST Request - Login Unsuccessful. @regression', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, loginEndpoint, RequestBodyUtils.LOGIN_UNSUCCESSFUL);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 400)
    VerificationUtils.assertResponseBodyKeyValue(responseBody, "error", "Missing password")
    
  })

})