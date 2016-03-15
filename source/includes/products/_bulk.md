## Products Bulk Download
There are two files generated for all products:

+ `https://api.bestbuy.com/v1/products.xml.zip?apiKey=YourAPIKey` - XML format
+ `https://api.bestbuy.com/v1/products.json.zip?apiKey=YourAPIKey` - JSON format

There is one file generated for all available stores for **Best Buy** products:

+ `https://api.bestbuy.com/v1/storeAvailability.tsv.zip?apiKey=YourAPIKey` - TSV (tab seperated values) format

## Product Subset Downloads

If you are interested in only one type of product, you can make a bulk download of one of our subsets. Subsets are also available each day by 9:00 am(CST).

Type | Description
---- | -----------
productsActive | Includes digital, preowned; excludes BlackTie plans
productsInactive | Includes all inactive products; includes digital, preowned, BlackTie plans
productsMusic | Active music
productsMovie | Active movies
productsHardgood | Active hardgoods; includes preowned
productsBundle | Active bundles
productsGame | Active games; includes preowned
productsSoftware | Active software
productsBlackTie | Active BlackTie
productsDigital | Active digital products

### Query Syntax
`https://api.bestbuy.com/v1/subsets/[subset].[format].zip?apiKey=YourAPIKey`

+ [format] must be *xml* or *json*
+ [subset] must be a "Type" from the above list

### Sample Query For Digital Products
`http://api.bestbuy.com/v1/subsets/productsDigital.xml.zip?apiKey=YourAPIKey`
