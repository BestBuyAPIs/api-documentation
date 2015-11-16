# Overview

Welcome to the Best Buy Developer API site! Whether you're an API pro, a beginning developer or a Best Buy partner, our extensive API catalog is waiting for your imagination. Our API suite allows you to query <a href="#">Products</a>, <a href="#">Stores</a>, <a href="#">Reviews</a> and much more. Come on in to explore our data, browse descriptions of the available attributes and see examples of working requests and responses.

If this is your first time using our APIs, please check out our <a href="#">Getting Started</a> guide. If you already have your API key, our <a href="#">Search</a> and <a href="#">Response Formats</a> can help you refine your search results.

## Search
*Applies to: <a href="#">Products API</a> &#149; <a href="#">Stores API</a> &#149; <a href="#">Reviews API</a> &#149; <a href="#">Categories API</a>*

Search consists of one or more terms that generally include an attribute, operator and value. Terms are combined with ampersands `&<` or pipes `|`. Searches are implemented as part of an HTTP GET request to the deisred Best Buy API. `term1&term2` - specifies term1 AND term2 `term1|term2` - specifies term1 OR term2.

Attribute *names* are case sensitive; attribute *values* are not.



**Available Operators**


+ `=` - attribute **equals** a specified value
+ `=!`- attribute **does not equal** a specified value
+ `>` - attribute **greater than** a specified value
+ `<` - attribute **less than** a specified value
+ `>=<` - attribute **greater than or equal to** a specified value
+ `<=` - attribute **less than or equal to**a specified value
+ `in` - search based on a **list** of attribute values



### Search by a single attribute

```text
http://api.bestbuy.com/v1/stores(region=ut)?format=json&show=storeId,city,region&apiKey=YourAPIKey
```

```json
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

Our <a href="#">Products</a>, <a href="#">Stores</a>, <a href="#">Reviews</a> and <a href="#">Categories</a> APIs can be serached by nearly all available attributes. For Example, to find only the stores located in Utah, you can use the query shown to the right.

<div></div>

### Search by all attributes (AND);

```text
http://api.bestbuy.com/v1/products(manufacturer=canon&salePrice<1000)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

If you need to serach for the values of more than one attribute and **all**of the attributes must be present, combine them with an ampersand `&`.

<div></div>

### Search by any attributes (OR)

```text
http://api.bestbuy.com/v1/products(wifiReady=true|wifiBuiltIn=true)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

<div></div>

### Complex Searches

```text
http://api.bestbuy.com/v1/products(platform=psp&(salePrice<=15|(salePrice<=20&tradeInValue>=10)))?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

Complex searches can be performed by combining AND `&` and OR `|` operations with parantheses. For example: let's say that you're looking for a Play station Portable video game `(platform=psp)`. YOu don't want to spend more than $15 `(salePrice<=15)`. However, because you will trade in the game when you're done, you could spend up to $20 `(saleProce<=20)` - but only if the game's trade-in value is more than $10 `(tradeInValue>10)`.

The search terms for this example can be combined as:

`platform=psp & (salePrice<=15 | (salePrice<=20 & tradeInValue>10))`

<div></div>

### Search by date range

```text
http://api.bestbuy.com/v1/products(releaseDate>=2014-02-01&releaseDate<=2014-02-28)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

<div></div>

### Search by date relative to today

```text
http://api.bestbuy.com/v1/products(releaseDate>today)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

You can also use the value `today` to represent the current day. If you want to see all the products that were released today, use this query:

<div></div>

### Search for multiple attribute values

```text
http://api.bestbuy.com/v1/products(categoryPath.id=abcat0901005&color in(white,bisque,stainless-steel))?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

If you want multiple values of a single attribute, you can specify them individually. For example, if you want to see white, bisque, or stainless-steel side-by-side refrigerators, use this query:

<div></div>

### Wildcards - Value is present

```text
http://api.bestbuy.com/v1/products(categoryPath.id=abcat0502000&driveCapacityGb=*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

You can use the asterisk `*` as a wildcard character. The widecard can be used to:

+ indicate the presence of attribute values
+ request all values for filtered attributes
+ tokenize the string and represent additional characters

Some attributes apply only to specific items. Even then, because much of this attribute information comes from the manufacturer, not all items of a given type will have values set for that attribute. You can use the wildcard to specify items that have data for a specific attribute.


+ <code>attribute=*</code> - requests items for which the attribute has values
+ <code>attribute!=*</code> - requests items for which the attribute has no value


<div></div>

### Wildcards - Value is NOT present

```text
http://api.bestbuy.com/v1/products(categoryPath.id=abcat0502000&driveCapacityGb!=*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

<div></div>

### Filtered product attribute

Certain attributes, such as `active=true`, `digital=false`, `preowned=false` or `marketplace=false` inherently filter results.

If your search string is `sku=*`, you will only return active products, not all products. This is the same as specifying `sku=*active=true`. If you want a list of all active and inactive products, you can specify `sku=*&active=*`.

Because `active` is a boolean attribute, `active=*` will return products for which `active` is either true or false. It's the same as `sku=*&(active=true|active=false)`.

*If your search string goes to sku.xml or sku.json these filters are ignored.*

<div></div>

### Wildcards - String

```text
http://api.bestbuy.com/v1/products(name=classic*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

