## Listing Products
We offer various metadata to support you when listing Best Buy products. This includes information such as whether a product is active, if it is new or refurbished, the type of product (music, movie, hardgood, bundle, game, blacktie, or software) and more.

Attribute | Description | Type
--------- | ----------- | ----
**active** | Identifies if product is currently supported in the BESTBUY.COM catalog | boolean
**activeUpdateDate** | Date and time the active attribute was last changed | date
**bundledIn.sku** | Returns collection of bundle sku identifiers that include this product | long
**itemUpdateDate** | Date and time any change was made to this product | date
**members.sku** | Collection of skus within a bundle | long
**new** | Identifies if the product was added within last 30 days | boolean
**secondaryMarket** | Identifies if product is a secondary market product | boolean
**startDate** | Date Best Buy began selling product | date
**type** | Best Buy product type, see section below for more details | string

### Product Type Details
Value | Description
----- | -----------
**blackTie** | Extended warranty services provided by the Best Buy GeekSquad team
**bundle** | A group of products; group can include both material and digital products
**game** | Games; includes both material and digital (downloadable) game products
**hardgood** | Products that are not of type music, movie, game, blackTie, software or bundle
**movie** | Movies; inclues both material and digital (downloadable) movie products
**music** | Music; includes both material and digital (downloadable) music products
**software** | Software; includes material and digital (downloadable) software products