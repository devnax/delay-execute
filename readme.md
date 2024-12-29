# `delay-execute` Documentation

`delay-execute` is a simple JavaScript utility package designed to delay the execution of a provided callback function by a specified amount of milliseconds. If the function is called again within the delay period, the previous timeout will be cleared and reset with the new delay.

## Installation

You can install `delay-execute` via npm or yarn:

```bash
npm install delay-execute
```

or

```bash
yarn add delay-execute
```

## Usage

Import the `delayExecute` function and use it to delay the execution of any callback function:

```javascript
import delayExecute from 'delay-execute';

const myFunction = () => {
  console.log('Action executed after delay');
};

// Delay the execution by 400 milliseconds (default)
delayExecute(myFunction);

// Delay the execution by 1000 milliseconds (1 second)
delayExecute(myFunction, 1000);
```

## Parameters

- **callback** (`Function`): The function that will be executed after the specified delay.
- **miliseconds** (`number`, optional): The delay in milliseconds. Defaults to `400ms` if not provided.

## How It Works

When `delayExecute` is called with a callback and a delay, it sets a timeout to execute the callback after the specified time. If the function is called again before the timeout is completed, the previous timeout is cleared, and the callback execution is reset with the new delay.

## Example

```javascript
const handleSearch = () => {
  console.log('Search triggered');
};

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {
  delayExecute(handleSearch, 500); // Delays the search action by 500ms
});
```

In this example, the search action will only be triggered after the user stops typing for 500ms, preventing unnecessary calls during every keystroke.


## Usage in React

### Example: Delayed Search Input

In this example, the `delay-action` package is used to delay the search action triggered by a user typing into a search input field.

```jsx
import React, { useState } from 'react';
import delayExecute from 'delay-action';

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Delay the search action by 500ms to prevent excessive calls
    delayExecute(handleSearch, 500);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={handleInputChange} 
      />
    </div>
  );
};

export default SearchComponent;
```

### Explanation:

1. **State Management**: 
   - We use the `useState` hook to store the value of the input field (`query`).

2. **`handleSearch` Function**: 
   - This function simulates the action you want to delay, such as a search operation. It logs the query to the console in this example, but you can replace it with any asynchronous task like an API call.

3. **`handleInputChange` Function**:
   - This function is triggered on every input change. It updates the state with the new query and then calls `delayExecute`. 
   - `delayExecute` delays the execution of `handleSearch` by 500 milliseconds. If the user types more characters within this time, the previous timeout is cleared and reset, preventing unnecessary calls.

4. **Input Field**:
   - The input field displays the current search query, and on every keystroke, the `handleInputChange` function is called.

### How It Works:
- The `delayExecute` function sets a timeout to delay the execution of a callback function (e.g., `handleSearch`). 
- If the function is called again within the delay period (500ms in this case), the previous timeout is cleared and reset with the new delay.

### Use Case:
- **Search Bars**: Prevent unnecessary API calls by delaying the search action until the user stops typing for a certain period.
- **Input Validation**: Delay validation checks for form inputs to improve performance.
- **Other User Actions**: Delay other user-driven actions, like submitting forms or triggering UI updates.

---





## License

This package is licensed under the MIT License.

---

This documentation should provide a concise overview of how to use the `delay-execute` package effectively.

## 🤝 Contributing

Contributions are welcome! Please check out the [contribution guidelines](https://github.com/devnax/delay-execute).

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 📞 Support

For help or suggestions, feel free to open an issue on [GitHub](https://github.com/devnax/delay-execute/issues) or contact us via [devnaxrul@gmail.com](mailto:devnaxrul@gmail.com).