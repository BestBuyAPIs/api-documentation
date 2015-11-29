# Search Techniques
*Applies to: Products API &#149; Stores API &#149; Reviews API &#149; Categories API*

Search consists of one or more terms that generally include an attribute, operator and value. Terms are combined with ampersands `&` or pipes `|`. Searches are implemented as part of an HTTP GET request to the deisred Best Buy API. `term1&term2` - specifies term1 AND term2 `term1|term2` - specifies term1 OR term2.

Attribute *names* are case sensitive; attribute *values* are not.


## Available Operators

+ `=` - attribute **equals** a specified value
+ `=!`- attribute **does not equal** a specified value
+ `>` - attribute **greater than** a specified value
+ `<` - attribute **less than** a specified value
+ `>=<` - attribute **greater than or equal to** a specified value
+ `<=` - attribute **less than or equal to** a specified value
+ `in` - search based on a **list** of attribute values



## Search by a single attribute

```shell
curl "https://api.bestbuy.com/v1/stores(region=ut)?format=json&show=storeId,city,region&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.stores('region=ut',{show:'storeId,city,region'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 10,
  "currentPage": 1,
  "totalPages": 1,
  "queryTime": "0.002",
  "totalTime": "0.007",
  "partial": false,
  "canonicalUrl": "/v1/stores(region=\"ut\")?format=json&show=storeId,city,region&apiKey=YourAPIKey",
  "stores": [
    {
      "storeId": 1402,
      "city": "American Fork",
      "region": "UT"
    },
    {
      "storeId": 773,
      "city": "Orem",
      "region": "UT"
    }
```

Our Products, Stores, Reviews and Categories APIs can be searched by nearly all available attributes. For example, to find only the stores located in Utah, you can use the query shown to the right.

## Search by all attributes (AND)

```shell
curl 'https://api.bestbuy.com/v1/products(manufacturer=canon&salePrice<1000)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey'
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('manufacturer=canon&salePrice<1000',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 210,
  "currentPage": 1,
  "totalPages": 21,
  "queryTime": "0.095",
  "totalTime": "0.115",
  "partial": false,
  "canonicalUrl": "/v1/products(manufacturer=\"canon\"&salePrice<1000)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 6101087,
      "name": "Canon - 1.9x Tele Converter Lens",
      "salePrice": 99.99
    },
    {
      "sku": 8795075,
      "name": "Canon - 100-Pack 4\" x 6\" Glossy Photo Paper",
      "salePrice": 17.49
    }
```

If you need to search for the values of more than one attribute and **all** of the attributes must be present, combine them with an ampersand `&`.

## Search by any attributes (OR)

```shell
curl "https://api.bestbuy.com/v1/products(wifiReady=true|wifiBuiltIn=true)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('wifiReady=true|wifiBuiltIn=true',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 500,
  "currentPage": 1,
  "totalPages": 50,
  "queryTime": "0.005",
  "totalTime": "0.030",
  "partial": false,
  "canonicalUrl": "/v1/products(wifiReady=true|wifiBuiltIn=true)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 1012749,
      "name": "Acer - Aspire 11.6 inch Tablet with 120GB Memory",
      "salePrice": 661.98
    },
    {
      "sku": 4255007,
      "name": "Acer - B1-720 7\" Android Tablet - 16GB - Iron Gray",
      "salePrice": 128.98
    }
```

If you want items with **any** of the specified attributes, combine them with a pipe `|`

## Complex Searches

```shell
curl "https://api.bestbuy.com/v1/products(platform=psp&(salePrice<=15|(salePrice<=20&tradeInValue>=10)))?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('platform=psp&(salePrice<=15|(salePrice<=20&tradeInValue>=10))',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
[
  {
    "sku": 7049721,
    "name": "Ape Escape: On the Loose Greatest Hits - PSP",
    "salePrice": 7.99,
    "tradeInValue": 0.00,
    "platform": "PSP"
  },
  {
    "sku": 9335436,
    "name": "Chessmaster: The Art of Learning - PSP",
    "salePrice": 9.99,
    "tradeInValue": 0.00,
    "platform": "PSP"
  },
  {
    "sku": 1450486,
    "name": "Megamind: The Blue Defender - PSP",
    "salePrice": 11.99,
    "tradeInValue": 0.00,
    "platform": "PSP"
  }
]
```

