## Errors and Mock Data

### Errors

*Applies to: Products API &#8226; Stores API &#8226; Reviews API &#8226; Categories API &#8226; Recommendations API*

Best Buy uses standard HTTP response codes to indicate success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g., a required parameter was missing), and codes in the 5xx range indicate an error with Best Buy's servers.

Status Code | Explanation
------------|------------
**200** | It is all good.
**400** | The request is missing key information or is malformed.
**403** | The allocated call limit is exceeded.
**404** | The requested item cannot be found.
**405** | Particular method not allowed (error will be returned for methods like a POST).
**500, 501, 503** | There is a server error on the Best Buy side.

### Mock Data

*Applies to: Recommendations API*

Best Buy allows you to submit mock data for the Recommendations API Also Viewed and Similar Products endpoints. These endpoints accept mock data and return appropriate responses.

Mock codes supported:

Mock Code | Response
----------|---------
**mock500** | {"errorMessage":"An unexpected error kept us from completing your request","status":500}
**mock418** | {"errorMessage":"I am a teapot, short and stout","status":418}
**mockEmpty** | {"results": []}

### Example

```text
http://api.bestbuy.com/beta/products/mock500/alsoViewed?apiKey=YourAPIKey
```

```json
{"errorMessage":"An unexpected error kept us from completing your request","status":500}
```