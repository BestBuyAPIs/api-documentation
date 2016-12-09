## Also Viewed
```shell
curl "https://api.bestbuy.com/beta/products/5747275/alsoViewed?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.recommendations('alsoViewed',5747275).then(function(data){
  console.log(data);
});
```
```json-doc
{
  "results": [
    {
      "customerReviews": {
        "averageScore": null,
        "count": null
      },
      "descriptions": {
        "short": null
      },
      "images": {
        "standard": "http://images.bestbuy.com/BestBuy_US/images/products/nonsku/default_movies_l.jpg"
      },
      "links": {
        "product": "https://api.bestbuy.com/v1/products/5747275.json",
        "addToCart": "http://www.bestbuy.com/site/olspage.jsp?id=pcmcat152200050035&type=category&cmp=RMX&ky=1xrtkOPXgHdxEmF4yQx1jGyxiihDiJ5c2&qvsids=5747275",
        "web": "http://www.bestbuy.com/site/batman-begins-blu-ray-disc/8880044.p?id=1484301&skuId=8880044&cmp=RMX&ky=1xrtkOPXgHdxEmF4yQx1jGyxiihDiJ5c2"
      },
      "names": {
        "title": "Batman Begins (2 Disc) (Ultraviolet Digital Copy) (Blu-ray Disc)"
      },
      "prices": {
        "current": 9.99,
        "regular": 9.99
      },
      "rank": 3,
      "sku": "5747275"
    }
  ]
}
```

The Also Viewed Products endpoint can be used to identify top ten products that were viewed along with the originating product. These results are determined based on aggregated customer browsing behavior over the past thirty days on **BESTBUY.COM**.

### Also Viewed Product Specific Attributes

Attribute | Description
--------- | -----------
**rank** | The rank of the product based on how many views a product received after starting with originating SKU. The number 1 rank identifies the highest number of page views an associated product received while looking at originating SKU while the number 10 rank identifies the product with the 10th highest page views while look at same originating product