# WordPress Plugin With Blocks Boilerplate

## Included

### For JavaScript Development and Testing
* [Jest](https://jest.io)
* [Storybooks](https://storybook.js.org/basics/guide-react/)
* ES6/ webpack/ Babel and Hot Module Replacemnet (HMR) for development.

### For PHP Development And Testing
* [phpunit](https://phpunit.de/)
* [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer)
* [A PSR-4 Autoloader Provided By Composer](https://getcomposer.org/doc/01-basic-usage.md#autoloading)

## Requirements
Before using this boilerplate, you must have the following installed:
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
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

## Developing With This Boilerplate
JavaScript goes in `src/`. Test files should be located in the same directory as the unit they test. File name should include `.test.js`.

PHP goes in `php/`. PHP classes, directories, file naming should follow the psr-4 standard.
### JavaScript
* 2 blocks and 2 plugin sidebars are included.
* Block a has example components, tests and stories.
* To add a new block, add a directory to `src/blocks` and add an index.js file in that directory.
* To add a new plugin sidebar, add a directory to `src/blocks` and add an index.js file in that directory.
* Client-side registration of blocks and server-side registration of assets is already handled.

### PHP
A main plugin class is provided. As is setup for automated testing. It is possible that your plugin has no PHP code besides loading assets. If so, this is an over-complication.

* Unit tests should be located in `tests/Unit`.
* Integration tests should be located in `tests/Integration`.
* Acceptance tests should be located in `tests/Acceptance`.

## Recommended Reading
### Gutenberg Setup
* https://www.ibenic.com/integrating-gutenberg-blocks-in-plugins/ 
* https://humanmade.com/2018/11/26/hot-module-replacement-for-gutenberg-blocks

### Creating Blocks
* https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/writing-your-first-block-type/
* https://www.ibenic.com/create-gutenberg-block-displaying-post/
* https://calderaforms.com/2019/01/convert-shortcode-gutenberg-block/

### Testing Gutenberg and React
* https://torquemag.io/2018/11/testing-react-components-with-enzyme/
* https://torquemag.io/2018/11/sharing-react-components-with-gutenberg/

### PHP In WordPress
* https://torquemag.io/2015/01/using-namespaces-wordpress-development/
* https://torquemag.io/2018/04/advanced-oop-wordpress-part-3-unit-testing-wordpress-rest-api-plugins/
* https://www.ibenic.com/using-composer-for-libraries-in-wordpress-plugins-or-themes/
* https://torquemag.io/2017/07/practical-guide-unit-testing-code/


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
This is based on [a demo](https://github.com/kadamwhite/wp-block-hmr-demo) and [blog post](https://humanmade.com/2018/11/26/hot-module-replacement-for-gutenberg-blocks/) by [K Adam White](http://www.kadamwhite.com).

This plugin is free software, licensed under the terms of the [GNU General Public License](LICENSE.md#gnu-general-public-license) as published by the Free Software Foundation, version 2. Please share with your neighbors.
