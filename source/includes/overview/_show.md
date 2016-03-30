## Returned Attributes

```shell
curl "https://api.bestbuy.com/v1/products/8880044.json?show=sku,name,salePrice&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products(8880044,{show:'sku,name,salePrice'}).then(function(data){
  console.log(data);
});
```

> Only returns the `sku`, `name` and `salePrice` attributes for products.

```json-doc
{
  "sku": 8880044,
  "name": "Batman Begins (Blu-ray Disc)",
  "salePrice": 7.99
}
```


*Applies to: Products API &#8226; Stores API &#8226; Categories API*

The **`show`** attribute allows you to control which attributes are returned. You can return specific attributes by following the syntax below. To return all attributes, use `show=all`.

If you tried the example query in the Getting Started section, you probably noticed that our Products API returns a lot of attributes for each product. For convenience, we provide a `show` query parameter that allows you to specify just the attributes that you want returned in the response.

### Show All

*Applies to: Products API &#8226; Stores API*

In order to make the API responses more manageable, we don't return all available attributes for those items that contain many (e.g. Products and Stores). In the event that you want to get all of these hidden attributes, you can set `show=all` in the query parameters for the API

For example, the Stores API does not return the `detailedHours` attribute by default. By setting `show=all` you will receive `detailedHours` in the response.
