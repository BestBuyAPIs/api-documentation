## Trending Products
```shell
curl "https://api.bestbuy.com/v1/products/trendingViewed(categoryId=abcat0400000)?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('trendingViewed','abcat0400000').then(function(data){
  console.log(data);
});
```

> In this example we request Trending products based on category abcat0400000 otherwise known as "Cameras & Camcorders". When pulling by category you should always use the category id. It is not possible to query by category name. For more information about identifying category ids please refer to our [Categories API](#categories-api) documentation.

```json-doc
{
  "metadata": {
    "context": {
      "canonicalUrl": "https://api.bestbuy.com/v1/products/trendingViewed(categoryId=abcat0400000)?apiKey=YourAPIKey"
    },
    "resultSet": {
      "count": 10
    }
  },
  "results": [
    {
      "sku": "6323759",
      "customerReviews": {
        "averageScore": 4.8,
        "count": 1477
      },
      "descriptions": {
        "short": "24.1-megapixel APS-C format CMOS sensorISO 100-6,400, expandable to 12,800Shooting speeds up to 3 fps9 points of focus1920 x 1080 (Full HD) 30 fps video recording capabilityBuilt-in Wi-Fi, NFC, and GPS capable"
      },
      "images": {
        "standard": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323759_sa.jpg"
      },
      "names": {
        "title": "Canon - EOS Rebel T7 DSLR Video Two Lens Kit with EF-S 18-55mm and EF 75-300mm Lenses"
      },
      "prices": {
        "regular": 549.99,
        "current": 549.99
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/6323759.json?apiKey=YourAPIKey",
        "web": "https://api.bestbuy.com/click/-/6323759/pdp",
        "addToCart": "https://api.bestbuy.com/click/-/6323759/cart"
      },
      "rank": 1
    },
    // ...
  ]
}

```

The Trending Products endpoint returns top ten products, by rank, based on customer views of the **BESTBUY.COM** product detail page over a rolling three hour time period. Trending growth is based on a comparison against the previous three hour time period. You can also pull this same information by **category** or **subcategory**. For more information about identifying category ids please refer to our [Categories API](#categories-api) documentation.

*Note: Minimum of 50 page views/hr required for inclusion. In addition, deep subcategories may not have enough user traffic to generate trending data.*

### Endpoint-Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of a product as compared to the velocity of other trending products. The number rank 1 identifies the most highly trending product while a number 10 rank would identify the 10th trending product