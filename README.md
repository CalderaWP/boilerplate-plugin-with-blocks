# WordPress Plugin With Blocks Boilerplate

## Included

### For JavaScript Development and Testing
- [Jest](https://jest.io)
- [Storybooks](https://storybook.js.org/basics/guide-react/)
- ES6/ webpack/ Babel and Hot Module Replacemnet (HMR) for development.

### For PHP Development And Testing
- [phpunit](https://phpunit.de/)
- [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer)
- [A PSR-4 Autoloader Provided By Composer](https://getcomposer.org/doc/01-basic-usage.md#autoloading)

## Requirements
Before using this boilerplate, you must have the following installed:
- [Git]()
- [nodejs](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/)
- [Composer](https://getcomposer.org/doc/faqs/how-to-install-composer-programmatically.md)


## Using This Boilerplate
* Download the latest version to your local computer.
* decided on naming conventions for plugin slug, root namespace and vendor prefix.
    - `boilerplate-plugin-with-blocks` is the plugin slug in boilerplate. This would change to `cf-sprinkles` if you were creating a plugin for Caldera Forms and a service called "spinkles".
    - `CalderaPluginBoilerPlate` is the root namespace in the boilerplate.
    - `calderawp` is the vendor prefix in the boilerplate. Please do not use `calderawp` for third-party add-ons.
* Search and replace `CalderaPluginBoilerPlate` with the root namespace of your plugin.
* Change the directory and main plugin file name to match the plugin slug.
* If you are not working for Calderawp, change the vendor prefix in composer.json to your company's name.
* Update the plugin name in readme.txt, composer.json and package.json
* Install `yarn && composer install`
* Delete boilerplate-related instructions in the README.
* Develop great plugin.

## PHP
PHP code should be in the directory `php` and follow the [PSR-4 Standard](https://www.php-fig.org/psr/psr-4/) for class, filename and directory naming, because we are using the [composer autoloader](https://getcomposer.org/doc/01-basic-usage.md#autoloading).

## Install
`composer install`

### Testing
Tests uses phpunit as the test runner, as well as for assertions and [Mockery](http://docs.mockery.io/en/latest/) for mocking.

* Run all php tests
    - `composer tests`
* Unit tests are located in /tests/Unit
* Run unit tests
    - `composer test:unit`
* Integration tests are located in /tests/Integration
* Run integration tests
    - `composer test:integration`
* Run acceptance tests
    - `composer test:acceptance`
* Fix deviations from code style (PSR-1/2 with tabs)
    - `composer fixes`
    
    

## JavaScript 
### Install

Install: `yarn install`

### Tests
* Start webpack development server
    - `yarn start`
    - WordPress will automatically detect and load the script from the dev server based on the presence of the `asset-manifest.json` the dev server outputs into the build directory. Hot reloading is only provided while the dev server is running.
* Build for production
    - `yarn build`
* Run Jest test watcher
    - `yarn test`
* Start storybook
    - `yarn storybook` 

## License
This is based on [a demo](https://github.com/kadamwhite/wp-block-hmr-demo) and [blog post]() by [K Adam White](http://www.kadamwhite.com).

This plugin is free software; you can redistribute it and/or modify it under the terms of the [GNU General Public License](LICENSE.md#gnu-general-public-license) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version, or
