## How To: Search Using 'or'
```text
http://api.bestbuy.com/v1/products(longDescription=iPhone*|sku=7619002)?show=sku,name&pageSize=15&page=5&apiKey=YourAPIKey&format=json
```
```json
{
  "from": 61,
  "to": 75,
  "total": 2753,
  "currentPage": 5,
  "totalPages": 184,
  "queryTime": "0.010",
  "totalTime": "0.045",
  "partial": false,
  "canonicalUrl": "/v1/products(longDescription=\"iPhone*\"|sku=7619002)?show=sku,name&page=5&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 1752654,
      "name": "Apple - iPhone 4s 8GB Cell Phone - White (AT&T)"
    },
    {
      "sku": 1761045,
      "name": "Apple - iPhone 4s 8GB Cell Phone - White (Verizon Wireless)"
    },
    {
      "sku": 1729354,
      "name": "Apple - iPhone 5c 16GB  Cell Phone - Green (AT&T)"
    },
    {
      "sku": 1752291,
      "name": "Apple - iPhone 5c 16GB Cell Phone - Blue (AT&T)"
    }
  ]
}
```

There are several description attributes by which you can search, including `longDescription`, `shortDescription`, `description` or `name`. There is a single `SKU` attribute to search based on `SKU`. 

In the example below we are searching the `longDescription` for iPhone&#42;. We have appended iPhone with a wildcard `*` so we can search for iPhones with any suffix. We are also looking for any products that have a SKU with a value of **7619002** - note the **or** `|`. Finally, in our example we have updated the number of results that can be returned per page to **15**. Our search will return page **5** of the total **184** pages. Additional information on how to specify the number of results that should be returned per page and which page to return can be found in our Pagination section.

## How To: Search on Reviews 
```text
http://api.bestbuy.com/v1/products(customerReviewAverage>=4&customerReviewCount>100)?show=customerReviewAverage,customerReviewCount,name,sku&format=json&apiKey=YourAPIKey
```
```json
{
 "products": [
    {
      "customerReviewAverage": "4.1",
      "customerReviewCount": 411,
      "name": "Insignia™ - Soundbar Home Theater Speaker System",
      "sku": 4841342
    },
    {
      "customerReviewAverage": "4.3",
      "customerReviewCount": 411,
      "name": "Sunpak - PlatinumPlus 6000PG 61\" Tripod",
      "sku": 1205204
    }
  ]
}
```

To search based on review criteria you can use the `customerReviewAverage` and/or the `customerReviewCount` attributes. You can also limit the product information returned using our `show` functionality. *HINT: You can specify additional attributes in your search or to be included in the response document for most attributes in the Products API.* 

In this example, we are searching for all products that have a customer review average greater than four and a customer review count greater than 100. In addition, we are limiting the product information returned to customer review average, customer review count, name and sku, and forcing a format of json (default is xml when using the Products API).

## How To: Search Using 'in'
```text
http://api.bestbuy.com/v1/products(sku in(43900,2088495,7150065))?apiKey=YourAPIKey
```
```json
{
 "products": [
    {
      "sku": 43900,
      "name": "Duracell - AAA Batteries (4-Pack)",
      "regularPrice": 5.49,
      "salePrice": 5.49
    },
    {
      "sku": 7150065,
      "name": "Dynex™ - AAA Batteries (48-Pack)",
      "regularPrice": 11.49,
      "salePrice": 11.49
    },
    {
      "sku": 2088495,
      "name": "Energizer - MAX AAA Batteries (8-Pack) - Silver",
      "regularPrice": 6.99,
      "salePrice": 6.99
    }
  ]
}
```

To search for products based on list of attribute values, we recommend using the `in` operator. Most attributes can be used with the `in` operator. The most common attribute used is **SKU**. Using the 'in' operator helps to avoid Query Per Second errors (QPS). Additional information is available in our <a href="http://developer.bestbuy.com/legal#operationalPolicy" target="_blank">Rate Limit</a> section. 

## How To: Use Keyword Search
```text
http://api.bestbuy.com/v1/products((search=touchscreen&search=apple)&salePrice<500&categoryPath.id=pcmcat209000050006)?show=name,sku,salePrice&format=json&apiKey=YourAPIKey
```
```json
{
 "products": [
    {
      "name": "Apple® - iPad® mini with Wi-Fi + Cellular - 16GB - (AT&T) - Silver/White",
      "sku": 7476075,
      "salePrice": 379.99
    },
    {
      "name": "Apple® - iPad® mini with Wi-Fi + Cellular - 16GB - (Sprint) - Black",
      "sku": 7009533,
      "salePrice": 375.99
    },
    {
      "name": "Apple® - iPad® mini with Wi-Fi + Cellular - 16GB - (Sprint) - Silver/White",
      "sku": 7009712,
      "salePrice": 379.99
    }
  ]
}
```

Using our **Keyword Search** functionality you can search across several common attributes using a single call. These attributes include:

* `name` 
* `manufacturer`
* `shortDescription`
* `longDescription`
* `features.feature` 
* `details.value`

In the example below we use **Keyword Search** to find all products that contain "touchscreen" and "apple" as part of the **Keyword Search** attributes. We then limit those products to those that are currently selling for less than 500 dollars AND are only within the Computer and Tablet category. *HINT: Use our Categories API to find different categories.*
