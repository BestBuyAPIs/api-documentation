## Retrieving Collections

*Applies to: Products API &#8226; Stores API &#8226; Categories API*

To retrieve more than one item at a time (e.g. all Products in our catalog), use one of the following queries. *By default the max page size is 100 (meaning 100 unique results). See Pagination for more information on returning results greater than 100.*

Description | Query | Result
------------|-------|-------
**retrieve all products** | https://api.bestbuy.com/v1/products?apiKey=YourAPIKey | returns a collection of products
**retrieve all stores** | https://api.bestbuy.com/v1/stores?apiKey=YourAPIKey | returns a collection of stores
**retrieve all categories** | https://api.bestbuy.com/v1/categories?apiKey=YourAPIKey | returns a collection of categories

Other sections in this documentation explain how to modify these queries to retrieve only the information that you need.

+ <a href="#">Pagination</a>: describes how results consisting of multiple pages are returned
+ <a href="#">Search</a>: describes how to perform search operations
+ <a href="#">Sort</a>: describes how to specify sort criteria for collections
+ <a href="#">Facets</a>: describes how to ask for summarized information about collections

### Collection Header

When a query results in a collection, the response includes an information header containing the following attributes:

Name | Description
-----|------------
**item** | the type of items returned and counted
**current page** | the page being returned
**totalPages** | the number of pages required to list all items
**from** | the index of the first item returned on the current page
**to** | the index of the last item returned on the current page
**total** | the total number of items returned by the query
**queryTime** | the time required to search the database
**totalTime** | the time required to parse, search, format and return results
**canonicalURL** | the non-server part of the query URL
**partial** | flag indicating whether or not the query returned only partial results (in the event of a timeout)