Complex searches can be performed by combining AND `&` and OR `|` operations with parantheses. For example: let's say that you're looking for a Play Station Portable video game `(platform=psp)`. You don't want to spend more than $15 `(salePrice<=15)`. However, because you will trade in the game when you're done, you could spend up to $20 `(saleProce<=20)` - but only if the game's trade-in value is more than $10 `(tradeInValue>10)`.

The search terms for this example can be combined as:

`platform=psp & (salePrice<=15 | (salePrice<=20 & tradeInValue>10))`

## Search by date range

```shell
curl "https://api.bestbuy.com/v1/products(releaseDate>=2014-02-01&releaseDate<=2014-02-28)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('releaseDate>=2014-02-01&releaseDate<=2014-02-28',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 4407,
  "currentPage": 1,
  "totalPages": 441,
  "queryTime": "0.064",
  "totalTime": "0.226",
  "partial": false,
  "canonicalUrl": "/v1/products(releaseDate>=2014-02-01&releaseDate<=2014-02-28)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 24311154,
      "name": "#lovestrock-CD",
      "salePrice": 22.99
    },
    {
      "sku": 23374755,
      "name": "(Untitled) - CD",
      "salePrice": 39.99
    }
```
If you want to find all products that were released February 2014, use this query:

## Search by date relative to today

```shell
curl "https://api.bestbuy.com/v1/products(releaseDate>today)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('releaseDate>today',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 7688,
  "currentPage": 1,
  "totalPages": 769,
  "queryTime": "0.007",
  "totalTime": "0.032",
  "partial": false,
  "canonicalUrl": "/v1/products(releaseDate>today)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 24987148,
      "name": "$Ellebrity (DVD)",
      "salePrice": 19.99
    },
    {
      "sku": 6121399,
      "name": "& Then You Shoot Your Cousin - CD",
      "salePrice": 12.99
    }
```

You can also use the value `today` to represent the current day. If you want to see all the products that were released today, use this query.

## Search for multiple attribute values

```shell
curl "https://api.bestbuy.com/v1/products(categoryPath.id=abcat0901005&color in(white,bisque,stainless-steel))?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('categoryPath.id=abcat0901005&color in(white,bisque,stainless-steel)',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 52,
  "currentPage": 1,
  "totalPages": 6,
  "queryTime": "0.007",
  "totalTime": "0.033",
  "partial": false,
  "canonicalUrl": "/v1/products(categoryPath.id=abcat0901005&color in(\"white\",\"bisque\",\"stainless-steel\"))?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 1614013,
      "name": "Amana - 25.4 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - Stainless-Steel",
      "salePrice": 1099.99
    },
    {
      "sku": 1609858,
      "name": "Amana - 25.4 Cu. Ft. Side-by-Side Refrigerator with Thru-the-Door Ice and Water - White",
      "salePrice": 999.99
    }
```

If you want multiple values of a single attribute, you can specify them individually. For example, if you want to see white, bisque, or stainless-steel side-by-side refrigerators, use this query.

## Wildcards - Value is present

```shell
curl "https://api.bestbuy.com/v1/products(categoryPath.id=abcat0502000&driveCapacityGb=*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('categoryPath.id=abcat0502000&driveCapacityGb=*',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 381,
  "currentPage": 1,
  "totalPages": 39,
  "queryTime": "0.008",
  "totalTime": "0.039",
  "partial": false,
  "canonicalUrl": "/v1/products(categoryPath.id=abcat0502000&driveCapacityGb=*)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 4591017,
      "name": "Acer - 11.6\" Touch-Screen Chromebook - Intel Celeron - 2GB Memory - 32GB Solid State Drive - Moonstone White",
      "salePrice": 299.00
    },
    {
      "sku": 5009309,
      "name": "Acer - 14\" Touch-Screen Laptop - Intel Core i5 - 6GB Memory - 500GB HDD + 20GB Solid State Drive - Silver",
      "salePrice": 740.98
    }
```

You can use the asterisk `*` as a wildcard character. The wildcard can be used to:

+ indicate the presence of attribute values
+ request all values for filtered attributes
+ tokenize the string and represent additional characters

Some attributes apply only to specific items. Even then, because much of this attribute information comes from the manufacturer, not all items of a given type will have values set for that attribute. You can use the wildcard to specify items that have data for a specific attribute.


