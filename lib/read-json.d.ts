/**
 * Synchronously reads the specified JSON file. This is just a wrapper around `require()`,
 * except that the file path is resolved relative to the root directory of this package.
 */
export declare function readJSON<T>(filePath: string): T;
