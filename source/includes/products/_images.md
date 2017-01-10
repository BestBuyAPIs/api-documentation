## Images
The Images attributes provide multiple images for a product. These include large, small, and side images and even interactive 360 degree images.

Attribute | Description
--------- | -----------
**accessoriesImage** | URL of accessories image
**alternateViewsImage** | URL of alternate image
**angleImage** | URL of product's angle image
**backViewImage** | URL of rear image
**energyGuideImage** | URL of product's EnergyGuide image
**image** | URL of BESTBUY.COM product detail page image
**largeFrontImage** | URL of large front image
**largeImage** | URL of image
**leftViewImage** | URL of left image
**mediumImage** | URL of medium image
**remoteControlImage** | URL of remote control image
**rightViewImage** | URL of right image
**spin360Url** | URL of 360-degree image
**thumbnailImage** | URL of image used on BESTBUY.COM listing pages
**topViewImage** | URL of top image

### Serving Images Over SSL
By default, all images are served over HTTP. For example `http://img.bbystatic.com/BestBuy_US/images/products/4971/4971903_sb.jpg`

If your application is HTTPS and you need to serve our images over HTTPS, there are two quick adjustments you need to make:

* Switch the scheme from `http` to `https`
* Switch the hostname from `img.bbystatic.com` to `img-ssl.bbystatic.com`

Put another way, you should do a string replace from `http://img.bbystatic.com/` to `https://img-ssl.bbystatic.com/`. The resulting image URL should look like `https://img-ssl.bbystatic.com/BestBuy_US/images/products/4971/4971903_sb.jpg`