## Also Bought
```shell
curl "https://api.bestbuy.com/v1/products/8880044/alsoBought?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('alsoBought', 8880044).then(function(data){
  console.log(data);
});
```
```json-doc
{
  "metadata": {
    "context": {
      "canonicalUrl": "https://api.bestbuy.com/v1/products/8880044/alsoBought?apiKey=YourAPIKey"
    },
    "resultSet": {
      "count": 10
    }
  },
  "results": [
    {
      "sku": "9124743",
      "customerReviews": {
        "averageScore": 4.9,
        "count": 2003
      },
      "descriptions": {
        "short": null
      },
      "images": {
        "standard": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9124/9124743_sa.jpg"
      },
      "names": {
        "title": "The Dark Knight [WS] [2 Discs] [Blu-ray] [2008]"
      },
      "prices": {
        "regular": 9.99,
        "current": 9.99
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/9124743.json?apiKey=YourAPIKey",
        "web": "https://api.bestbuy.com/click/-/9124743/pdp",
        "addToCart": "https://api.bestbuy.com/click/-/9124743/cart"
      },
      "rank": 1
    },
    // ...
  ]
}

```

The Also Bought Products endpoint can be used to identify the top ten products that were bought along with the originating product. These results are determined based on aggregated customer purchases over the past thirty days.

### Endpoint-Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of the product based on how often it was purchased together with the originating SKU.
