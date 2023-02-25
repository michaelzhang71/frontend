/*
 *
 * throw
 *
 *  - throw expression (string/number/boolean/object)
 *  - throw new Error(message)
 * code execution will stop
 *
 *
 *  */

try {
} catch (error) {
} finally {
}

// if not catched, error will be cascading to the next execution stack till global
// any code before error catched will not be executed
