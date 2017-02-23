## Cursor Marks

```shell
curl 'https://api.bestbuy.com/v1/products(type=HardGood)?format=json&show=sku,name,salePrice&pageSize=100&cursorMark=*&apiKey=YourAPIKey'
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('type=HardGood',{show:'sku,name,salePrice',pageSize:100,cursorMark=*}).then(function(data){
  console.log(data);
});
```

> In this example we ask for the first page of results and for each page to contain 100 products.

```json-doc
{
  "nextCursorMark": "AoNeDQhAhoq2MnByb2R1Y3RfMTE0NjYzNV91cw==",
  "total": 49911,
  "totalPages": 500,
  "queryTime": "0.037",
  "totalTime": "0.362",
  "partial": false,
  "canonicalUrl": "/v1/products(type=\"HardGood\")?show=sku,name,salePrice&pageSize=100&cursorMark=*&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 5477500,
      "name": "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
      "salePrice": 39.99
    },
    {
      "sku": 4397400,
      "name": "Google - Chromecast - Black",
      "salePrice": 35
    },
```

*Applies to: Products API &#8226; Stores API &#8226; Categories API*

With large result sets - e.g., query sets with more than 10 pages of results - we recommend you use the `cursorMark` parameter to walk through your results. You can use `cursorMark` to walk through the full product or store catalog, deltas since you last queried for active products, or any other query result. The `cursorMark` works a lot like a bookmark, keeping track of what subset of items are currently shown in your result set and how to get to the next subset of items. 

To use the `cursorMark` with your result set, add `cursorMark=*` to your query parameters. A `nextCursorMark` parameter will be included in the metadata that you will use to walk through the full result set. After the initial result, replace the asterisk `*` with the `nextCursorMark` value noted in the current metadata to move to the next subset of results. For each subset, a fresh hash value will be presented. When you reach the end of the cursor marks, you will receive an empty result. 

**Tip:** To query for updates or deltas since you last walked through the result set you can use the `itemUpdateDate` attribute. To ensure that your query results include changes to a product's active/inactive status, add `active=*` to your query parameters. For example: `.../v1/products(itemUpdateDate>2017-02-06T16:00:00&active=*)?format=json&pageSize=100&cursorMark=*&apiKey=YOUR_API_KEY`

Here is an explanation of the meta data when more than one subset is available:

Name | Description | Additional Details
-----|-------------|-------------------
**canonicalURL** | the non-server part of the query |
**cursorMark** | a hash indicating the current location within the result set | add `cursorMark=*` to your query to get the first subset of results
**nextCursorMark** | a hash indicating the start of the next subset of items in your result set | we recommend only moving forward through your result sets using `cursorMark`
**total** | the total number of items returned by the query | 
**totalPages** | the number of subsets of items in the full query result | can be used as an approximation of the number of cursor marks you will need to iterate through to walk the entire query result