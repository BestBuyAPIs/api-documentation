# Best Buy API Documentation
This project is the public home for the source that will eventually generate the API documentation for [Best Buy's API](https://api.bestbuy.com). It will be served at https://developer.bestbuy.com/documentation once it is production-ready, but for now is available at https://bestbuyapis.github.io/api-documentation/.

The documentation is powered by the fantastic [Slate](https://github.com/tripit/slate) project, an API documentation generator that is open source and very popular.

In the spirit of being a public API, we've chosen to publicize the generators that create our documentation. By doing this we hope to be more transparent when we make changes and provide a gateway for our consumers to become contributors.

## Frequently Asked Questions
#### Where can I see the actual documentation?
You'll want to go to https://bestbuyapis.github.io/api-documentation/ for the compiled version. This project just shows the source code we used to generate it.

#### How do I get my API documentation to look as good as yours?
Check out [Slate](https://github.com/tripit/slate).

#### Where do I go to get an API key?
Go to https://developer.bestbuy.com and click "Get API Key"

#### How can I learn more about the Best Buy API?
Visit https://developer.bestbuy.com or email developer@bestbuy.com

## Getting Started with the Best Buy API Documentation
*Yes, this is identical to getting started with Slate.*
### You're going to need:
 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Getting Set Up
 1. Fork this repository on Github.
 2. Clone *your forked repository* (not our original one) to your hard drive with `git clone https://github.com/YOURUSERNAME/api-documentation.git`
 3. `cd api-documentation`
 4. Install all dependencies: `bundle install`
 5. Start the test server: `bundle exec middleman server`

You can now see the docs at <http://localhost:4567>.

## Need Help? Found a bug?
You can either [submit an issue](https://github.com/BestBuyAPIs/api-documentation/issues) or contact us at developer@bestbuy.com.

