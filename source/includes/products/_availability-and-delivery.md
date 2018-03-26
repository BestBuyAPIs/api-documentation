## Availability
The Availability attributes provide details into which products can be purchased online and which products can be picked up in stores.

*Note: For store-specific availability, please refer to our [Stores API](#stores-api) documentation.*

Attribute | Description
--------- | -----------
**friendsAndFamilyPickup** | Identifies if a product is eligible for friends and family pickup
**homeDelivery** | Identifies if a product must be fulfilled using home delivery instead of shipping
**inStoreAvailability** | Identifies if a product is available for purchase in a Best Buy store
**inStoreAvailabilityUpdateDate** | Provides date and time inStoreAvailability last updated
**inStorePickup** | Identifies if a product can be purchased online and picked up in a store
**onlineAvailability** | Identifies if a product can be purchased online
**onlineAvailabilityUpdateDate** | Provides date and time onlineAvailability was last updated
**orderable** | Product ordering status
**specialOrder** | Identifies whether a product will require special handling for delivery


## Shipping and Delivery
The Shipping and Delivery attributes provide details about the cost of shipping or delivery of a product. A product can be shippable or deliverable, but not both.

> Sample `shippingLevelsOfService` response

```json-doc
{
  "shippingLevelsOfService":[
    {
      "serviceLevelId": 1,
      "serviceLevelName": "Standard",
      "unitShippingPrice": 2.99
    },
    {
      "serviceLevelId": 3,
      "serviceLevelName": "Expedited",
      "unitShippingPrice": 10.99
    },
    {
      "serviceLevelId": 5,
      "serviceLevelName": "Express",
      "unitShippingPrice": 14.99
    }
  ]
}
```
Attribute | Description
--------- | -----------
**freeShipping** | Identifies if a product qualifies for free shipping
**freeShippingEligible** | Identifies if a product is currently eligible to receive free shipping from an existing offer
**shippingCost** | Provides product's lowest shipping costs
**shippingWeight** | Identifies product's shipping weight (pounds)
**shippingLevelsOfService** | An array of shipping options
**shippingLevelsOfService.serviceLevelId** | ID of the shipping level of service
**shippingLevelsOfService.serviceLevelName** | Name of the shipping level of service
**shippingLevelsOfService.unitShippingPrice** | Price of the shipping level of service
