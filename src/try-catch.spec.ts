import { tryCatch } from './try-catch';

describe('tryCatch', () => {
  it('should return a successful value from a promise', async () => {
    const func = Promise.resolve('success');
    const result = await tryCatch(() => func);
    expect(result).toEqual([undefined, 'success']);
  });

  it('should return a successful value from a function', async () => {
    const func = () => 'success';
    const result = await tryCatch(func);
    expect(result).toEqual([undefined, 'success']);
  });

  it('should return an error', async () => {
    const func = () => {
      throw new Error('error');
    };
    const result = await tryCatch(func);
    expect(result).toEqual([expect.any(Error), undefined]);
  });

  it('should return an error from a promise', async () => {
    const func = () => Promise.reject(new Error('error'));

    const result = await tryCatch(func);
    expect(result).toEqual([expect.any(Error), undefined]);
  });

  it('should call the finally function if the promise is rejected', async () => {
    const func = () => {
      throw new Error('error');
    };
    const onFinally = jest.fn();
    const result = await tryCatch(func, onFinally);
    expect(result).toEqual([expect.any(Error), undefined]);
    expect(onFinally).toHaveBeenCalled();
  });

  it('should call the finally function if the promise is resolved', async () => {
    const func = Promise.resolve('success');
    const onFinally = jest.fn();
    const result = await tryCatch(() => func, onFinally);
    expect(result).toEqual([undefined, 'success']);
    expect(onFinally).toHaveBeenCalled();
  });

  it('should call the finally function if the function throws an error', async () => {
    const func = () => {
      throw new Error('error');
    };
    const onFinally = jest.fn();
    const result = await tryCatch(func, onFinally);
    expect(result).toEqual([expect.any(Error), undefined]);
    expect(onFinally).toHaveBeenCalled();
  });

  it('should call the finally function if the function returns a value', async () => {
    const func = () => 'success';
    const onFinally = jest.fn();
    const result = await tryCatch(func, onFinally);
    expect(result).toEqual([undefined, 'success']);
    expect(onFinally).toHaveBeenCalled();
  });
});
