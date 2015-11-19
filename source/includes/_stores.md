---
layout: documentation
path: documentation/stores-api
title: Stores API
---

# Stores API

The Best Buy Stores API provides store information for all Best Buy stores in the United States and Puerto Rico. This information includes address, location, hours and services offered.

In addition, store availability of a product can be determined by querying the Products API together with the Stores API. Refer to [In Store Availability](#documentation/stores-api-in-store-availability) for more information on these type of queries.


## Information

 The Stores API enables you to retrieve the basic store information for all Best Buy stores, a specific Best Buy store or those stores that match a set of search parameters.

Some examples on how to query for store information:

- <a href="#storesExample1">Store information for all stores</a>
- <a href="#storesExample2">Store information for a single store using a store identifier</a>
- <a href="#storesExample3">All stores within a city</a>
- <a href="#storesExample4">All stores within a postal code</a>
- <a href="#storesExample5">Stores closest to a specified geo-location</a>
- <a href="#storesExample6">Stores within a radius from a specific location</a>

#### Attributes

{#include csv:tables/storeinfo}

<span class="h3">Request/Response Examples</span>
<a class="anchor" id="storesExample1"></a>
#### Store information for all stores
_The query below will return store information for all stores._
[Return to Information](#documentation/stores-api-information)

{#include code:responses/all}

<a class="anchor" id="storesExample2"></a>
#### Store information for a single store using a store identifier
_The query below will return store information of a store with the `storeId` attribute specified in the input._
[Return to Information](#documentation/stores-api-information)

{#include code:responses/id}

<a class="anchor" id="storesExample3"></a>
#### All stores within a city
_The query below returns stores information for all the stores in the `city` specified as the input._
[Return to Information](#documentation/stores-api-information)

{#include code:responses/storecity}

<a class="anchor" id="storesExample4"></a>
#### All stores within a zipcode
_The query below retrieves stores information for all the stores at the `postalCode` specified as the input._
[Return to Information](#documentation/stores-api-information)

{#include code:responses/zipcode}

##Area Function
The Stores API includes a special function that enables you to locate stores near a specified location.
- `area(location,distance)`

To search based on a location please use the `postalCode` attribute or a `lat`-`long` pair. When postal code is used the reference point in the postal code (zipcode) area is determined by a standard mapping service. If no distance is specified in the function, radius is defaulted to 10 miles. The `location` will be populated with the distance from the specified postal code or lat/long to the store in miles.


<span class="h3">Request/Response Example</span>
<a class="anchor" id="storesExample5"></a>
#### Stores closest to a specified geo-location
_The query below returns stores within 10 miles of ZIP code 55423 (Richfield, MN)_

_Note_: _You may notice the stores returned are stated to be just over 10 miles from the ZIP code. This is due to the way return distance is calculated. The search area is defined as a square, bounded by location point +/- distance identified in request. All stores in that square are returned. Return distance is calculated linearly from the location point (creates a circle). Stores near the corner of the square might be listed as farther than the query distance specified._
[Return to Information](#documentation/stores-api-information) or [Return to Area Function](#documentation/stores-api-area-function)

{#include code:responses/areaFunction}

<a class="anchor" id="storesExample6"></a>
#### Stores within a radius from a specific location
_The query below returns stores within 1000 miles of Barrow, Alaska (71.3 N, 156.8 W)_
[Return to Information](#documentation/stores-api-information) or [Return to Area Function](#documentation/stores-api-area-function)

{#include code:responses/longlatArea}

## Hours
The Hours attributes provide the days and times each Best Buy store is open for the following two weeks. We start our weeks on Sunday and provide hours in both a 12-hour and 24-hour clock. The times displayed are for the local time zones of the Best Buy store being returned. The Detailed Hours attributes provide the most accurate information of when stores will be opened or closed. This can be helpful during holidays as store hours may vary during this time. 

*Hint: Detailed hours are filtered out from the search results by default. Query with `show=all` or `show=detailedHours` to see in the search results.*

How to query for store hours:
- <a href="#storeshrsExample1">Store hours for a single store using a store identifier</a>

<span class="h4">Attributes</span>

{#include csv:tables/hours}

<span class="h3">Request/Response Example</span>
<a class="anchor" id="storeshrsExample1"></a>
####Store hours for a single store using a store identifier
_The below query will return general store hours and detailed store hours for a requested store._

[Return to Hours description](#documentation/stores-api-hours)

{#include code:responses/detailedHours}

## Services Offered
The Stores API includes information related to the services offered at each of the Best Buy stores. `services` is a collection of different services offered at a specified store.

<span class="h4">Attributes</span>

{#include csv:tables/services}

<span class="h3">Request/Response Example</span>

The query below will return all the services offered at the store specified in the input.

{#include code:responses/servicesOffered}


## In-Store Availability
The Stores API, in conjunction with the Products API, allows you to search stores for a product and identify if it is available. In-store availability searches will return only those stores that have a given product in stock. Stores not returned do not have that product in stock. When completing an in-store availability query you should limit the stores that are a part of the query.

Availability in stores is calculated using counts and previous-day sales to determine if the product is likely to be available, might be available or is unlikely to be available.  The algorithm errs on the side of caution, and anything that is not available defaults to "not available".

_HINT: The Products API attribute `inStoreAvailability` will tell you if a product is sold in stores but not if it's available at a particular store. Using the In-Store availability queries is equivalent to checking product availability in store._

<span class="h3">Request/Response Examples</span>

The examples below search Express stores for particular products and identify if the products are in stock. These queries can be based on a storeType or this parameter can be omitted:
- <a href="#storesAvailability1">Express store that has a list of SKUs available</a>
- <a href="#storesAvailability2">Express stores within a ten mile radius using a lat/long that have a SKU available</a>

<a class="anchor" id="storesAvailability1"></a>
#### Express store that has a list of SKUs available
_The query below will return if a specific Express store has a list of SKUs available_
[Return to In-Store Availability](#documentation/stores-api-in-store-availability)

{#include code:responses/oneInStoreAvail}

<a class="anchor" id="storesAvailability2"></a>
#### Express stores within a ten mile radius using a lat/long that have a SKU available
_The query below will return all Express stores within a ten mile radius based on lat/long that have a specific SKU available._
[Return to In-Store Availability](#documentation/stores-api-in-store-availability)

{#include code:responses/inStoreAvailabilityTwo}

