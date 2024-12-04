# react-auto-scroll-container

ReactAutoScrollContainer is a React component designed to automatically scroll to the bottom when new content is added and the user is already at the container's bottom. This feature is especially handy for real-time or dynamic content updates.

## Installation

You can install `react-auto-scroll-container` using npm:

```bash
npm i react-auto-scroll-container
```

## Example

[StackBlitz](https://stackblitz.com/edit/stackblitz-starters-jklubu?file=src%2FApp.tsx)

## Usage

```jsx
import React from 'react';
import {AutoScrollContainer} from 'react-auto-scroll-container';

const App = () => {
  return (
    <AutoScrollContainer active={true} percentageThreshold={10} style={{/* Your inline styles goes here */}} className="Your css classes goes here">
      {/* Your dynamic content goes here */}
    </AutoScrollContainer>
  );
};

export default App;
```

## Props

| Prop                    | Type                                                     | Default       | Description                                                                                                                                     |
| ----------------------- | -------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`            | `React.ReactNode`                                      | Required      | The content to be displayed within the scroll container                                                                                         |
| `percentageThreshold` | `number`                                               | `20`        | Defines the percentage of container height from bottom where auto-scrolling triggers. Lower values mean scrolling triggers closer to the bottom |
| `className`           | `string`                                               | `undefined` | CSS class name(s) to apply to the container                                                                                                     |
| `style`               | `CSSProperties`                                        | `undefined` | Inline styles to apply to the container                                                                                                         |
| `behavior`            | `string`                                               | `"auto"`    | Scroll behavior. Can be "auto", "smooth", or "instant"                                                                                          |
| `active`              | `boolean`                                              | `false`     | When true, enables auto-scrolling when new content is added                                                                                     |
| `forceScroll`         | `boolean`                                              | `false`     | When true, forces scrolling to bottom regardless of user's scroll position                                                                      |
| `overflowY`           | `"auto" \| "scroll" \| "hidden" \| "visible" \| "inherit"` | `"auto"`    | Controls vertical overflow behavior of the container                                                                                            |
| `as`                  | `React.ElementType`                                    | `"div"`     | The HTML element or component to render as the container                                                                                        |

### Example Usage with Props

```jsx
import React from 'react';
import {AutoScrollContainer} from 'react-auto-scroll-container';

const App = () => {
  return (
    <AutoScrollContainer percentageThreshold={10} style={{/* Your inline styles goes here */}} className="Your css classes goes here">
      {/* Your dynamic content goes here */}
    </AutoScrollContainer>
  );
};

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
