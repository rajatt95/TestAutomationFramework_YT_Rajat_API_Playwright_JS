import requestBodyRegisterSuccessful from '../test-data/register/register-successful.json';
import requestBodyRegisterUnsuccessful from '../test-data/register/register-unsuccessful.json';

import requestBodyLoginSuccessful from '../test-data/login/login-successful.json';
import requestBodyLoginUnsuccessful from '../test-data/login/login-unsuccessful.json';

import requestBodyUserCreate from '../test-data/users/user_create.json';
import requestBodyUserUpdate from '../test-data/users/user_update.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Register
    REGISTER_SUCCESSFUL = requestBodyRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = requestBodyRegisterUnsuccessful;

    // Login
    LOGIN_SUCCESSFUL = requestBodyLoginSuccessful;
    LOGIN_UNSUCCESSFUL = requestBodyLoginUnsuccessful;

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE = requestBodyUserUpdate;

}

export default new RequestBodyUtils;