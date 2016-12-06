## Open Box by Category
```shell
curl "https://api.bestbuy.com/beta/products/openBox(categoryId=abcat0400000)?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.openBox('categoryId=abcat0400000)').then(function(data){
  console.log(data);
});
```

> Search all Open Box offers for SKUs that are a part of category **abcat0400000**; *our Cameras & Camcorders category*

```json-doc
{
  "results": [
    {
      "customerReviews": {
        "averageScore": "4.7",
        "count": 145
      },
      "descriptions": {
        "short": "Compatible with most Canon DSLR cameras; stepping motor; 52mm filter size; 11.8\" minimum focus distance"
      },
      "images": {
        "standard": "http://img.bbystatic.com/BestBuy_US/images/products/5729/5729048_sc.jpg"
      },
      "links": {
        "product": "http://api.bestbuy.com/v1/products/5729048.json?apiKey=YourAPIKey",
        "web": "http://www.bestbuy.com/site/canon-ef-40mm-f-2-8-stm-standard-lens-black/5729048.p?id=1218688218296&skuId=5729048&cmp=RMX&ky=2l9pmD3wUBb9cc0tkHo49KBFCMPCiIPY4#tab=buyingOptions",
        "addToCart": "https://api.bestbuy.com/click/-/5729048/cart"
      },
      "names": {
        "title": "Canon - EF 40mm f/2.8 STM Standard Lens - Black"
      },
      "offers": [
        {
          "condition": "excellent",
          "prices": {
            "current": 167.99,
            "regular": 199.99
          }
        }
      ],
      "prices": {
        "current": 199.99,
        "regular": 199.99
      },
      "sku": "5729048"
    }
  ]
}
```

The Open Box by Category endpoint allows you to query all Open Box offers associated with the SKUs in the requested category. If there are no Open Box offers available, the query will return a HTTP 200 response code with an empty result set. You will want to search by Category ID. *It is not possible to search by Category Name at this time.*

We recommend using our [Categories API](#categories-api) to identify the desired category. You can also look at the [Products API](#products-api) category attributes to help identify those categories that you want to use to search Open Box offers.

Use [Pagination](#pagination) to review or retrieve the entire result set. If additional product information is needed you can use the `links.product` attribute to go to the [Products API](#products-api) for a wealth of product information.
