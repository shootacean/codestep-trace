import { test, expect } from '@playwright/test'

test('Access page', async ({ page }) => {
    await page.goto('http://localhost:3000/recipe-diary');
    await expect(page).toHaveURL('http://localhost:3000/recipe-diary');
    await expect(page).toHaveTitle('Recipe Diary | Codestep Trace');
});
