## Facets

*Applies to: Products API &#8226; Stores API &#8226; Reviews API &#8226; Categories API*

```text
http://api.bestbuy.com/v1/products(categoryPath.name="All Flat-Panel TVs")?format=json&show=sku,name,salePrice&facet=manufacturer,5&apiKey=YourAPIKey
```

```json
{
  "products": [
  ],
  "facets": {
    "manufacturer": {
      "samsung": 96,
      "lg": 46,
      "sharp": 24,
      "vizio": 23,
      "insignia™": 18
    }
  }
}
```

You can retrieve summary information about the items that are returned by your query by using the `facets` query parameter. For example, to show the 5 manufacturers for which we have the most flat-panel TVs, you can use the following query: