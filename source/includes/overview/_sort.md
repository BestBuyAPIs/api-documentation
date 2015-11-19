## Sort

*Applies to: Products API &#8226; Stores API &#8226; Reviews API &#8226; Categories API*

You can specify the way in which you'd like to have the results sorted by one or more attribute value(s).

+ `sort=attribute.asc` - Sort the results in ascending order of the specified attribute
+ `sort=attribute.dsc` - Sort the results in descending order of the specified attribute
+ `sort=attribute.desc` - Sort the results in descending order of the specified attribute

### Sort by a single attribute

```text
http://api.bestbuy.com/v1/products(categoryPath.name="All Flat-Panel TVs")?format=json&show=sku,name,salePrice&sort=salePrice.desc&apiKey=YourAPIKey
```

```json
{
  "from": 1,
  "to": 10,
  "total": 307,
  "currentPage": 1,
  "totalPages": 31,
  "queryTime": "0.004",
  "totalTime": "0.031",
  "partial": false,
  "canonicalUrl": "/v1/products(categoryPath.name=All Flat-Panel TVs)?show=sku,name,salePrice&sort=salePrice.desc&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 8908129,
      "name": "Samsung - S9 - 85\" Class (84-1/2\" Diag.) - LED - 4K Ultra HD TV (2160p) - 120Hz - Smart - 3D - HDTV",
      "salePrice": 39999.98
    },
    {
      "sku": 7558048,
      "name": "Sony - BRAVIA 84\" Class (84\" Diag.) - LED - 4K Ultra HD TV (2160p) - 120Hz - Smart - 3D - HDTV",
      "salePrice": 24998.98
    }
```

The example to the right demonstrates how to sort the results from most to least expensive.

<div></div>

### Sort on non-displayed attribute

```text
http://api.bestbuy.com/v1/products(categoryPath.name="All Flat-Panel TVs")?format=json&show=sku,name,salePrice&sort=salesRankMediumTerm.asc&apiKey=YourAPIKey
```

```json
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

You can sort by an attribute you are not displaying. For example, to list all flat-panel TVs with prices, but have the list sorted by the best-selling products over the last week, use:

<div></div>

### Sort by multiple attributes

```text
http://api.bestbuy.com/v1/products(type=game)?format=json&show=sku,name,salePrice,tradeInValue&sort=tradeInValue.desc,platform.asc&apiKey=YourAPIKey
```

```json
{
  "from": 1,
  "to": 10,
  "total": 1864,
  "currentPage": 1,
  "totalPages": 187,
  "queryTime": "0.044",
  "totalTime": "0.067",
  "partial": false,
  "canonicalUrl": "/v1/products(type=\"game\")?show=sku,name,salePrice,tradeInValue&sort=tradeInValue.desc,platform&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 8677151,
      "name": "Infamous: Second Son - PlayStation 4",
      "salePrice": 59.99,
      "tradeInValue": 36.00
    },
    {
      "sku": 2393007,
      "name": "Titanfall - Xbox 360",
      "salePrice": 49.99,
      "tradeInValue": 36.00
    }
```

To sort by multiple attributes, separate the sort terms with commas. The results will initially be sorted by the first attribute in the direction specified. Then, the results within each set will be sorted by the second attribute.

+ `sort=attribute1.asc,attribute2.dsc` - Sort by attribute 1 in ascending order, then by attribute 2 in descending order

For example, to find which games have the highest trade-in values and sort by platform, use the following query:

<div></div>

### Child attribute sort limitation

The text after the period in the sort parameter is interpreted as the sort direction. Therefore, you cannot sort by a child attribute, as it inherently includes a period in its name.
