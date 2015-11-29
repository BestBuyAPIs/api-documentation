## Sort

```shell
curl 'https://api.bestbuy.com/v1/products(categoryPath.name="All Flat-Panel TVs")?format=json&show=sku,name,salePrice&sort=salesRankMediumTerm.asc&apiKey=YourAPIKey'
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('categoryPath.name="All Flat-Panel TVs"',{show:'sku,name,salePrice',sort:'salesRankMediumTerm.asc'}).then(function(data){
  console.log(data);
});
```

> Lists all flat-panel TVs with prices and sorts by the best-selling products over the last week.

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 307,
  "currentPage": 1,
  "totalPages": 31,
  "queryTime": "0.005",
  "totalTime": "0.035",
  "partial": false,
  "canonicalUrl": "/v1/products(categoryPath.name=All Flat-Panel TVs)?show=sku,name,salePrice&sort=salesRankMediumTerm&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 3356036,
      "name": "Insignia™ - 32\" Class (31-1/2\" Diag.) - LED - 720p - 60Hz - HDTV",
      "salePrice": 179.99
    },
    {
      "sku": 2563138,
      "name": "Insignia™ - 48\" Class (47-5/8\" Diag.) - LED - 1080p - 60Hz - HDTV",
      "salePrice": 399.99
    }
```

*Applies to: Products API &#8226; Stores API &#8226; Reviews API &#8226; Categories API*

You can specify the way in which you'd like to have the results sorted by one or more attribute value(s).

+ `sort=attribute.asc` - Sort the results in ascending order of the specified attribute
+ `sort=attribute.dsc` - Sort the results in descending order of the specified attribute
+ `sort=attribute.desc` - Sort the results in descending order of the specified attribute

### Sort by multiple attributes

To sort by multiple attributes, separate the sort terms with commas. The results will initially be sorted by the first attribute in the direction specified. Then, the results within each set will be sorted by the second attribute.

+ `sort=attribute1.asc,attribute2.dsc` - Sort by attribute 1 in ascending order, then by attribute 2 in descending order

### Child attribute sort limitation

The text after the period in the sort parameter is interpreted as the sort direction. Therefore, you cannot sort by a child attribute, as it inherently includes a period in its name.
