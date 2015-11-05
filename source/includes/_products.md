# Products API

The Best Buy Developer API provides a simple, REST-based interface for our entire product catalog, past and present. This includes pricing, availability, specifications, descriptions, and images for more than one million current and historical products. In addition, we offer full archives, updated daily, to make it easier to establish our full catalog locally. **Most product information is updated near real-time, including product pricing.**

*PLEASE NOTE: Music and movie data may be used only where an ability to purchase the related music or movies from BESTBUY.COM is provided to end users. Developers using music and movie data to redirect to BESTBUY.COM must become members of the Best Buy Affiliate Program to allow the sale of music and movies through BESTBUY.COM under the terms of the Affiliate Program.*

<strong>Common Attributes:</strong>

Attribute | Description
--------- | -----------
**Sale Price** | <li>Search products by price range of by a price point less or greater than a certain amount</li><li>Generally used in conjection with other attributes</li>
**Availability** | <li>Identify whether products are available online, in-store or both</li><li>In-store availability can impact affiliate coupons, store pickup, partner rewards programs and more</li>
**Offers** | <li>Search for Weekly Deals, shipping offers, Deal of the Day and more</li>
**Category** | <li>Generally used in conjunction with other attributes to narrow search results (e.g, searching Availability by Category)</li>
**SKU / UPC** | <li>Compare prices and product attributes using barcodes</li><li>Sometimes used to compare Best Buy prices against competitors</li>
**Manufacurer / Brand** | <li>Generally used in conjunction with other attributes</li><li>Especially useful for searching higher-end or distinctive brands (e.g., Apple, Dyson, Beats by Dr. Dre)</li>
**Product Name** | <li>Similar application to Manufacturer/Brand</li><li>Especially useful for searching flagship or recognizable products (e.g., iPhone, Surface Pro) </li>
**Customer Review Average** | <li>Used in conjunction with Category or Product Name attributes</li><li>Useful for ranking products by customer reviews or setting a threshold for review scores</li>
**Keyword** | <li>Used to find specific product attributes via a loose boolean logic (e.g. "All iPad")</li>
**Last Updated** | <li>Determine if any product information has changed within a given date range</li><li>We don't currently offer this attribute but hope to in the future</li>
**Dimensions** | <li>Used mainly for shipping and packaging purposes</li><li>Return a product's height, depth, length and weight</li>
**Color** | <li>Generally used in conjunction with Products or Categories attributes</li><li>Return all items of a certain color within a specific product or category range (e.g., all Red iPhone cases)</li>


<a href="#">View Use Case Examples</a>