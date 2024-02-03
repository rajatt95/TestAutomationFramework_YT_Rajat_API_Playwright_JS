import { expect } from '@playwright/test';

class VerificationUtils{

    assertResponseStatusCode(response, expectedStatusCode){
        console.log(`Asserts that Response Status code is '${expectedStatusCode}'.`)
        expect(response.status()).toBe(expectedStatusCode)
    }

    assertResponseBodyKeyPresent(responseBody, expectedKeyName){
        console.log(`Asserts that Response Body has property: '${expectedKeyName}'.`)
        expect(responseBody).toHaveProperty(expectedKeyName);
    }
    
    assertResponseBodyKeyValue(responseBody, expectedKeyName, expectedValue) {
        console.log(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
        expect(responseBody[expectedKeyName]).toBe(expectedValue);
    }    
} 

export default new VerificationUtils;