#### Limitations

+ You cannot use a wildcard to begin a string search (e.g. <code>(name=*top)</code>); this type of search is extremely resource intensive and doing so will result in a <code>400</code> error.
+ Wildacrd with data is valid for strings only. When used alone, the wildcard can represent any data type. When used with other characters, the wildcard can only represent string data. For example, to find Canon products with customer reviews of 4.x, you cannot use <code>(manufacturer=canon&customerReviewAverage=4.*)</code> as the search string. You would have to use a search string like this: <code>(manufacturer=canon&customerReviewAverage>4&customerReviewAverage<5)</code>.

<div></div>

### Keyword Search Function

```text
http://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
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

*Applies to: <a href="#">Products API</a>*

Our **Keyword Search** function (search=searchterm) allows you to search text accross several common attributes. To search for a term thtat includes a space, include an `&` ampersand between the words or it will be treated as an `|` or. The **Keyword Search** includes the following attributes:

+ <code>name</code>
+ <code>manufacturer</code>
+ <code>shortDescription</code>
+ <code>longDescription</code>
+ <code>features.feature</code>
+ <code>details.value</code>

Here is an example that loos for 'stainless steel ovens':

## Response Format

Responses can be returned in either **JSON** or **XML**.

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a>*

To request a single item, such as a specific product, indicate the desired response format with the extension added after the item's identifier. For example, `/products/8880044.json`.

To request a collection of items, such as all the products in our catalog, the desired response format is specified in the `format` query parameter. An example of this can be seen in the <a href="#">Retrieving Collections</a> section. If no format is specified then xml will be returned.

*Applies to: <a href="#"> Recommendations API</a>*

When using any of the endpoints in the <a href="#">Recommendations API</a> the response format returned will be json. The **XML** format is not supported for the <a href="#">Recommendations API</a> endpoints. You can specify the format using `/6534009/alsoViewed.json` or not specify a format like `/6534009/alsoViewed`.

### JSONP

```javascript
$.ajax({
    method: 'GET',
    url: '//api.bestbuy.com/v1/products(name=Batman*)',
    data: {
        format: 'json',
        apiKey: APIKEY
    },
    cache: true, // necessary because our API rejects queries with unrecognized query parameters, such as the underscore injected when this isn't included
    dataType: 'jsonp'
}).always(
    function(result) {
        var output = "";
        if (!result.error && result.products) {
            output = "Products:\n";
            result.products.forEach(function(product) {
                output += "\t* " + product.name + "\n";
            });
        } else {
            output = "Unable to access products (see browser console for more information)";
            console.log(result);
        }
        alert(output);
    }
);
```

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a> &#8226; <a href="#">Recommendations API</a> &#8226; <a href="#">Buying Options API</a>*

To perform cross-site scripting and work with <a href="#">browsers that do not support CORS</a>, use **JSONP** to load our API onto your pages.

Shown to the right is a javascript example, leveraging jQuery's JSONP support, that displays product names by the sample query from the Basic Search section.


## Show

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a>*

The Show attribute allows you to control which attributes are returned. You can return specific attributes by following the syntax in **Show Only** description. To return all attributes follow the syntax in the **Show All** description.

### Show Only

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a>*

If you tried the example query in the <a href="#">Getting Started</a> section, you probably noticed that our <a href="#">Products API</a> returns a lot of attributes for each product. For convenience, we provide a `show` query parameter that allows you to specify just the attributes that you want returned in the response.

For example, if you are only interested in the product's `sku`, `name` and `salePrice`, you can list these attributes in the show parameter.

#### Products Response `show=sku,name,salePrice`

```text
http://api.bestbuy.com/v1/products/8880044.json?show=sku,name,salePrice&apiKey=YourAPIKey
```

```json
{
  "sku": 8880044,
  "name": "Batman Begins (Blu-ray Disc)",
  "salePrice": 7.99
}
```

<div></div>

### Show All

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a>*

In order to make the API responses more manageable, we don't return all available attributes for those items that contain many (e.g. <a href="#">Products</a> and <a href="#">Stores</a>. In the event that you want to use one of these hidden attributes, you can set `show=all` in the query parameters for the API

For example, the <a href="#">Stores API</a> does not return the `detailedHours` attribute by default. By setting `show=all` you will receive `detailedHours` in the response. Both the default response and the response containing `detailedHours` are provided below for store 2387.

#### Stores Response - Default Attributes Only

```text
http://api.bestbuy.com/v1/stores/2387.json?apiKey=YourAPIKey
```

```json
{
  "storeId": 2387,
  "name": "Best Buy Mobile - Richfield",
  "longName": "Best Buy Mobile - Richfield",
  "address": "6601 Nicollet Ave S",
  "city": "Richfield",
  "region": "MN",
  "fullPostalCode": "55423",
  "country": "US",
  "lat": 44.882942,
  "lng": -93.2775,
  "hours": "Mon: 11-8; Tue: 11-8; Wed: 11-8; Thurs: 11-8; Fri: 11-8; Sat: 11-7; Sun: 11-6",
  "hoursAmPm": "Mon: 11am-8pm; Tue: 11am-8pm; Wed: 11am-8pm; Thurs: 11am-8pm; Fri: 11am-8pm; Sat: 11am-7pm; Sun: 11am-6pm",
  "gmtOffset": -6,
  "services": [
    {
      "service": "Best Buy Mobile Specialty Store"
    },
    {
      "service": "Electronics Recycling"
    },
    {
      "service": "Samsung Experience Shop"
    }
  ],
  "phone": "612-866-0957",
  "postalCode": "55423"
}
```

<div></div>

#### Stores Response `show=all`

```text
http://api.bestbuy.com/v1/stores/2387.json?show=all&apiKey=YourAPIKey
```

```json
{
  "storeId": 2387,
  "name": "Best Buy Mobile - Richfield",
  "longName": "Best Buy Mobile - Richfield",
  "address": "6601 Nicollet Ave S",
  "city": "Richfield",
  "region": "MN",
  "fullPostalCode": "55423",
  "country": "US",
  "lat": 44.882942,
  "lng": -93.2775,
  "hours": "Mon: 11-8; Tue: 11-8; Wed: 11-8; Thurs: 11-8; Fri: 11-8; Sat: 11-7; Sun: 11-6",
  "hoursAmPm": "Mon: 11am-8pm; Tue: 11am-8pm; Wed: 11am-8pm; Thurs: 11am-8pm; Fri: 11am-8pm; Sat: 11am-7pm; Sun: 11am-6pm",
  "gmtOffset": -6,
  "services": [
    {
      "service": "Best Buy Mobile Specialty Store"
    },
    {
      "service": "Electronics Recycling"
    },
    {
      "service": "Samsung Experience Shop"
    }
  ],
  "phone": "612-866-0957",
  "postalCode": "55423",
  "detailedHours": [
    {
      "day": "Sunday",
      "date": "2014-04-27",
      "open": "11:00",
      "close": "18:00"
    }
```

Notice that the `detailedHours` are included at the bottom of the response in this example.

## Sort

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a>*

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

## Facets

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a>*

```text
http://api.bestbuy.com/v1/products(categoryPath.name="All Flat-Panel TVs")?format=json&show=sku,name,salePrice&facet=manufacturer,5&apiKey=YourAPIKey
```

```json
{
  "products": [
  ],
  "facets": {
    "manufacturer": {
      "samsung": 96,
      "lg": 46,
      "sharp": 24,
      "vizio": 23,
      "insignia™": 18
    }
  }
}
```

You can retrieve summary information about the items that are returned by your query by using the `facets` query parameter. For example, to show the 5 manufacturers for which we have the most flat-panel TVs, you can use the following query:

## Pagination

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a> &#8226; <a href="#">Recommendations API</a> &#8226; <a href="#">Buying Options API</a>*

Even if you've trimmed down the number of products returned by making use of <a href="#">search</a>, many of our APIs have the potential to return lots of results. To make these large responses more manageable, we break them into pages. By default, we include 10 results per page, but you can ask for up to 100 per page by making use of the `pageSize` parameter. Use the `page` parameter to choose which page of results you'd like returned.

Here is an explanation of the meta data when more than one page is available

Name | Description | Additional Details
-----|-------------|-------------------
canonicalURL | the non-server part of the query | 
currentPage | the page being returned | referred to as "page.current" for the REcommendations and Buying Options APIs
from | the index of the first item returned on the current page | not available on the Recommendations and Buying Options APIs
size | the number of results returned per page | only available on the Recommendations and Buying Options APIs
to | the index of the last item returned on the current page | not available on the Recommendations and Buying Options APIs
total | the total number of items returned by the query | referred to as "resultSet.count" for the Recommendations and Buying Options APIs
totalPages | the number of pages required to list all items | refereed to as "page.total" for the Recommendations and Buying Options APIs

### Example response header for Products, Stores, Reviews and Category APIs

```text
http://api.bestbuy.com/v1/products(type=Movie)?format=json&show=sku,name,salePrice&pageSize=3&page=1000&apiKey=YourAPIKey
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

*In this example we ask for the 1000th page of results and for each page to contain just 3 products*

<div></div>

### Example response header for the Recommendations and Buying Options APIs

```text
http://api.bestbuy.com/beta/products/openBox?apiKey=YourAPIKey&page=2&pageSize=15
```

```json
{
  "metadata": {
    "resultSet": {
      "count": 2040
    },
    "context": {
      "canonicalUrl": "http://api.bestbuy.com/beta/products/openBox?apiKey=YourAPIKey&page=2&pageSize=15"
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

## Retrieving Collections

























