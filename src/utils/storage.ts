/**
 * Browser storage utility helpers
 */

const PREFIX = 'purnit_';

/**
 * Get an item from localStorage with type safety
 */
export function getStorageItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(PREFIX + key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

/**
 * Set an item in localStorage
 */
export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable
  }
}

/**
 * Remove an item from localStorage
 */
export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // Storage unavailable
  }
}

/**
 * Clear all Purnit items from localStorage
 */
export function clearStorage(): void {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => localStorage.removeItem(key));
  } catch {
    // Storage unavailable
  }
}

/**
 * Get an item from sessionStorage with type safety
 */
export function getSessionItem<T>(key: string): T | null {
  try {
    const item = sessionStorage.getItem(PREFIX + key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

/**
 * Set an item in sessionStorage
 */
export function setSessionItem<T>(key: string, value: T): void {
  try {
    sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable
  }
}
