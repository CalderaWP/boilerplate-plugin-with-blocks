# WordPress Plugin With Blocks Boilerplate



## PHP
PHP code should be in the directory `php` and follow the [PSR-4 Standard](https://www.php-fig.org/psr/psr-4/) for class, filename and directory naming, because we are using the [composer autoloader](https://getcomposer.org/doc/01-basic-usage.md#autoloading).

## Install
`composer install`

### Testing
Tests uses phpunit as the test runner, as well as for assertions and [Mockery](http://docs.mockery.io/en/latest/) for mocking.

* Run unit, integration and acceptance tests
    - `composer tests`
    
#### Unit Tests 
* Unit tests are located in /tests/Unit
* Run unit tests
    - `composer test:unit`
#### Integration Tests
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
