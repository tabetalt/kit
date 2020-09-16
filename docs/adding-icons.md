# Tutorial: How to add new icons

Icons are generated based on SVG files located in `icons`. These need to be prepared before running the automated script. We store the optimized icons.

## Prerequisite

You'll need `svgo` to optimize the icon before commit the file. You can use `npx` to quickly _just run it_. If you want to install it globally, you can run:

```shell
$> yarn global add svgo
```

In this tutorial, we'll use `npx` for simplicity!

## Step 1 – Place and Name Your Icon

You should think about naming things, icons as well! All icon names should
be capitalized, eg. «Dots» or «Checkmark», not «dots» or «checkMark». Use [PascalCase](https://techterms.com/definition/pascalcase).

Move the icon into the `icons/` directory.

_Do you need inspiration for naming your icon? Search for terms at [Iconfinder](https://www.iconfinder.com/) and check what typical names are for the same style of icon_

## Step 2 – Optimize SVG files with `svgo`

```shell
$> npx svgo --pretty --multipass icons/<insert-icon-name>.svg
```

Running this command simply optimized the original file. We've added `--pretty` so it's easier to look at the files (if need be) and `--multipass` to make sure that we have optimized it as much as possible.

## Step 3 – Replace color with `currentColor`

Icons are typically designed with a color, such as black. If we want to replace that
color according to the design, we need to replace it with `currentColor`. If the
icon is designed with black background in mind (where the _base color_ is white), you replace the white color.

You'll have to edit this manually.

### Example

This first snippet is like a typical style block in the SVG file.

```html
<style>
    .cls-1{fill:#1b202e}
</style>
```

In this example, you'll need to replace `#1b202e`. As such:
```html
<style>
    .cls-1{fill:currentColor}
</style>
```

## Step 4 – Running the generator script

```shell
$> yarn run generate
```

This command is an alias for `node scripts/generate-icons.js`. What the `generate-icons` does is utilize a shared template for all icons and builds nice, compliant icon components that are styleable with ThemeUI.

Notice that it automatically adds your icon to the storybook as well!
You have now successfully created new fonts.

Do you have any issues, please let us know in [issues][https://github.com/tabetalt/kit/issues]. Are there anything outdated in this tutorial, please consider adding a pull request to make it better!