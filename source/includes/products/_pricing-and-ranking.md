## Pricing and Sales Ranking
Best Buy's Pricing attributes make it easy to identify the product price, if a product is on sale, how much you can save and even when we made our last pricing changes. We also provide sales ranking over given time periods so you can have an idea of the best-sellers.

Attribute | Description
--------- | -----------
**bestSellingRank** | Ranks products by number of units sold
**dollarSavings** | Identifies amount saved
**lowPriceGuarantee** | Identifies if a product qualifies for the Best Buy low price guarantee
**onSale** | Identifies if sale price is less than regular price
**percentSavings** | Identifies the percent saved between the regularPrice and salePrice
**priceRestriction** | Identifies product sale price display restrictions <li>MAP restriction identifies Minimum Advertised Price; actual selling price may not be shown until prodcut is added to cart<li>ICR restriction identifies In-Checkout Rebate Price; actual selling price may not be shown until checkout<li>If priceRestriction field is ICR or MAP the salePrice may be the same as the regularPrice<li>If referring customers to BESTBUY.COM or Commerce Express for check-out all pricing display requirements will be handled for you<li>Customer will be shown and charged the lowest price as part of checkout<li>Products that have MAP or ICR display restrictions will show lowest salePrice to developers with privilegded keys<li>Guidelines for displaying lowest salePrice are sent to developers with privileged keys 
**priceUpdateDate** | Date and time product price was last updated
**priceWithPlan.newTwoYearPlan** | Mobile phone price when purchased with new 2-year plan
**priceWithPlan.upgradeTwoYearPlan** | Mobile phone price when purchased with 2-year upgrade plan
**priceWithPlan.newTwoYearPlanSalePrice** | Mobile phone sale price when purchased with 2-year plan
**priceWithPlan.upgradeTwoYearPlanSalePrice** | Mobile phone sale price when purchased with 2-year upgrade plan
**priceWithPlan.newTwoYearPlanRegularPrice** | Mobile phone price when purchased with new 2-year plan
**priceWithPlan.upgradeTwoYearPlanRegularPrice** | Mobile phone price when purchased with 2-year upgrade plan
**regularPrice** | Product's regular selling price
**salePrice** | Current item selling price<li>The salePrice may return true even though the salePrice=regularPrice because actual sale price may not be returned due to pricing restrictions<li>The customer will see the actual sale price during check out process<li>See priceRestriction attribute for additional information
**salesRankLongTerm** | Sales rank over past 5-21 days<li>Top-ranked products may be available in-store only and will not be included in Products API results
**salesRankMediumTerm** | Sales rank over past 2-4 days<li>Top-ranked products may be available in-store only and will not be included in Products API results
**salesRankShortTerm** | Sales rank over past day<li>Top-ranked products may be available in-store only and will not be included in Products API results
**tradeInValue** | Estimated value of product trade in<li>Actual value will be determined upon review by a Best Buy store employee
