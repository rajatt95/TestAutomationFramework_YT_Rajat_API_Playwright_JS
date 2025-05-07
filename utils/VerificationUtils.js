// Importing necessary modules for Playwright test
import { expect } from '@playwright/test';
import Ajv from 'ajv';

/**
 * Utility class for verification and assertion functions related to API responses.
 */
class VerificationUtils{

    /**
     * Asserts that the response status code matches the expected status code.
     * @param {Response} response - The API response object.
     * @param {number} expectedStatusCode - The expected HTTP status code.
     */
    assertResponseStatusCode(response, expectedStatusCode){
        console.log(`Asserts that Response Status code is '${expectedStatusCode}'.`)
        expect(response.status()).toBe(expectedStatusCode)
    }

    /**
     * Asserts that the response body contains the specified key.
     * @param {Object} responseBody - The JSON response body.
     * @param {string} expectedKeyName - The expected key in the response body.
     */
    assertResponseBodyKeyPresent(responseBody, expectedKeyName){
        console.log(`Asserts that Response Body has property: '${expectedKeyName}'.`)
        expect(responseBody).toHaveProperty(expectedKeyName);
    }
    
    /**
     * Asserts that the response body key has the expected value.
     * @param {Object} responseBody - The JSON response body.
     * @param {string} expectedKeyName - The expected key in the response body.
     * @param {any} expectedValue - The expected value for the specified key.
     */
    assertResponseBodyKeyValue(responseBody, expectedKeyName, expectedValue) {
        console.log(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
        expect(responseBody[expectedKeyName]).toBe(expectedValue);
    }   
    
    /**
     * Asserts that the entire response body conforms to a given JSON schema.
     * Uses AJV for schema validation.
     * @param {Object} responseBody - The actual JSON response body to validate.
     * @param {Object} schema - The JSON schema to validate against.
     */
    assertResponseSchema(responseBody, schema) {
        console.log(`Asserts that response body matches the provided JSON schema.`);
      
        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const isValid = validate(responseBody);
      
        if (!isValid) {
          const errorMessages = validate.errors
            .map(err => `${err.instancePath || '(root)'} ${err.message}`)
            .join(', ');
          throw new Error(`Schema validation failed: ${errorMessages}`);
        }
      
        expect(isValid).toBe(true);
    }
      
} 

export default new VerificationUtils;