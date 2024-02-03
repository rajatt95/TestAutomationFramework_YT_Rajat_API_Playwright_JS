import { test } from '@playwright/test'
import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';
import RequestUtils from '../utils/RequestUtils';
import ResponseUtils from '../utils/ResponseUtils';
import VerificationUtils from '../utils/VerificationUtils';

/**
 * Test suite for API endpoints related to user management.
 */
test.describe('Users', () => {
  
  // Define endpoints for users
  const singleUserEndpoint = EndpointUtils.SINGLE_USER;
  const userEndpoint = EndpointUtils.USER;

  /**
   * Test to retrieve user details with a GET request.
   * @tags {regression}
   */
  test('GET Request - Get User Details. @regression ', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.get(request, singleUserEndpoint);
    
    // Parse and Log Response Body    
    const responseBody = await ResponseUtils.parseAndLog(response)
    
    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 200)  
    VerificationUtils.assertResponseBodyKeyValue(responseBody.data, 'id', 2);
    VerificationUtils.assertResponseBodyKeyValue(responseBody.data, 'first_name', 'Janet');
    VerificationUtils.assertResponseBodyKeyValue(responseBody.data, 'last_name', 'Weaver');
    VerificationUtils.assertResponseBodyKeyPresent(responseBody.data, 'email')

  })

  /**
   * Test to create a new user with a POST request.
   * @tags {regression, sanity}
   */
  test('POST Request - Create New User. @regression @sanity', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, userEndpoint, RequestBodyUtils.USER_CREATE);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    VerificationUtils.assertResponseBodyKeyValue(responseBody, 'id', 1111);
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'createdAt');
    
  })

  /**
   * Test to update a user with a PUT request.
   * @tags {regression, sanity}
   */
  test('PUT Request - Update User. @regression @sanity', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.put(request, singleUserEndpoint, RequestBodyUtils.USER_UPDATE);
    
    // Parse and Log Response Body     
    const responseBody = await ResponseUtils.parseAndLog(response)
        
    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 200);
    VerificationUtils.assertResponseBodyKeyValue(responseBody, 'name', 'test name - updated');
    VerificationUtils.assertResponseBodyKeyValue(responseBody, 'job', 'test job - updated');
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'updatedAt');
  
  })

  /**
   * Test to delete a user with a DELETE request.
   * @tags {regression}
   */
  test('DELETE Request - Delete User. @regression', async ({ request }) => {
 
    // Make a request to the API endpoint
    const response = await RequestUtils.delete(request, singleUserEndpoint);

    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 204);
    
  })

})