+ <code>attribute=*</code> - requests items for which the attribute has values
+ <code>attribute!=*</code> - requests items for which the attribute has no value

## Wildcards - Value is NOT present

```shell
curl "https://api.bestbuy.com/v1/products(categoryPath.id=abcat0502000&driveCapacityGb!=*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('categoryPath.id=abcat0502000&driveCapacityGb!=*',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 42,
  "currentPage": 1,
  "totalPages": 5,
  "queryTime": "0.007",
  "totalTime": "0.270",
  "partial": false,
  "canonicalUrl": "/v1/products(categoryPath.id=abcat0502000&driveCapacityGb!=*)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 6941496,
      "name": "Apple® - MacBook Pro with Retina display - 13.3\" Display - 4GB Memory - 128GB Flash Storage",
      "salePrice": 1299.99
    },
    {
      "sku": 6293168,
      "name": "Apple® - MacBook Pro with Retina display - 13.3\" Display - 8GB Memory - 256GB Flash Storage",
      "salePrice": 1499.99
    }
```

This will return results in which there is no value present. In the following example, with the addition of the <code>!</code>, the return result has shifted from Solid State Drive.

## Filtered product attribute

Certain attributes, such as `active=true`, `digital=false`, `preowned=false` or `marketplace=false` inherently filter results.

If your search string is `sku=*`, you will only return active products, not all products. This is the same as specifying `sku=*active=true`. If you want a list of all active and inactive products, you can specify `sku=*&active=*`.

Because `active` is a boolean attribute, `active=*` will return products for which `active` is either true or false. It's the same as `sku=*&(active=true|active=false)`.

*If your search string goes to sku.xml or sku.json these filters are ignored.*

## Wildcards - String

```shell
curl "https://api.bestbuy.com/v1/products(name=classic*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('name=classic*',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

```json-doc
{
  "from": 1,
  "to": 10,
  "total": 6112,
  "currentPage": 1,
  "totalPages": 612,
  "queryTime": "0.007",
  "totalTime": "0.030",
  "partial": false,
  "canonicalUrl": "/v1/products(name=\"classic*\")?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 4606206,
      "name": "#1 Classical Album - Various - CD",
      "salePrice": 14.99
    },
    {
      "sku": 24772085,
      "name": "1 Classic Album &.. - CD",
      "salePrice": 22.99
    }
```

When used as part of a string search, the wildcard performs two functions. First, it tokenizes the string, breaking it into words. Second, it operates as a standard wildcard, matching any set of characters in the tokenized string. The following example illustrates both functions. When searching for a string value, you may want to search for variations on a specific word. For example, if you want to find CDs whose titles include the words Classic, Classics or Classical you would use the following query:

## Limitations

+ You cannot use a wildcard to begin a string search (e.g. <code>(name=*top)</code>); this type of search is extremely resource intensive and doing so will result in a <code>400</code> error.
+ Wildcard with data is valid for strings only. When used alone, the wildcard can represent any data type. When used with other characters, the wildcard can only represent string data. For example, to find Canon products with customer reviews of 4.x, you cannot use <code>(manufacturer=canon&customerReviewAverage=4.*)</code> as the search string. You would have to use a search string like this: <code>(manufacturer=canon&customerReviewAverage>4&customerReviewAverage<5)</code>.

## Keyword Search Function

```shell
curl "https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('search=oven&search=stainless&search=steel',{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

> This example looks for 'stainless steel ovens'.

```json-doc
{
"products": [
    {
      "sku": 6916066,
      "name": "Amana - 30 Self-Cleaning Freestanding Electric Range - Stainless-Steel",
      "salePrice": 584.99
    },
    {
      "sku": 2267329,
      "name": "Applica - 4-Slice Toaster Oven - Stainless Steel",
      "salePrice": 39.99
    }
```

*Applies to: Products API*

Our **Keyword Search** function `(search=searchterm)` allows you to search text accross several common attributes. To search for a term that includes a space, include an `&` ampersand between the words or it will be treated as an `|` or. The **Keyword Search** includes the following attributes:

+ <code>name</code>
+ <code>manufacturer</code>
+ <code>shortDescription</code>
+ <code>longDescription</code>
+ <code>features.feature</code>
+ <code>details.value</code>