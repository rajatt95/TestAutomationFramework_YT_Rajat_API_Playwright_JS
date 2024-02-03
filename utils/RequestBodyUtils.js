import requestBodyUserCreate from '../test-data/users/user_create.json';
import requestBodyUserUpdate from '../test-data/users/user_update.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE = requestBodyUserUpdate;

}

export default new RequestBodyUtils;