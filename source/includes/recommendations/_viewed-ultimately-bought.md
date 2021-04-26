## Viewed Ultimately Bought
```shell
curl "https://api.bestbuy.com/v1/products/8880044/viewedUltimatelyBought?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('viewedUltimatelyBought', 8880044).then(function(data){
  console.log(data);
});
```
```json-doc
{
  "metadata": {
    "context": {
      "canonicalUrl": "https://api.bestbuy.com/v1/products/8880044/viewedUltimatelyBought?apiKey=YourApiKey"
    },
    "resultSet": {
      "count": 10
    }
  },
  "results": [
    {
      "sku": "3921114",
      "customerReviews": {
        "averageScore": 4.7,
        "count": 2113
      },
      "descriptions": {
        "short": null
      },
      "images": {
        "standard": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3921/3921114_sa.jpg"
      },
      "names": {
        "title": "The Wolf of Wall Street [2 Discs] [Blu-ray/DVD] [Includes Digital Copy] [2013]"
      },
      "prices": {
        "regular": 4.99,
        "current": 4.99
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/3921114.json?apiKey=YourAPIKey",
        "web": "https://api.bestbuy.com/click/-/3921114/pdp",
        "addToCart": "https://api.bestbuy.com/click/-/3921114/cart"
      },
      "rank": 1
    },
    // ...
  ]
}
```

The Viewed Ultimately Bought Products endpoint can be used to identify the top ten products that were bought after having viewed the originating product. These results are determined based on aggregated customer purchases and views over the past thirty days.

### Endpoint-Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of the product based on how often it was purchased after having viewed the originating SKU.
