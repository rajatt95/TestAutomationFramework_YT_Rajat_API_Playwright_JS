import schemaLoginSuccessful from '../test-data/schema/login/login-successful.json';
import schemaLoginUnsuccessful from '../test-data/schema/login/login-unsuccessful.json';

import schemaRegisterSuccessful from '../test-data/schema/register/register-successful.json';
import schemaRegisterUnsuccessful from '../test-data/schema/register/register-unsuccessful.json';

import schemaUserCreate from '../test-data/schema/users/user_create.json';
import schemaUserUpdatePut from '../test-data/schema/users/user_update_put.json';
import schemaUserUpdatePatch from '../test-data/schema/users/user_update_patch.json';

/**
 * Utility class for managing and providing schema data for various scenarios.
 */
class SchemaUtils {

    // Login
    LOGIN_SUCCESSFUL = schemaLoginSuccessful;
    LOGIN_UNSUCCESSFUL = schemaLoginUnsuccessful;

    // Register
    REGISTER_SUCCESSFUL = schemaRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = schemaRegisterUnsuccessful;

    // Users
    USER_CREATE = schemaUserCreate;
    USER_UPDATE_PUT = schemaUserUpdatePut;    
    USER_UPDATE_PATCH = schemaUserUpdatePatch;

}

export default new SchemaUtils;