// import { test, expect } from '@playwright/test';

// // --- Always Passing Test ---
// test('always passes - page title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('always passes - check visible element', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
// });

// // --- Always Failing Test ---
// test('always fails - wrong title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle('Definitely Not Playwright');
// });

// test('always fails - missing element', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page.getByRole('link', { name: 'Nonexistent Link' })).toBeVisible();
// });

// // --- Random Pass/Fail Test ---
// test('random pass/fail - random element', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const pass = Math.random() > 0.5;
//   if (pass) {
//     await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
//   } else {
//     await expect(page.getByRole('link', { name: 'Nonexistent Link' })).toBeVisible();
//   }
// });

// // --- Rich Metadata Tests ---
// test.describe('metadata group', () => {
//   test('with metadata: owner, severity', async ({ page }, testInfo) => {
//     testInfo.annotations.push({ type: 'owner', description: 'QA Team' });
//     testInfo.annotations.push({ type: 'severity', description: 'critical' });
//     await page.goto('https://playwright.dev/');
//     await expect(page).toHaveTitle(/Playwright/);
//   });

//   test('with metadata: flaky, ticket', async ({ page }, testInfo) => {
//     testInfo.annotations.push({ type: 'flaky', description: 'true' });
//     testInfo.annotations.push({ type: 'ticket', description: 'JIRA-1234' });
//     await page.goto('https://playwright.dev/');
//     // Simulate a flaky test
//     const pass = Math.random() > 0.3;
//     if (pass) {
//       await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
//     } else {
//       await expect(page.getByRole('link', { name: 'Nonexistent Link' })).toBeVisible();
//     }
//   });
// });

// // --- Fast Timeout Test ---
// test('fast timeout', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.waitForTimeout(100);
//   await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
// });