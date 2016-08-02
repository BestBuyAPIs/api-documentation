## Response Format

Responses can be returned in either **JSON** or **XML**.

*Applies to: Products API &#8226; Stores API &#8226; Categories API*

To request a single item, such as a specific product, indicate the desired response format with the extension added after the item's identifier. For example, `/products/8880044.json`.

To request a collection of items, such as all the products in our catalog, the desired response format is specified in the `format` query parameter. An example of this can be seen in the Retrieving Collections section. If no format is specified then xml will be returned.

*Applies to: Recommendations API*

When using any of the endpoints in the Recommendations API the response format returned will be json. The **XML** format is not supported for the Recommendations API endpoints. You can specify the format using `/6534009/alsoViewed.json` or not specify a format like `/6534009/alsoViewed`.

*Examples of link formats:*

`url: https://api.bestbuy.com/click/5592e2b895800000/12345678/pdp`
`mobileUrl: https://api.bestbuy.com/click/5592e2b895800000/12345678/pdp`
`addToCartUrl: https://api.bestbuy.com/click/5592e2b895800000/12345678/cart`

*NOTE: By agreeing to Best Buy’s terms of service, you also agree not to cache any content except on a temporary basis. As such, our response links will expire after seven days.* 


### JSONP

```
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

*Applies to: Products API &#8226; Stores API &#8226; Categories API &#8226; Recommendations API &#8226; Buying Options API*

To perform cross-site scripting and work with browsers that do not support CORS, use **JSONP** to load our API onto your pages.

Shown to the right is a javascript example, leveraging jQuery's JSONP support, that displays product names by the sample query from the Basic Search section.