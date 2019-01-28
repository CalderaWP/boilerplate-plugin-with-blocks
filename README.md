# WordPress Plugin With Blocks Boilerplate


## Usage

Install: `yarn install`

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
