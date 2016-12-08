# Warranties

The Warranties endpoint within the Best Buy Products API helps you access a list of warranties associated with a specific Best Buy product, along with select data associated with the warranty (e.g., SKU for the warranty, shortName, price, type, dept/class/subclass, term). For more information (such as skuId, shortName, currentPrice, type, department, subclass, and class), you can look up a specific warranty by SKU in our Products endpoint.

## Common Attributes

Attribute | Description
--------- | -----------
**protectionType** | Collection of warranties offering specific protections 
**paymentType** | Collection of warranties available with a specific type of payment
**term** | Collection of warranties available for a certain length of time

## Example
> Search for warranties associated with SKU 5005633

```shell
curl "http://api.bestbuy.com/v1/products/5005633/warranties.json?apiKey=[apiKey]"
```

```json-doc
{{
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
},
}
```