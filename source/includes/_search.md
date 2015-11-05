## Search
<i>Applies to: <a href="#">Products API</a> &#149; <a href="#">Stores API</a> &#149; <a href="#">Reviews API</a> &#149; <a href="#">Categories API</a></i>

Search consists of one or more terms that generally include an attribute, operator and value. Terms are combined with ampersands <code class="inline-code">&amp;</code> or pipes <code class="inline-code">&#124;</code>. Searches are implemented as part of an HTTP GET request to the deisred Best Buy API. <code class="inline-code">term1&amp;term2</code> - specifies term1 AND term2 <code class="inline-code">term1&#124;term2</code> - specifies term1 OR term2.

Attribute <i>names</i> are case sensitive; attribute <i>values</i> are not.



<strong>Available Operators</strong>

<ul>
	<li><code class="inline-code">&#61;</code> - attribute <strong>equals</strong> a specified value</li>
	<li><code class="inline-code">&#61;&#33;</code> - attribute <strong>does not equal</strong> a specified value</li>
	<li><code class="inline-code">&#62;</code> - attribute <strong>greater than</strong> a specified value</li>
	<li><code class="inline-code">&#60;</code> - attribute <strong>less than</strong> a specified value</li>
	<li><code class="inline-code">&#62;&#61;</code> - attribute <strong>greater than or equal to</strong> a specified value</li>
	<li><code class="inline-code">&#60;&#61;</code> - attribute <strong>less than or equal to</strong> a specified value</li>
	<li><code class="inline-code">in</code> - attribute <strong>list</strong> a specified value</li>
</ul>

<code class="inline-code"></code>


<aside class="notice">
http://api.bestbuy.com/v1/stores(region=ut)?format=json&show=storeId,city,region&apiKey=YourAPIKey
</aside>


&nbsp;

### Search by a single attribute
```text
request:
```
```json
"http://api.bestbuy.com/v1/stores(region=ut)?format=json&show=storeId,city,region&apiKey=YourAPIKey"
```
```text
response:
```
```json
{
  "from": 1,
  "to": 10,
  "total": 10,
  "currentPage": 1,
  "totalPages": 1,
  "queryTime": "0.002",
  "totalTime": "0.007",
  "partial": false,
  "canonicalUrl": "/v1/stores(region=\"ut\")?format=json&show=storeId,city,region&apiKey=YourAPIKey",
  "stores": [
    {
      "storeId": 1402,
      "city": "American Fork",
      "region": "UT"
    },
    {
      "storeId": 773,
      "city": "Orem",
      "region": "UT"
    }
```

Our <a href="#">Products</a>, <a href="#">Stores</a>, <a href="#">Reviews</a> and <a href="#">Categories</a> APIs can be serached by nearly all available attributes. For Example, to find only the stores located in Utah, you can use the query shown to the right.


### Search by all attributes &#40;AND&#41;


```text
request:
```
```json
"http://api.bestbuy.com/v1/products(manufacturer=canon&salePrice<1000)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey"
```
```text
response:
```

```json
{
  "from": 1,
  "to": 10,
  "total": 210,
  "currentPage": 1,
  "totalPages": 21,
  "queryTime": "0.095",
  "totalTime": "0.115",
  "partial": false,
  "canonicalUrl": "/v1/products(manufacturer=\"canon\"&salePrice<1000)?show=sku,name,salePrice&format=json&apiKey=YourAPIKey",
  "products": [
    {
      "sku": 6101087,
      "name": "Canon - 1.9x Tele Converter Lens",
      "salePrice": 99.99
    },
    {
      "sku": 8795075,
      "name": "Canon - 100-Pack 4\" x 6\" Glossy Photo Paper",
      "salePrice": 17.49
    }
```

If you need to serach for the values of more than one attribute and <strong> all</strong> of the attributes must be present, combine them with an ampersand <code class="inline-code">&amp;</code>.