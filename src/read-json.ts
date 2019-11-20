import path = require("path");

/**
 * Synchronously reads the specified JSON file. This is just a wrapper around `require()`,
 * except that the file path is resolved relative to the root directory of this package.
 */
export function readJSON<T>(filePath: string): T {
  // Resolve the file path, relative to the parent directory
  filePath = path.resolve(__dirname, "..", filePath);
  return require(filePath) as T;
}
