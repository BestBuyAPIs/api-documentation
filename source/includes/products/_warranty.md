## Warranties

The Warranties endpoint within the Best Buy Products API helps you access a list of warranties associated with a Best Buy product, along with select data associated with the warranty. For more detailed information about a specific warranty, you can look that warranty by SKU in our Products endpoint.

> Search for warranties associated with SKU 5005633

```shell
curl "http://api.bestbuy.com/v1/products/5005633/warranties.json?apiKey=[apiKey]"
```

```json-doc
{
	"skuId": "2745188",
	"shortName": "1-Year Accidental Geek Squad Protection",
	"currentPrice": 149.99,
	"type": "GSP",
	"department": "7",
	"subclass": "210",
	"protectionType": "Accidental",
	"paymentType": "ONETIME",
	"term": "12 months",
	"class": "332"
 }
```

### Common Attributes

Attribute | Description | Type
--------- | ----------- | ----
**protectionType** | Collection of warranties offering specific protections | string
**paymentType** | Collection of warranties available with a specific type of payment | string
**term** | Collection of warranties available for a certain length of time | string

**Note:** Descriptions of other warranty-related attributes, including `skuId`, `shortName`, `currentPrice`, `type`, `department`, `class`, and `subclass` can be found in our core Products documentation.