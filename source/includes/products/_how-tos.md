## How-Tos
### Search for products based on a list of attribute values
To search for products based on list of attribute values, we recommend using the `in` operator. Most attributes can be used with the `in` operator. The most common attribute used is **SKU**. Using the <code>in</code> operator helps to avoid Query Per Second errors (QPS). Additional information is available in our <a href="http://developer.bestbuy.com/legal#operationalPolicy">Rate Limit</a> section. 

```json
{
 "products": [
    {
      "sku": 43900,
      "name": "Duracell - AAA Batteries (4-Pack)",
      "regularPrice": 5.49,
      "salePrice": 5.49
    },
    {
      "sku": 7150065,
      "name": "Dynex™ - AAA Batteries (48-Pack)",
      "regularPrice": 11.49,
      "salePrice": 11.49
    },
    {
      "sku": 2088495,
      "name": "Energizer - MAX AAA Batteries (8-Pack) - Silver",
      "regularPrice": 6.99,
      "salePrice": 6.99
    }
  ]
}
```