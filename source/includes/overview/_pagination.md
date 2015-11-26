## Pagination

*Applies to: Products API &#8226; Stores API &#8226; Reviews API &#8226; Categories API &#8226; Recommendations API &#8226; Buying Options API*

Even if you've trimmed down the number of products returned by making use of search, many of our APIs have the potential to return lots of results. To make these large responses more manageable, we break them into pages. By default, we include 10 results per page, but you can ask for up to 100 per page by making use of the `pageSize` parameter. Use the `page` parameter to choose which page of results you'd like returned.

Here is an explanation of the meta data when more than one page is available

Name | Description | Additional Details
-----|-------------|-------------------
**canonicalURL** | the non-server part of the query |
**currentPage** | the page being returned | referred to as "page.current" for the Recommendations and Buying Options APIs
**from** | the index of the first item returned on the current page | not available on the Recommendations and Buying Options APIs
**size** | the number of results returned per page | only available on the Recommendations and Buying Options APIs
**to** | the index of the last item returned on the current page | not available on the Recommendations and Buying Options APIs
**total** | the total number of items returned by the query | referred to as "resultSet.count" for the Recommendations and Buying Options APIs
**totalPages** | the number of pages required to list all items | referred to as "page.total" for the Recommendations and Buying Options APIs

### Example response header for Products, Stores, Reviews and Category APIs

```text
https://api.bestbuy.com/v1/products(type=Movie)?format=json&show=sku,name,salePrice&pageSize=3&page=1000&apiKey=YourAPIKey
```

```json
{
  "from": 2998,
  "to": 3000,
  "total": 101727,
  "currentPage": 1000,
  "totalPages": 33909,
  "queryTime": "0.039",
  "totalTime": "0.048",
  "partial": false,
  "canonicalUrl": "/v1/products(type=\"Movie\")?show=sku,name,salePrice&format=json&pageSize=3&page=1000&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 17215997,
      "name": "AC/DC: Rock Power (DVD)",
      "salePrice": 11.99
    },
    {
      "sku": 23003222,
      "name": "AC/DC: Rocks Detroit (DVD)",
      "salePrice": 10.99
    }
```

*In this example we ask for the 1000th page of results and for each page to contain just 3 products.*

<div></div>

### Example response header for the Recommendations and Buying Options APIs

```text
https://api.bestbuy.com/beta/products/openBox?apiKey=YourAPIKey&page=2&pageSize=15
```

```json
{
  "metadata": {
    "resultSet": {
      "count": 2040
    },
    "context": {
      "canonicalUrl": "https://api.bestbuy.com/beta/products/openBox?apiKey=YourAPIKey&page=2&pageSize=15"
    },
    "page": {
      "current": 1,
      "size": 10,
      "total": 204
    }
  },
  "results": [
    {
      "customerReviews": {
        "averageScore": "4.4",
        "count": 260
      },
      "descriptions": {
        "short": "Google Chrome 64-bitTechnical details: Intel&#174; Celeron&#174; processor; 11.6\" display; 2GB memory; 16GB eMMC flash memorySpecial features: Bluetooth; HDMI outputNote: DVD/CD drive not included"
      }
```