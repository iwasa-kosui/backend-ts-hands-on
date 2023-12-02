import type { Result } from './result';
import { Success } from './result';

function foo(): Result<Error, number> {
  return Success(42);
}

const result = foo();

if (result.success) {
  console.log(result.data);
} else {
  console.error(result.error);
}
