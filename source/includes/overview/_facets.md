## Facets

```shell
curl 'https://api.bestbuy.com/v1/products(categoryPath.name="All%20Flat-Panel%20TVs")?format=json&show=sku,name,salePrice&facet=manufacturer,5&apiKey=YourAPIKey'
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.products('categoryPath.name="All Flat-Panel TVs"',{show:'sku,name,salePrice',facet:'manufacturer,5'}).then(function(data){
  console.log(data);
});
```

> Show the 5 manufacturers for which we have the most flat-panel TVs.

```json-doc
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

*Applies to: Products API &#8226; Stores API &#8226; Categories API*

You can retrieve summary information about the items that are returned by your query by using the `facets` query parameter.