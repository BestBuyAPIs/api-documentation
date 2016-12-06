## Detail
The Best Buy Detail attributes contain a wealth of knowledge about Best Buy products. The intention of these attributes is to provide product descriptions, dimensions, accessories and reviews.

### Attribute List

Attribute | Description | Type
--------- | ----------- | ----
**accessories.sku** | Collection of SKUs that could be an accessory to originating SKU | long
**color** | Product color | string
**condition** | Identifies if the product is new, refurbished or pre-owned | string
**customerReviewAverage** | Average "score" or ratings as submitted by reviewers | float
**customerReviewCount** | Number of customer reviews | integer
**customerTopRated** | Identifies if the product is top rated based on ratings from reviewers. If the Avg rating >= 4.5 and Qty of ratings >= 15, customerTopRated is set to be "true", else is set to "false" | boolean
**depth** | Product depth (inches) | string
**description** | Product description | string
**details.name** | Collection of details about product (Example: whether a camera has a zoom) | string
**details.value** | Collection of values that support the product (Example: A camera's number of Megapixels or amount of zoom) | string
**digital** | Identifies if product is available in a digital format | boolean
**features.feature** | Collection of product features | string
**format** | Identifies media product format | string
**frequentlyPurchasedWith.sku** | Collection of SKUs that are frequently purchased with originating SKU | long
**height** | Product height (inches) | string
**includedItemList.includedItem** | Collection of items included with product (Example: Canon EOS 60D Digital SLR Camera, EF-S 18-135mm IS lens, Battery pack, Battery charger) | string
**longDescription** | Detailed product description | string
**longDescriptionHtml** | Detailed product description with HTML formatting | string
**manufacturer** | Product manufacturer | string
**modelNumber** | Manufacturer product model number | string
**name** | Product name | string
**preowned** | Identifies if product has been previously owned (used) | boolean
**quantityLimit** | Maximum quantity of product that can be ordered |integer
**relatedProducts.sku** | Collection of SKUs that are similar to originating SKU | long
**releaseDate** | Date the product was released | date
**shortDescription** | Brief product description | string
**shortDescriptionHtml** | Brief product description (HTML formatting) | string
**sku** | Best Buy unique product identifier | long
**upc** | Universal Product Code (UPC) | string
**warrantyLabor** | Manufacture labor warranty description | string
**warrantyParts** | Manufacture parts warranty description | string
**warrantyService** | Collection of warranty details related to a specific SKU | string
**weight** | Product weight | string
**width** | Product width (inches) | string
