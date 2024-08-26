# Button Component

The `Button` component is a customizable and reusable UI element built with React and CSS modules. It allows you to create buttons with various styles, sizes, and shapes, along with the ability to handle click events.

## Installation

To use the `Button` component, first ensure you have the following dependencies installed:

```
npm install classnames
```

## Usage

Here’s how you can import and use the Button component in your project:

```
import { Button } from './components/Button';
import React from 'react';

function App() {
  return (
    <div>
      <Button
        type="button"
        theme="primary"
        size="large"
        rounded="rounded_full"
        width="width_full"
        onClick={() => alert('Button clicked!')}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
```

## Props

| Prop        | Type            | Default Value | Required | Description                                                     |
| ----------- | --------------- | ------------- | -------- | --------------------------------------------------------------- |
| `type`      | button          | submit        | true     | Type button                                                     |
| `children`  | React.ReactNode | undefined     | true     | The content inside the button, such as text or icons. Required. |
| `theme`     | BUTTON_STYLE    | primary       | false    | Specifies the button style (e.g., 'primary','secondary').       |
| `size`      | BUTTON_SIZE     | medium        | false    | Defines the size of the button ('small', 'medium', 'large').    |
| `rounded`   | BUTTON_ROUNDED  | rounded_5     | false    | Controls the roundness of the button corners.                   |
| `width`     | BUTTON_WIDTH    | width_auto    | false    | Defines the button width ('width_auto', 'width_full').          |
| `className` | string          | undefined     | false    | Additional custom class names to extend styling.                |
| `disabled`  | boolean         | false         | false    | Disables the button when set to true.                           |
| `onClick`   | void            | undefined     | false    | Function to handle button click events.                         |

## Example

In this example, the button is of type 'submit' with a 'secondary' theme, small size, no rounded corners, and auto width. When clicked, it logs a message to the console.

```
<Button
  type="submit"
  theme="secondary"
  size="small"
  rounded="rounded_0"
  width="width_auto"
  onClick={() => console.log('Button pressed')}
>
  Submit
</Button>
```

## Customization

**- Themes:** You can define custom themes in your CSS module and pass them via the theme prop.

**- Sizes:** Adjust the button size with the size prop using predefined styles.

**- Rounded Corners:** Modify the roundness of the corners by changing the rounded prop.

**- Width:** Control the button’s width by selecting 'width_auto' or 'width_full'.

## Styling

The component uses CSS modules for styling. You can find the corresponding CSS classes in the button.module.css file. Example:

```
.base {
  padding: 10px;
  font-size: 16px;
}

.primary {
  background-color: blue;
  color: white;
}

.secondary {
  background-color: gray;
  color: black;
}

/* Add more styles as needed */
```

## Dependencies

The component requires the classnames library for conditional class handling:

```
npm install classnames
```
