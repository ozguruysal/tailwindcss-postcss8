# Tailwindcss PostCSS 8 compatibility issue

Here are the steps to reproduce the issue:

```sh
# Install project dependencies
yarn

# Run the project
yarn dev
```

Build will fail with an error message like below:
```
TypeError: Cannot read property 'charCodeAt' of undefined
```

Open `./postcss.config.js` and comment out `require("tailwindcss")`. Webpack builds successfully. Webpack dev server runs at http://localhost:3000/.


### Downgrade PostCSS plugins that uses PostCSS 8.

postcss-import 12.0.1 is not requiring PostCSS 8, so we leave it and remove other plugins as well as postcss.

```sh
# Remove PostCSS and some plugins
yarn remove postcss autoprefixer postcss-loader

# Add older versions of autoprefixer and postcss-loader
yarn add autoprefixer@9.8.6 postcss-loader@3.0.0
```

Enable `tailwindcss` in `postcss.config.js` again and then run `yarn dev`.

Now all should work as expected.
