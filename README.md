# Weather MApp

This repo is an expiramental POC of a map based weather app that uses geocoding and an interactive map to display weather data to users. This app can be found at http://weather.arschmitz.me. Follow the directions below to run this application locally.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [Xcode](https://developer.apple.com/xcode/downloads/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running as a native app

* `ember cdv:build` to build the app
* To run on actual device
	* `ember cdv open --platform=iso`
	* When Xcode opens at top select your device and click play button
	* go through steps to create a provisioning profile
	* `ember cdv run` while phone is plugged in to deploy to phone
* `ember cdv run` to open in simulator


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

