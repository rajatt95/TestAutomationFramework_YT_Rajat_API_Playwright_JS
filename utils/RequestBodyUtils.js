import requestBodyRegisterSuccessful from '../test-data/register/register-successful.json';
import requestBodyRegisterUnsuccessful from '../test-data/register/register-unsuccessful.json';

import requestBodyUserCreate from '../test-data/users/user_create.json';
import requestBodyUserUpdate from '../test-data/users/user_update.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Register
    REGISTER_SUCCESSFUL = requestBodyRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = requestBodyRegisterUnsuccessful;
    
    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE = requestBodyUserUpdate;

}

export default new RequestBodyUtils;