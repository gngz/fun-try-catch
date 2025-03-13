type ValueReturn<T> = [undefined, T];
type ReturnError<T> = [Error, T];
type VoidFunction = () => void;
type Func<R> = () => R;
type AwaitFunc<R> = () => Func<Promise<R>>;

function tryCatch<T>(input: Func<T>, onFinnaly?: VoidFunction): ValueReturn<T> | ReturnError<T>;
function tryCatch<T>(
  input: AwaitFunc<T>,
  onFinnaly?: VoidFunction,
): Promise<ValueReturn<T>> | ReturnError<T>;
/**
 * Call a function and handle any errors it throws and return the result
 * either as a successful value or an error.
 *
 * @param input - The function to call. This can return a value or a promise.
 * @param onFinnaly - A function to call in a finally block after the input
 * function is called.
 *
 * @returns A tuple where the first item is an error if one occurred and the
 * second item is the successful value if one occurred. If the input function
 * returns a promise, this function will return a promise that resolves with
 * the same tuple.
 */
function tryCatch<T>(input: Func<Promise<T>> | Func<T>, onFinnaly?: VoidFunction) {
  try {
    const result = input();

    if (result instanceof Promise) {
      return result.then(
        val => [undefined, val] as ValueReturn<T>,
        error => [error, undefined] as ReturnError<T>,
      );
    }

    return [undefined, result] as ValueReturn<T>;
  } catch (e) {
    return [e, undefined] as ReturnError<T>;
  } finally {
    onFinnaly?.();
  }
}

export { tryCatch };
