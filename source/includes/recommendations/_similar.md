## Similar Products
```shell
curl "http://api.bestbuy.com/beta/products/2874502/similar?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('similar',2874502).then(function(data){
  console.log(data);
});
```
```json-doc
{
  "results": [
    {
      "customerReviews": {
        "averageScore": "4.8",
        "count": 6957
      },
      "descriptions": {
        "short": "7.9\" LED-backlit displayA5 chip5.0MP iSight camera with 1080p HD video recordingFaceTime HD camera"
      },
      "images": {
        "standard": "http://images.bestbuy.com/BestBuy_US/images/products/2874/2874502_sc.jpg"
      },
      "links": {
        "product": "http://api.bestbuy.com/v1/products/2874502.json",
        "addToCart": "http://www.bestbuy.com/site/olspage.jsp?id=pcmcat152200050035&type=category&cmp=RMX&ky=1xrtkOPXgHdxEmF4yQx1jGyxiihDiJ5c2&qvsids=2874502"
        "web": "http://www.bestbuy.com/site/apple-ipad-mini-with-wi-fi-16gb-space-gray-black/2874502.p?id=1219080300496&skuId=2874502&cmp=RMX&ky=2dN2vg9ikE823Sb2cqFFchnSnf6JkvQna</url>"
      },
      "names": {
        "title": "Apple® - iPad® mini Wi-Fi - 16GB - Space Gray"
      },
      "prices": {
        "current": 299.99,
        "regular": 299.99
      },
      "rank": 2,
      "sku": "2874502"
    },
```
The Similar Products endpoint can be used to identify similar SKUs based on a SKU. The algorithm used to identify similar SKUs uses attributes like brand, size, price, etc.

_Note: Music and Movies are currently excluded from this endpoint._


### Similar Products Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of the product based on how closely the return product matches the attributes of the original product