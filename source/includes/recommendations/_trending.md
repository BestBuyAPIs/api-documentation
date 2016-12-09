## Trending Products
```shell
curl "https://api.bestbuy.com/beta/products/trendingViewed(categoryId=abcat0400000)?apiKey=YourAPIKey"
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
  "results": [
    {
      "customerReviews": {
        "averageScore": "4.9",
        "count": 309
      },
      "descriptions": {
        "short": "20.2-megapixel APS-C CMOS sensorShooting speeds up to 7 fpsBuilt-in Wi-Fi"
      },
      "images": {
        "standard": "http://img.bbystatic.com/BestBuy_US/images/products/8896/8896132_sc.jpg"
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/8896132.json?apiKey=YourAPIKey",
        "web": "http://www.bestbuy.com/site/canon-eos-70d-dslr-camera-with-18-135mm-is-stm-lens-black/8896132.p?id=1218941181224&skuId=8896132&cmp=RMX&ky=2l9pmD3wUBb9cc0tkHo49KBFCMPCiIPY4",
        "addToCart": "http://www.bestbuy.com/site/olspage.jsp?id=pcmcat152200050035&type=category&cmp=RMX&ky=2l9pmD3wUBb9cc0tkHo49KBFCMPCiIPY4&qvsids=8896132"
      },
      "names": {
        "title": "Canon - EOS 70D DSLR Camera with 18-135mm IS STM Lens - Black"
      },
      "prices": {
        "current": 1449.99,
        "regular": 1549.99
      },
      "rank": 6,
      "sku": "8896132"
    },
```

The Trending Products endpoint returns top ten products, by rank, based on customer views of the **BESTBUY.COM** product detail page over a rolling three hour time period. Trending growth is based on a comparison against the previous three hour time period. You can also pull this same information by **category** or **subcategory**. For more information about identifying category ids please refer to our [Categories API](#categories-api) documentation.

*Note: Minimum of 50 page views/hr required for inclusion. In addition, deep subcategories may not have enough user traffic to generate trending data.*

### Trending Products Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of a product as compared to the velocity of other trending products. The number rank 1 identifies the most highly trending product while a number 10 rank would identify the 10th trending product