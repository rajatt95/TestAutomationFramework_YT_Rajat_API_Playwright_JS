import { test, expect} from '@playwright/test'
import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';
import RequestUtils from '../utils/RequestUtils';
import ResponseUtils from '../utils/ResponseUtils';

test.describe('Users', () => {
  
  const singleUserEndpoint = EndpointUtils.SINGLE_USER;
  const userEndpoint = EndpointUtils.USER;

  test('GET Request - Get User Detail. @regression ', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.get(request, singleUserEndpoint);
    
    // Parse and Log Response Body    
    const responseBody = await ResponseUtils.parseAndLog(response)
    
    // Assertions to validate the response
    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(2)
    expect(responseBody.data.first_name).toBe('Janet')
    expect(responseBody.data.last_name).toBe('Weaver')
    expect(responseBody.data.email).toBeTruthy()

  })

  test('POST Request - Create New User. @regression @sanity', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.post(request, userEndpoint, RequestBodyUtils.USER_CREATE);

    // Parse and Log Response Body   
    const responseBody = await ResponseUtils.parseAndLog(response)
            
    // Assertions to validate the response
    expect(responseBody.id).toBe(1111)
    expect(responseBody.createdAt).toBeTruthy()
    
  })

  test('PUT Request - Update User. @regression @sanity', async ({ request }) => {

    // Make a request to the API endpoint
    const response = await RequestUtils.put(request, singleUserEndpoint, RequestBodyUtils.USER_UPDATE);
    
    // Parse and Log Response Body     
    const responseBody = await ResponseUtils.parseAndLog(response)
        
    // Assertions to validate the response
    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe('test name - updated')
    expect(responseBody.job).toBe('test job - updated')
    expect(responseBody.updatedAt).toBeTruthy()
  
  })

  test('DELETE Request - Delete User. @regression', async ({ request }) => {
 
    // Make a request to the API endpoint
    const response = await RequestUtils.delete(request, singleUserEndpoint);

    // Assertions to validate the response
    expect(response.status()).toBe(204)
    
  })

})