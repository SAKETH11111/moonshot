declare global {
  interface Window {
    webpackChunk_N_E?: unknown[]; // Using 'unknown[]' as a more specific type
  }
}

// Adding an empty export to make this file a module, which is good practice for .d.ts files.
export {};