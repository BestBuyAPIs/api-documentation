## Also Viewed
```shell
curl "https://api.bestbuy.com/v1/products/8880044/alsoViewed?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('alsoViewed',8880044).then(function(data){
  console.log(data);
});
```
```json-doc
{
  "metadata": {
    "context": {
      "canonicalUrl": "https://api.bestbuy.com/v1/products/8880044/alsoViewed?apiKey=YourAPIKey"
    },
    "resultSet": {
      "count": 10
    }
  },
  "results": [
    {
      "sku": "6111518",
      "customerReviews": {
        "averageScore": 4.7,
        "count": 1292
      },
      "descriptions": {
        "short": null
      },
      "images": {
        "standard": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6111/6111518_sa.jpg"
      },
      "names": {
        "title": "Batman Begins [4K Ultra HD Blu-ray/Blu-ray] [2005]"
      },
      "prices": {
        "regular": 23.99,
        "current": 23.99
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/6111518.json?apiKey=YourAPIKey",
        "web": "https://api.bestbuy.com/click/-/6111518/pdp",
        "addToCart": "https://api.bestbuy.com/click/-/6111518/cart"
      },
      "rank": 1
    },
    // ...
  ]
}
```

The Also Viewed Products endpoint can be used to identify top ten products that were viewed along with the originating product. These results are determined based on aggregated customer browsing behavior over the past thirty days on **BESTBUY.COM**.

### Endpoint-Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of the product based on how many views a product received after starting with originating SKU. The number 1 rank identifies the highest number of page views an associated product received while looking at originating SKU while the number 10 rank identifies the product with the 10th highest page views while look at same originating product