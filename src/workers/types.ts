export interface Worker {
  execute: () => Promise<void>;
}
