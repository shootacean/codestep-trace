import { test, expect } from '@playwright/test'

test('Access page', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');
    await expect(page).toHaveURL('http://localhost:3000/profile');
    await expect(page).toHaveTitle('Profile | Codestep Trace');
});