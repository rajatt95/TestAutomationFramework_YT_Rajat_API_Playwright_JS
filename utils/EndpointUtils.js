/**
 * Utility class for managing and providing endpoint URLs for various scenarios.
 */
class EndpointUtils {

    // Register
    REGISTER = 'register';

    // Login
    LOGIN = 'login';

    // Users
    LIST_USERS = 'users?page=2';
    SINGLE_USER = 'users/2';
    SINGLE_USER_NOT_FOUND = 'users/23';
    USER = 'user';
    
}

export default new EndpointUtils;

