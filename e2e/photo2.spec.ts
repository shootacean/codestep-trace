import { test, expect } from '@playwright/test'

test('Access page', async ({ page }) => {
    await page.goto('http://localhost:3000/photo2');
    await expect(page).toHaveURL('http://localhost:3000/photo2');
    await expect(page).toHaveTitle('Photo Book 2 | Codestep Trace');
});