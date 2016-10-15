## Open Box Single SKU
```shell
curl "https://api.bestbuy.com/beta/products/8610161/openBox?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.openBox(8610161).then(function(data){
  console.log(data);
});
```
> Search all open box offers for SKU **8610161**. We can see there are at least two offers *excellent* and *certified*.

```json-doc
{
  "results": [
    {
      "customerReviews": {
        "averageScore": "4.5",
        "count": 471
      },
      "descriptions": {
        "short": "Google Chrome 64-bitTechnical details: Intel&#174; Celeron&#174; processor; 11.6\" display; 2GB memory; 16GB eMMC flash memorySpecial features: Bluetooth; HDMI outputNote: DVD/CD drive not included"
      },
      "images": {
        "standard": "http://img.bbystatic.com/BestBuy_US/images/products/8610/8610161_rc.jpg"
      },
      "links": {
        "product": "http://api.bestbuy.com/v1/products/8610161.json?apiKey=YourAPIKey",
        "web": "http://www.bestbuy.com/site/acer-11-6-chromebook-intel-celeron-2gb-memory-16gb-emmc-flash-memory-moonstone-white/8610161.p?id=1219351773817&skuId=8610161&cmp=RMX&ky=2l9pmD3wUBb9cc0tkHo49KBFCMPCiIPY4#tab=buyingOptions",
        "addToCart": "https://api.bestbuy.com/click/-/8610161/cart"
      },
      "names": {
        "title": "Acer - 11.6\" Chromebook - Intel Celeron - 2GB Memory - 16GB eMMC Flash Memory - Moonstone White"
      },
      "offers": [
        {
          "condition": "excellent",
          "prices": {
            "current": 175.99,
            "regular": 199
          }
        },
        {
          "condition": "certified",
          "prices": {
            "current": 187.99,
            "regular": 199
          }
        }
      ],
      "prices": {
        "current": 199,
        "regular": 199
      },
      "sku": "8610161"
    }
}
```
The Open Box Single SKU endpoint allows you to query by SKU all Open Box offers associated with a SKU. If there are no Open Box offers available, the query will return a HTTP 200 response code with an empty result set.
