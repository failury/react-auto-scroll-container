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
import AutoScrollContainer from 'react-auto-scroll-container';

const App = () => {
  return (
    <AutoScrollContainer percentageThreshold={10} style={{/* Your inline styles goes here */}} className="Your css classes goes here">
      {/* Your dynamic content goes here */}
    </AutoScrollContainer>
  );
};

export default App;
```

## Props

- **`children`** (`React.ReactNode`): The content that will be wrapped by the AutoScrollContainer.

- **`percentageThreshold`** (`number`): The threshold (in percentage) for triggering automatic scrolling when the user is near the top of the container. For example, a value of `10` would trigger scrolling when the user has scrolled to 90% of the container.

- **`className`** (`string`, optional): Additional CSS class names to apply to the AutoScrollContainer component.

- **`style`** (`CSSProperties`, optional): Additional inline styles to apply to the AutoScrollContainer component.

- **`behavior`** (`string`, optional): Custom scrolling behavior for the container. This should be a valid CSS `scroll-behavior` value (e.g., `"auto"`, `"smooth"`).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.