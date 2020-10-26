![Tabetalt Kit][banner]

![Build & Deploy][build-badge]
[![Total alerts][lgtm-badge]][lgtm-alerts]
[![LGTM Grade][lgtm-grade]][lgtm-alerts]
[![Maintainability][codeclimate-badge]][codeclimate]
[![npm bundle size][bundle-size]][npm]

## About

Tabetalt Kit is the technical implementation of Tabetalt Designsystem. It is based on [Theme UI][theme-ui] and features theme and a collection of components for use in Tabetalt applications.

Our intentions are to stylize according to _Tabetalt Designsystem_ on all [Theme UI components][theme-ui-components].

## Quickstart

All components are included in one package. Install it as such:

```shell
▶ yarn add @tabetalt/kit
```

Install necessary peer dependencies.

```shell
▶ yarn add theme-ui@next
```

**Remember to include Google Fonts** No fonts are packaged with the library. Therefore, you'll need to add a Link to it, as such:

```html
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

## Example

You'll have to register the `ThemeProvider` in order to make the theme work.

```jsx
import { ThemeProvider, Styled } from 'theme-ui';
import { theme } from '@tabetalt/kit';

const App = () => (
  <ThemeProvider theme={theme}>
    <Styled.h1>Hello world!</Styled.h1>
  </ThemeProvider>
);
```

## Documentation

Apart from this README, you can find details and examples of using the SDK in
the following places:

- [Storybook][storybook]
- [Theme UI][theme-ui]
- [Theme UI Components][theme-ui-components]

[banner]: ./assets/banner.jpg
[npm]: https://www.npmjs.com/package/@tabetalt/kit
[build-badge]: https://img.shields.io/github/workflow/status/tabetalt/kit/Build%20and%20Deploy
[storybook]: https://kit.tabetalt.no/
[storybook-badge]: https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg
[theme-ui]: https://github.com/system-ui/theme-ui
[theme-ui-components]: https://theme-ui.com/components
[codeclimate-badge]: https://img.shields.io/codeclimate/maintainability/tabetalt/kit
[codeclimate]: https://codeclimate.com/github/tabetalt/kit/maintainability
[lgtm-badge]: https://img.shields.io/lgtm/alerts/g/tabetalt/kit.svg?logo=lgtm&logoWidth=18
[lgtm-alerts]: https://lgtm.com/projects/g/tabetalt/kit/alerts/
[lgtm-grade]: https://img.shields.io/lgtm/grade/javascript/github/tabetalt/kit
[bundle-size]: https://img.shields.io/bundlephobia/min/@tabetalt/kit
