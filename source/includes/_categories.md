# Categories API

The Categories API allows you to traverse the many categories on **BESTBUY.COM** and perform product searches based on category names or identifiers. The Categories API also allows you to search for specific product attributes within a specific category (example: TVs less than $100), search using multiple product attributes within a specific category (example: TVs released in the last year that are less than $100) or look at Best Buy taxonomy to better search and present Best Buy product data (example: HD TVs released in the last year that are less than $100).

### Category and Subcategory Paths

As part of the category details, we provide a flat hierarchical path for each category. The `path` is a collection of all the categories in the path, starting with the root.

Similarly, the Subcategories path attributes provide a collection of subcategories for the parent category. Each category can have one or more subcategories associated to it, which are identified by subcategory ids and names.

_The Products API also includes the category path information for each product. For additional information on the category attributes in Products API, refer to [Categorizations.](/documentation/products-api#documentation/products-api-categorizations)_


## Common Attributes

Attribute | Description
--------- | -----------
**name** | Used to find all subcategories (e.g., parents, siblings, children) within a specific category
**id** | Used to find all results within a specific category (e.g., abcat0100000)
**path.name** | Used to find all categories, starting with the root, within a particular path (e.g., electronics)
**path.id** | Used to find all categories, starting with the root, within a particular path (e.g., abcat0014001)
**subCategories.name** | Used to identify subcategories within a specific category (e.g., Kitchen Essentials within Gift Ideas)
**subCategories.id** | Used to identify subcategories within a specific category (e.g., abcat0011002)

## Get All Categories

```shell
curl "http://api.bestbuy.com/v1/categories?format=json&show=id&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.categories('',{show:'id'}).then(function(data){
  console.log(data);
});
```

> The above command returns JSON structured like this:

```json
{
  "from": 1,
  "to": 10,
  "total": 4328,
  "currentPage": 1,
  "totalPages": 433,
  "queryTime": "0.003",
  "totalTime": "0.025",
  "partial": false,
  "canonicalUrl": "/v1/categories?show=id&format=json&apiKey=YourAPIKey",
  "categories": [
    {
      "id": "abcat0010000"
    },
    {
      "id": "abcat0020001"
    },
    {
      "id": "abcat0020002"
    },
    {
      "id": "abcat0020004"
    },
    {
      "id": "abcat0100000"
    }]
}
```

The query to the right will return all the Best Buy product categories. Query is filtered to show only `id`s.

<div></div>

## Search for a Category

```shell
curl "http://api.bestbuy.com/v1/categories(name=Sony%20DSLR%20Camera*)?format=json&show=path&apiKey=YourAPIKey"
```

```javascript
var bby = require('bestbuy')('YourAPIKey');
bby.categories('name=Sony DSLR Camera*',{show:'path'}).then(function(data){
  // The util package is loaded to print the complete object structure
  console.log(require('util').inspect(data, false, null));
});
```

> The above command returns JSON structured like this:

```json
{
  "from": 1,
  "to": 1,
  "total": 1,
  "currentPage": 1,
  "totalPages": 1,
  "queryTime": "0.011",
  "totalTime": "0.014",
  "partial": false,
  "canonicalUrl": "/v1/categories(name=\"Sony DSLR Camera*\")?show=path&format=json&apiKey=YourAPIKey",
  "categories": [
    {
      "path": [
        {
          "id": "cat00000",
          "name": "Best Buy"
        },
        {
          "id": "pcmcat128500050004",
          "name": "Name Brands"
        },
        {
          "id": "cat15063",
          "name": "Sony"
        },
        {
          "id": "pcmcat97200050015",
          "name": "Sony DSLR Camera"
        }
      ]
    }
  ]
}
```

The following query will return the category path for the category `name` specified in the input. In the below example we are requesting the category path for a **Sony DSLR Camera**. The query results are shown in a flat hierarchical path starting from the root. In this case **Best Buy** is the root category which is the first in the path, followed by its child category **Name Brands**, whose child is **Sony**, and its child **Sony DSLR Camera**, which is also the last category in this path.