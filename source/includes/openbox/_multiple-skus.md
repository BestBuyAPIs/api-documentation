## Open Box by List of SKUs
```shell
curl "https://api.bestbuy.com/beta/products/openBox(sku in(5729048,7528703,4839357,8153056,8610161))?apiKey=YourAPIKey"
```
```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.openBox('sku in(5729048,7528703,4839357,8153056,8610161)').then(function(data){
  console.log(data);
});
```

> Returns available Open Box offers for 5 different SKUs

```json-doc
{
  "metadata": {
    "resultSet": {
      "count": 6
    },
    "context": {
      "canonicalUrl": "http://api.bestbuy.com/beta/products/openBox(sku%20in(5729048,7528703,4839357,8153056,8610161,4591017))?apiKey=YourAPIKey"
    }
  },
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
        "web": "http://www.bestbuy.com/site/acer-11-6-chromebook-intel-celeron-2gb-memory-16gb-emmc-flash-memory-moonstone-white/8610161.p?id=1219351773817&skuId=8610161&cmp=RMX&ky=2l9pmD3wUBb9cc0tkHo49KBFCMPCiIPY4#tab=buyingOptions"
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
    },
```

The Open Box by List of SKUs endpoint allows you to query all Open Box offers associated with a list of SKUs. The endpoint will return any available Open Box offers. If there is not an offer for a particular SKU in the list, that SKU will not be represented in the results. If there are no offers for any of the SKUs in the list, the query will return an HTTP 200 (OK) response code with an empty result set.

*NOTE: This endpoint accepts and returns at most 100 SKUs. The results are not paginated. Expect an HTTP 400 (Bad Request) response if you submit more than 100 SKUs.*