## Sort

```shell
curl 'https://api.bestbuy.com/v1/products(categoryPath.name="All%20Flat-Screen%20TVs")?format=json&show=sku,name,salePrice&sort=salePrice&apiKey=YourAPIKey'
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('categoryPath.name="All Flat-Screen TVs"',{show:'sku,name,salePrice',sort:'salePrice.asc'}).then(function(data){
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
  "canonicalUrl": "/v1/products(categoryPath.name=All Flat-Screen TVs)?show=sku,name,salePrice&sort=salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 6164904,
      "name": "Insignia™ - 19\" Class - LED - 720p - HDTV",
      "salePrice": 69.99
    },
    {
      "sku": 6260936,
      "name": "Insignia™ - 22\" Class - LED - 1080p - HDTV",
      "salePrice": 69.99
    },
```

*Applies to: Products API &#8226; Stores API &#8226; Categories API*

You can specify the way in which you'd like to have the results sorted by one or more attribute value(s).

+ `sort=attribute.asc` - Sort the results in ascending order of the specified attribute
+ `sort=attribute.dsc` - Sort the results in descending order of the specified attribute
+ `sort=attribute.desc` - Sort the results in descending order of the specified attribute

### Sort by multiple attributes

To sort by multiple attributes, separate the sort terms with commas. The results will initially be sorted by the first attribute in the direction specified. Then, the results within each set will be sorted by the second attribute.

+ `sort=attribute1.asc,attribute2.dsc` - Sort by attribute 1 in ascending order, then by attribute 2 in descending order

### Child attribute sort limitation

The text after the period in the sort parameter is interpreted as the sort direction. Therefore, you cannot sort by a child attribute, as it inherently includes a period in its name.
