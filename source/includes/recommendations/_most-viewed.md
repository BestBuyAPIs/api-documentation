## Most Popular Viewed
```shell
curl "https://api.bestbuy.com/beta/products/mostViewed(categoryId=abcat0107000)?apiKey=YourAPIKey"
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
  "results": [
    {
      "customerReviews": {
        "averageScore": "4.6",
        "count": 15
      },
      "descriptions": {
        "short": "Lets you connect your Apple&#174; TV to a VGA-enabled projector; converts digital HDMI output to analog VGA signal; 3.5mm audio port; 6' cord"
      },
      "images": {
        "standard": "http://images.bestbuy.com/BestBuy_US/images/products/1740/1740039_sc.jpg"
      },
      "links": {
        "product": "http://api.bestbuy.com/v1/products/1740039.json",
        "addToCart": "http://www.bestbuy.com/site/olspage.jsp?id=pcmcat152200050035&type=category&cmp=RMX&ky=1xrtkOPXgHdxEmF4yQx1jGyxiihDiJ5c2&qvsids=1740039"
        "web": "http://www.bestbuy.com/site/belkin-hdmi-to-vga-adapter/1740039.p?id=1219062507184&skuId=1740039&cmp=RMX&ky=2dN2vg9ikE823Sb2cqFFchnSnf6JkvQna"
      },
      "names": {
        "title": "Belkin - HDMI-to-VGA Adapter"
      },
      "prices": {
        "current": 25.99,
        "regular": 49.99
      },
      "rank": 7,
      "sku": "1740039"
    },
```

The Most Popular Viewed endpoint returns the top ten products, by rank, of the most frequently viewed products on **BESTBUY.COM**. You can also pull this same information by **category** or **subcategory**. To find out additional information about identifying category ids please refer to our [Categories API](#categories-api) documentation. This data for Most Popular Viewed is refreshed every two hours with a maximum accumulation time of 48 hours when determining the top ten products.

_Note: The difference between Trending Products and Most Popular Viewed Products is that Trending Products reflects change in velocity of product views while Most Popular Viewed reflects page views only._

### Most Popular Product Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of a product based on how frequently it is viewed on BESTBUY.COM product detailed page