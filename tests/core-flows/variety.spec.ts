import { test, expect } from '@playwright/test';

test.describe('variety tests', () => {
  // --- Always Passing Tests ---
  test('always passes - addition @must_pass', async ({ page }) => {
    // Browser is opened via 'page' fixture
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  test('always passes - string equality', async ({ page }) => {
    const str = 'abc';
    expect(str).toBe('abc');
  });

  // --- Always Failing Tests ---
  test('always fails - wrong math', async ({ page }) => {
    const result = 2 + 2;
    expect(result).toBe(5);
  });

  test('always fails - string mismatch', async ({ page }) => {
    const str = 'abc';
    expect(str).toBe('def');
  });

  // --- Randomly Failing Tests ---
  test('randomly fails - coin flip', async ({ page }) => {
    const pass = Math.random() > 0.5;
    expect(pass).toBe(true);
  });

  test('randomly fails - random number even', async ({ page }) => {
    const num = Math.floor(Math.random() * 10);
    expect(num % 2).toBe(0);
  });
});

test.describe('extra variety tests', () => {
  // --- Always Passing Tests ---
  test('always passes - multiplication @must_pass', async ({ page }) => {
    const result = 3 * 3;
    expect(result).toBe(9);
  });

  test('always passes - array length', async ({ page }) => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
  });

  // --- Always Failing Tests ---
  test('always fails - false is true', async ({ page }) => {
    expect(false).toBe(true);
  });

  test('always fails - wrong array sum', async ({ page }) => {
    const arr = [1, 2, 3];
    const sum = arr.reduce((a, b) => a + b, 0);
    expect(sum).toBe(100);
  });

  // --- Randomly Failing Tests ---
  test('randomly fails - random boolean', async ({ page }) => {
    const pass = Math.random() > 0.7;
    expect(pass).toBe(true);
  });

  test('randomly fails - random string match', async ({ page }) => {
    const options = ['pass', 'fail'];
    const pick = options[Math.floor(Math.random() * options.length)];
    expect(pick).toBe('pass');
  });
});

test.describe('creative variety tests', () => {
  // --- Always Passing Tests ---
  test('always passes - today is a valid date', async ({ page }) => {
    const today = new Date();
    expect(!isNaN(today.getTime())).toBe(true);
  });

  test('always passes - array includes value', async ({ page }) => {
    const arr = ['apple', 'banana', 'cherry'];
    expect(arr.includes('banana')).toBe(true);
  });

  test('always passes - object property exists', async ({ page }) => {
    const obj = { a: 1, b: 2 };
    expect('b' in obj).toBe(true);
  });

  test('always passes - string starts with', async ({ page }) => {
    const str = 'Playwright is cool';
    expect(str.startsWith('Playwright')).toBe(true);
  });

  // --- Always Failing Tests ---
  test('always fails - date in the future', async ({ page }) => {
    const now = Date.now();
    const future = now + 1000000;
    expect(future < now).toBe(true);
  });

  test('always fails - array does not include', async ({ page }) => {
    const arr = [1, 2, 3];
    expect(arr.includes(99)).toBe(true);
  });

  test('always fails - string ends with', async ({ page }) => {
    const str = 'Playwright is cool';
    expect(str.endsWith('boring')).toBe(true);
  });

  // --- Randomly Failing Tests ---
  test('randomly fails - random day of week', async ({ page }) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const pick = days[Math.floor(Math.random() * days.length)];
    expect(pick).toBe('Mon');
  });

  test('randomly fails - random array length', async ({ page }) => {
    const arr = Array.from({ length: Math.floor(Math.random() * 5) + 1 });
    expect(arr.length).toBe(5);
  });

  test('randomly fails - random string length', async ({ page }) => {
    const str = Math.random().toString(36).substring(2, 7);
    expect(str.length).toBe(5);
  });

  test('randomly fails - random math operation', async ({ page }) => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    expect(a + b).toBe(10);
  });

  test('randomly fails - random boolean flip', async ({ page }) => {
    const flip = Math.random() > 0.8;
    expect(flip).toBe(true);
  });
});