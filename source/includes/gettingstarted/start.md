# Getting Started

## Get a key
Before you can start using our APIs, you need an API key. It's easy. Just visit **[GET API Key](#https://remix.mashery.com/member/register)** and sign up with your email address. We'll send you an email with instructions on how to activate your new key. Once you've activated your key, you're ready to roll.

## Create your first query
After you activate your key, you can start accessing Best Buy's data.

## Try our Query Builder
This easy-to-use tool will have you running queries in no time. The Query Builder tool will guide you through the creation of custom queries using most of the Best Buy APIs. You can use these queries as a base for your own custom queries, or use them to access Best Buy API data. You can access the Query Builder from our top menu bar or by going to [Query Builder](#http://bestbuyapis.github.io/bby-query-builder/#/productSearch).

## Try accessing one of our APIs directly
Use a basic GET request to get API data. For example, to find product information for a specific product, you can query our Products API using the SKU for that product. The SKU for Batman Begins (Blu-ray Disc) is 8880044, so you can retrieve it as shown below. The response will be returned as either JSON or XML depending on the extension specified in the URI.

*HINT: Don't forget to replace **YourAPIKey** with the API key that you received from us.*

json
```#request:
http://api.bestbuy.com/v1/products/8880044.json?apiKey=YourAPIKey```

```#response:
{
  "sku": 8880044,
  "productId": 1484301,
  "name": "Batman Begins (Blu-ray Disc)"```
...

## Stay Connected
Keep up with the latest changes in our APIs through our [release notes](#https://developer.bestbuy.com/release-notes) and [blog](#https://developer.bestbuy.com/blog).

Have fun and please let us know what you think. Shoot us an email at **developer@bestbuy.com**, tweet us at [@BestBuyAPI](#https://twitter.com/bestbuyapi) or hop on the [StackOverflow support forum](#https://developer.bestbuy.com/support) and share your ideas on how we can deliver the best product. Let’s develop the future of retail together.