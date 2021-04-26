## Most Popular Viewed
```shell
curl "https://api.bestbuy.com/v1/products/mostViewed(categoryId=abcat0107000)?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('mostViewed','abcat0107000').then(function(data){
  console.log(data);
});
```

> Request Most Viewed products based on category abcat0107000 otherwise known as "TV & Home Theater Accessories." When pulling by category you should always use the category id. It is not possible to query by category name.

```json-doc
{
  "metadata": {
    "context": {
      "canonicalUrl": "https://api.bestbuy.com/v1/products/mostViewed(categoryId=abcat0107000)?apiKey=YourAPIKey"
    },
    "resultSet": {
      "count": 10
    }
  },
  "results": [
    {
      "sku": "5852832",
      "customerReviews": {
        "averageScore": 4.3,
        "count": 4816
      },
      "descriptions": {
        "short": "Compatible with more than 270,000 entertainment device brands; replaces up to 10 remotes; programmable buttons"
      },
      "images": {
        "standard": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5852/5852832_sa.jpg"
      },
      "names": {
        "title": "Logitech - Harmony 665 10-Device Universal Remote - Black"
      },
      "prices": {
        "regular": 79.99,
        "current": 79.99
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/5852832.json?apiKey=YourAPIKey",
        "web": "https://api.bestbuy.com/click/-/5852832/pdp",
        "addToCart": "https://api.bestbuy.com/click/-/5852832/cart"
      },
      "rank": 1
    },
    // ...
  ]
}

```

The Most Popular Viewed endpoint returns the top ten products, by rank, of the most frequently viewed products on **BESTBUY.COM**. You can also pull this same information by **category** or **subcategory**. To find out additional information about identifying category ids please refer to our [Categories API](#categories-api) documentation. This data for Most Popular Viewed is refreshed every two hours with a maximum accumulation time of 48 hours when determining the top ten products.

_Note: The difference between Trending Products and Most Popular Viewed Products is that Trending Products reflects change in velocity of product views while Most Popular Viewed reflects page views only._

### Endpoint-Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of a product based on how frequently it is viewed on BESTBUY.COM product detailed page