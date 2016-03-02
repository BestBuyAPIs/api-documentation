## Postman

Here's a collection of sample queries in Postman that'll help you get up to speed with our APIs faster.

[![Run in Postman](https://run.pstmn.io/button.png)](https://www.getpostman.com/run-collection/fdbd434f83a8e3855c62)

### Important Notes

* You must defined `apiKey` within in an [environment](https://www.getpostman.com/docs/environments).
* Some portions of the query parameters for Best Buy’s APIs are included in the path: (e.g., <code>…/v1/<b>products(categoryPath.id=pcmcat194000050022&manufacturer=Apple)</b>?apiKey={{apiKey}}&format=json</code>). You should update the in-path parameters within Postman's grey bar that shows the URL.
  * v2 of the Best Buy API will move these parameters out of the path and into the query string.
