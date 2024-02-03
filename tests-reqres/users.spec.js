import { test, expect} from '@playwright/test'
import EndpointUtils from '../utils/EndpointUtils';
import RequestBodyUtils from '../utils/RequestBodyUtils';

test.describe('Users', () => {
  
  const singleUserEndpoint = EndpointUtils.SINGLE_USER;
  const userEndpoint = EndpointUtils.USER;

  test('GET Request - Get User Detail. @regression ', async ({ request }) => {

    // Call API endpoint
    const response = await request.get(singleUserEndpoint)
    
    // Extract the Response Body
    const responseBody = JSON.parse(await response.text())

    // Print the Response Data in console for debugging purposes
    console.log(responseBody);
    
    // Assertions to validate the response
    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(2)
    expect(responseBody.data.first_name).toBe('Janet')
    expect(responseBody.data.last_name).toBe('Weaver')
    expect(responseBody.data.email).toBeTruthy()

  })

  test('POST Request - Create New User. @regression @sanity', async ({ request }) => {

    // Call API endpoint
    const response = await request.post(userEndpoint, {
      // Request Body
      data: RequestBodyUtils.USER_CREATE
    })

    // Extract the Response Body
    const responseBody = JSON.parse(await response.text())

    // Print the Response Data in console for debugging purposes
    console.log(responseBody);
        
    // Assertions to validate the response
    expect(responseBody.id).toBe(1111)
    expect(responseBody.createdAt).toBeTruthy()
    
  })

  test('PUT Request - Update User. @regression @sanity', async ({ request }) => {

    // Call API endpoint
     const response = await request.put(singleUserEndpoint, {
      // Request Body
      data: RequestBodyUtils.USER_UPDATE
    })
    
    // Extract the Response Body
    const responseBody = JSON.parse(await response.text())

    // Print the Response Data in console for debugging purposes
    console.log(responseBody);
    
    // Assertions to validate the response
    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe('test name - updated')
    expect(responseBody.job).toBe('test job - updated')
    expect(responseBody.updatedAt).toBeTruthy()
  
  })

  test('DELETE Request - Delete User. @regression', async ({ request }) => {
 
    // Call API endpoint
    const response = await request.delete(singleUserEndpoint)
 
    // Assertions to validate the response
    expect(response.status()).toBe(204)
    
  })

})