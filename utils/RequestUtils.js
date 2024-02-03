class RequestUtils {
   
    async get(request, endpoint) {
        return await request.get(endpoint);
    }

    async post(request, endpoint, requestBody) {
        return await request.post(endpoint, {
            data: requestBody
        });
    }

    async put(request, endpoint, requestBody) {
        return await request.put(endpoint, {
            data: requestBody
        });
  }

    async delete(request, endpoint) {
        return await request.delete(endpoint);
  }
}

export default new RequestUtils;