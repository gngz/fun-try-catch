# fun-try-catch

A functional approach to error handling in JavaScript and TypeScript.

## Overview

`fun-try-catch` provides a functional paradigm for handling exceptions in JavaScript and TypeScript applications. By utilizing this approach, developers can manage errors more declaratively, leading to cleaner and more maintainable codebases.

## Features

- **Functional Error Handling**: Embraces functional programming principles to manage exceptions without traditional try-catch blocks.
- **TypeScript Support**: Fully typed to enhance developer experience and reduce runtime errors.
- **Lightweight**: Minimal footprint, ensuring optimal performance.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install fun-try-catch

# Using yarn
yarn add fun-try-catch

# Using pnpm
pnpm add fun-try-catch
```

## Usage

Here's how you can integrate `fun-try-catch` into your project:

```typescript
import { tryCatch } from 'fun-try-catch';

// Example function that might throw an error
const mightThrow = (input: string): number => {
  if (input === 'error') throw new Error('An error occurred');
  return parseInt(input, 10);
};

// Using tryCatch to handle the function
const [error, result] = tryCatch(() => mightThrow('123'));

if (error) {
  console.error('Error:', error.message);
} else {
  console.log('Result:', result);
}
```

In this example, `tryCatch` executes the `mightThrow` function. If an error occurs, it captures the error; otherwise, it provides the result.

## API

### `tryCatch`

Executes a function and returns a tuple containing the error (if any) and the result.

**Parameters:**

- `fn: () => T` - The function to execute.

**Returns:**

- `[Error | undefined, T | undefined]` - A tuple where the first element is the error (or `undefined` if no error occurred) and the second is the result (or `undefined` if an error occurred).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure all tests pass before submitting a PR.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Inspired by functional programming practices and the need for more declarative error handling in JavaScript and TypeScript.

