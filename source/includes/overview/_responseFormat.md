## Response Format

Responses can be returned in either **JSON** or **XML**.

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a>*

To request a single item, such as a specific product, indicate the desired response format with the extension added after the item's identifier. For example, `/products/8880044.json`.

To request a collection of items, such as all the products in our catalog, the desired response format is specified in the `format` query parameter. An example of this can be seen in the <a href="#">Retrieving Collections</a> section. If no format is specified then xml will be returned.

*Applies to: <a href="#"> Recommendations API</a>*

When using any of the endpoints in the <a href="#">Recommendations API</a> the response format returned will be json. The **XML** format is not supported for the <a href="#">Recommendations API</a> endpoints. You can specify the format using `/6534009/alsoViewed.json` or not specify a format like `/6534009/alsoViewed`.

### JSONP

```javascript
$.ajax({
    method: 'GET',
    url: '//api.bestbuy.com/v1/products(name=Batman*)',
    data: {
        format: 'json',
        apiKey: APIKEY
    },
    cache: true, // necessary because our API rejects queries with unrecognized query parameters, such as the underscore injected when this isn't included
    dataType: 'jsonp'
}).always(
    function(result) {
        var output = "";
        if (!result.error && result.products) {
            output = "Products:\n";
            result.products.forEach(function(product) {
                output += "\t* " + product.name + "\n";
            });
        } else {
            output = "Unable to access products (see browser console for more information)";
            console.log(result);
        }
        alert(output);
    }
);
```

*Applies to: <a href="#">Products API</a> &#8226; <a href="#">Stores API</a> &#8226; <a href="#">Reviews API</a> &#8226; <a href="#">Categories API</a> &#8226; <a href="#">Recommendations API</a> &#8226; <a href="#">Buying Options API</a>*

To perform cross-site scripting and work with <a href="#">browsers that do not support CORS</a>, use **JSONP** to load our API onto your pages.

Shown to the right is a javascript example, leveraging jQuery's JSONP support, that displays product names by the sample query from the Basic Search section.