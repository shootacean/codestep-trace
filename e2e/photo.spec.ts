import { test, expect } from '@playwright/test'

test('Access page', async ({ page }) => {
    await page.goto('http://localhost:3000/photo');
    await expect(page).toHaveURL('http://localhost:3000/photo');
    await expect(page).toHaveTitle('Photo Book | Codestep Trace');
});