/**
 * Utility class for managing and providing API tokens.
 * Can be extended in future to support token generation or retrieval from secure sources.
 */
class TokenUtils {
  
  /**
   * Returns the API token to be used in authenticated requests.
   */
  getToken() {
      return 'reqres-free-v1';
    }
  }
  
  export default new TokenUtils();
  