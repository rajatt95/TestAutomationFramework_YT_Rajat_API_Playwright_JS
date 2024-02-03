import { test } from '@playwright/test'
import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';
import RequestUtils from '../utils/RequestUtils';
import ResponseUtils from '../utils/ResponseUtils';
import VerificationUtils from '../utils/VerificationUtils';

test.describe('Users', () => {
  
  const singleUserEndpoint = EndpointUtils.SINGLE_USER;
  const userEndpoint = EndpointUtils.USER;

  test('GET Request - Get User Detail. @regression ', async ({ request }) => {

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

  test('POST Request - Create New User. @regression @sanity', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, userEndpoint, RequestBodyUtils.USER_CREATE);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    VerificationUtils.assertResponseBodyKeyValue(responseBody, 'id', 1111);
    VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'createdAt');
    
  })

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

  test('DELETE Request - Delete User. @regression', async ({ request }) => {
 
    // Make a request to the API endpoint
    const response = await RequestUtils.delete(request, singleUserEndpoint);

    // Assertions to validate the response
    VerificationUtils.assertResponseStatusCode(response, 204);
    
  })

})